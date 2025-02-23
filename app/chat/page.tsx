"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChatSidebar } from "@/components/chat-sidebar";
import { ChatMessage } from "@/components/chat-message";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define the type for chat messages
type ChatMessageType = {
  id: string;
  role: "user" | "bot";
  content: string;
};

export default function ChatPage() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Google Generative AI
  const API_KEY = "AIzaSyAIzoVCOL9CmHMnr6PEW76cuPnqxdwpEuk"; // Replace with your actual API key
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: "tunedModels/questionsnresponsesservices-dn8ptxta4hij", // Replace with your model name
  });

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Add user message to chat log
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    setIsLoading(true);

    try {
      // Fetch bot response
      const response = await model.generateContent(input);
      const botReply = response.response.text();

      // Add bot message to chat log
      const botMessage: ChatMessageType = {
        id: Date.now().toString(),
        role: "bot",
        content: botReply,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      const errorMessage: ChatMessageType = {
        id: Date.now().toString(),
        role: "bot",
        content: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to clear the chat
  const handleNewChat = () => {
    setMessages([]); // Clear the messages
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-black to-zinc-900">
      {/* Pass handleNewChat to ChatSidebar */}
      <ChatSidebar onLogout={() => router.push("/")} onNewChat={handleNewChat} />

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-zinc-400">
              <div className="typing-indicator px-4 py-2 rounded-lg bg-zinc-800">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-400"
            />
            <Button type="submit" className="bg-white text-black hover:bg-zinc-200">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}