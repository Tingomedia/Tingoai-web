import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import useAxios from "../hooks/useAxios";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

export interface Message {
  id: string;
  role: string;
  content: string;
  content_type: string;
  file: File;
  sender: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  title: string;
  recent_message: string;
}

interface TingoGPTContextType {
  fetchingConversations: boolean;
  fetchingMessages: boolean;
  gettingResponse: boolean;
  conversations: Conversation[];
  currentConversationId: string | null;
  messages: Message[];
  setCurrentConversation: (id: string) => void;
  sendMessage: (message: string) => Promise<boolean | undefined>;
  fetchConversations: () => Promise<void>;
}

const TingoGPTContext = createContext<TingoGPTContextType | undefined>(
  undefined
);

export const ConversationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<
    string | null
  >(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const [fetchingConversations, setFetchingConversations] = useState(false);
  const [fetchingMessages, setFetchingMessages] = useState(false);
  const [gettingResponse, setGettingResponse] = useState(false);

  const { firebaseUser } = useFirebaseAuth();
  const axiosInstance = useAxios();

  // Fetch conversations from API
  const fetchConversations = async () => {
    try {
      setFetchingConversations(true);
      const { data } = await axiosInstance!.get("/conversations");
      setConversations(data);
      setFetchingConversations(false);
    } catch (error) {
      console.error("Error fetching conversations:", error);
      setFetchingConversations(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (firebaseUser) await fetchConversations();
    })();
  }, [firebaseUser]);

  // Fetch messages when conversation changes
  useEffect(() => {
    const fetchMessages = async () => {
      if (!currentConversationId) return;
      try {
        setFetchingMessages(true);
        const { data } = await axiosInstance!.get(
          `/conversation/${currentConversationId}/messages`,
          {
            params: {
              page: 1,
              size: 20,
            },
          }
        );
        setMessages(data.reverse());
        setFetchingMessages(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setFetchingMessages(false);
      }
    };

    fetchMessages();
  }, [currentConversationId]);

  // Send message
  const sendMessage = async (message: string) => {
    if (!message) return;
    setMessages((prev) => [...prev, prompt]);
    setGettingResponse(true);
    const prompt: any = {};
    prompt.id = messages.length + 1;
    prompt.role = "user";
    prompt.content = message;
    prompt.content_type = "text";

    try {
      let conversationId = currentConversationId;

      if (!conversationId) {
        conversationId = await createConversation();
      }

      if (!conversationId) return;

      const { data } = await axiosInstance!.post(
        `/conversation/${conversationId}/message`,
        { message }
      );

      const response: any = {};
      response.id = messages.length + 2;
      response.role = "assistant";
      response.content =
        data.content_type === "image" ? data.content : data.content.content;
      response.content_type = data.content_type;

      setMessages((prev) => [...prev, response]);
      setGettingResponse(false);
      return true;
    } catch (error) {
      console.error("Error sending message:", error);
      setGettingResponse(false);
    }
  };

  const createConversation = async () => {
    if (currentConversationId) return;
    try {
      const { data } = await axiosInstance!.post(`/create_conversation`);
      setConversations((prev) => [...prev, data]);
      setCurrentConversation(data.id);
      return data.id;
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Set current conversation
  const setCurrentConversation = (id: string) => {
    setCurrentConversationId(id);
    setMessages([]); // Clear previous messages before fetching new ones
  };

  return (
    <TingoGPTContext.Provider
      value={{
        fetchingConversations,
        fetchingMessages,
        gettingResponse,
        conversations,
        currentConversationId,
        messages,
        setCurrentConversation,
        sendMessage,
        fetchConversations,
      }}
    >
      {children}
    </TingoGPTContext.Provider>
  );
};

// Custom hook for using the context
export const useConversations = () => {
  const context = useContext(TingoGPTContext);
  if (!context) {
    throw new Error(
      "useConversations must be used within a ConversationProvider"
    );
  }
  return context;
};
