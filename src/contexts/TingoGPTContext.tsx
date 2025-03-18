import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import useAxios from "../hooks/useAxios";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

interface Message {
  id: string;
  message: string;
  sender: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  title: string;
}

interface TingoGPTContextType {
  conversations: Conversation[];
  currentConversationId: string | null;
  messages: Message[];
  setCurrentConversation: (id: string) => void;
  sendMessage: (message: string) => Promise<void>;
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
  const { firebaseUser } = useFirebaseAuth();
  const axiosInstance = useAxios();

  // Fetch conversations from API
  const fetchConversations = async () => {
    try {
      const { data } = await axiosInstance!.get("/conversations");
      setConversations(data);
    } catch (error) {
      console.error("Error fetching conversations:", error);
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
        const { data } = await axiosInstance!.get(
          `/conversation/${currentConversationId}/messages`
        );
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [currentConversationId]);

  // Send message
  const sendMessage = async (message: string) => {
    console.log("axiosInstance: \n", axiosInstance);
    try {
      if (!currentConversationId) await createConversation();
      if (!currentConversationId) return;
      const { data } = await axiosInstance!.post(
        `/conversation/${currentConversationId}/message`,
        { message }
      );
      setMessages((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const createConversation = async () => {
    if (currentConversationId) return;
    try {
      const { data } = await axiosInstance!.post(`/create_conversation`);
      setConversations((prev) => [data, ...prev]);
      setCurrentConversation(data.id);
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
