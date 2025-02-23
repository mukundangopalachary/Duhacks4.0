import type { Message } from "ai"
import { User } from "lucide-react"
import Image from "next/image"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div
      className={`flex items-start gap-3 ${
        isUser ? "justify-end" : "justify-start"
      } animate-in fade-in slide-in-from-bottom duration-300`}
    >
      <div className={`flex max-w-[80%] items-start gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
          {isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-22%20at%2020.24.32_5e59aa0f.jpg-5QY7SYhZ3dD48FLNfzx0lqYBctWT7g.jpeg"
              alt="Aegis AI"
              width={20}
              height={20}
              className="rounded-full"
            />
          )}
        </div>
        <div className={`rounded-lg p-3 ${isUser ? "bg-white text-black" : "bg-zinc-800 text-white"}`}>
          <p className="text-sm">{message.content}</p>
          <div className="flex items-center gap-2 mt-1 text-xs opacity-70">
            <span>
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

