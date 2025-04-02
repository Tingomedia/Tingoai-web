import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import useAxios from "../hooks/useAxios";
import { useFirebaseAuth } from "./FirebaseAuthContext";

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
  created_at?: string;
}

interface TingoGPTContextType {
  fetchingConversations: boolean;
  fetchingMessages: boolean;
  gettingResponse: boolean;
  conversations: Record<string, Conversation[]>;
  currentConversationId: string | null;
  messages: Message[];
  animateResponse: boolean;
  setAnimateResponse: (value: boolean) => void;
  setCurrentConversation: (id: string | null) => void;
  sendMessage: (message: string) => Promise<boolean | undefined>;
  fetchConversations: () => Promise<void>;
}

const TingoGPTContext = createContext<TingoGPTContextType | undefined>(
  undefined
);

export const ConversationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [conversations, setConversations] = useState<
    Record<string, Conversation[]>
  >({});
  const [currentConversationId, setCurrentConversationId] = useState<
    string | null
  >(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [fetchedConversations, setFetchedConversations] = useState<
    Record<string, Message[]>
  >({});

  const [fetchingConversations, setFetchingConversations] = useState(false);
  const [fetchingMessages, setFetchingMessages] = useState(false);
  const [gettingResponse, setGettingResponse] = useState(false);
  const [animateResponse, setAnimateResponse] = useState(false);

  const preventMessagesFetch = useRef(false); // prevent it when we start new conversation

  const { firebaseUser } = useFirebaseAuth();
  const axiosInstance = useAxios();

  useEffect(() => {
    if (!currentConversationId || messages.length == 0) return;

    setFetchedConversations((prev) => ({
      ...prev, // Keep existing conversations
      [currentConversationId]: messages, // Update the specific conversation ID
    }));
  }, [messages]);

  const sortConversations = (data: any[]) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const past7Days = new Date(today);
    past7Days.setDate(today.getDate() - 7);
    const past30Days = new Date(today);
    past30Days.setDate(today.getDate() - 30);

    const sortedData: any = {
      today: [],
      yesterday: [],
      past7Days: [],
      past30Days: [],
      older: {},
    };

    data.forEach((convo) => {
      const createdAt = new Date(convo.created_at);
      if (createdAt >= today) {
        sortedData.today.push(convo);
      } else if (createdAt >= yesterday) {
        sortedData.yesterday.push(convo);
      } else if (createdAt >= past7Days) {
        sortedData.past7Days.push(convo);
      } else if (createdAt >= past30Days) {
        sortedData.past30Days.push(convo);
      } else {
        const monthYear = createdAt.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
        if (!sortedData.older[monthYear]) {
          sortedData.older[monthYear] = [];
        }
        sortedData.older[monthYear].push(convo);
      }
    });

    return sortedData;
  };

  // Fetch conversations from API
  const fetchConversations = async () => {
    try {
      setFetchingConversations(true);
      const { data } = await axiosInstance!.get("/conversations");
      setConversations(sortConversations(data));
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
    if (!currentConversationId) return;
    const controller = new AbortController();

    const fetchMessages = async () => {
      if (preventMessagesFetch.current) {
        preventMessagesFetch.current = false;
        return;
      }
      try {
        setFetchingMessages(true);
        const { data } = await axiosInstance!.get(
          `/conversation/${currentConversationId}/messages`,
          {
            params: {
              page: 1,
              size: 20,
            },
            signal: controller.signal,
          }
        );
        setMessages(data.reverse());
        setFetchingMessages(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setFetchingMessages(false);
      }
    };

    if (fetchedConversations[currentConversationId]) {
      setMessages(fetchedConversations[currentConversationId]);
    } else fetchMessages();

    return () => controller.abort();
  }, [currentConversationId]);

  // Send message
  const sendMessage = async (message: string) => {
    if (!message) return;
    try {
      const prompt: any = {};
      prompt.id = messages.length + 1;
      prompt.role = "user";
      prompt.content = message;
      prompt.content_type = "text";

      setMessages((prev) => [...prev, prompt]);
      setGettingResponse(true);

      let conversationId = currentConversationId;

      if (!conversationId) {
        conversationId = await createConversation();
      }

      if (!conversationId) return;

      if (preventMessagesFetch.current) {
        // setConversations(
        //   (prev) =>
        //     prev.some((conv) => conv.id === conversationId)
        //       ? prev.map((conv) =>
        //           conv.id === conversationId
        //             ? { ...conv, recent_message: message } // Update existing
        //             : conv
        //         )
        //       : [
        //           ...prev,
        //           { id: conversationId || "0", recent_message: message },
        //         ] // Add new if not found
        // );
        setConversations((prev) => {
          const updatedConversations = { ...prev }; // Clone previous state

          let found = false;
          Object.keys(updatedConversations).forEach((key) => {
            if (!Array.isArray(updatedConversations[key])) {
              updatedConversations[key] = []; // Ensure it's always an array
            }

            updatedConversations[key] = updatedConversations[key].map(
              (conv) => {
                if (conv.id === conversationId) {
                  found = true;
                  return { ...conv, title: message }; // Update existing
                }
                return conv;
              }
            );
          });

          // If conversation not found, add it to "today"
          if (!found) {
            updatedConversations.today = [
              ...(updatedConversations.today || []), // Ensure "today" exists
              { id: conversationId || "0", title: message },
            ];
          }

          return updatedConversations;
        });
      }

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
      setAnimateResponse(true);
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
      // setConversations((prev) => [...prev, data]);
      setConversations((prev) => ({
        ...prev,
        today: [...(prev.today || []), data],
      }));
      preventMessagesFetch.current = true;
      setCurrentConversation(data.id);
      return data.id;
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Set current conversation
  const setCurrentConversation = (id: string | null) => {
    setCurrentConversationId(id);
    if (!preventMessagesFetch.current) setMessages([]); // Clear previous messages before fetching new ones
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
        animateResponse,
        setAnimateResponse,
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
