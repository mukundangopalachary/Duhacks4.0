"use client"
import { useRouter } from "next/navigation"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { ChatMessage } from "./chat-message"
import { ChatSidebar } from "./chat-sidebar"
import { useAuth } from "./auth-provider"

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  return (
    <div className="flex h-screen bg-black">
      <ChatSidebar onLogout={handleLogout} />

      <main className="flex-1 flex flex-col">
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
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

        {/* Input Area */}
        <div className="border-t border-zinc-800 p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
            />
            <Button type="submit" className="bg-white text-black hover:bg-zinc-200">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

