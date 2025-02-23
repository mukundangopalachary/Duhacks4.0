"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { useRouter } from "next/navigation"
import { ChatSidebar } from "@/components/chat-sidebar"
import { ChatMessage } from "@/components/chat-message"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const router = useRouter()

  return (
    <div className="flex h-screen bg-gradient-to-br from-black to-zinc-900">
      <ChatSidebar onLogout={() => router.push("/")} />

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
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
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
  )
}

