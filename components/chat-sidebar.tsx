import { Button } from "@/components/ui/button";
import { Clock, FileQuestion, LogOut, MessageSquare, Settings } from "lucide-react";
import Image from "next/image";

interface ChatSidebarProps {
  onLogout: () => void;
  onNewChat: () => void; // Add this prop
}

export function ChatSidebar({ onLogout, onNewChat }: ChatSidebarProps) {
  return (
    <div className="w-64 bg-zinc-900 text-white p-4 flex flex-col border-r border-zinc-800">
      {/* Logo and Title */}
      <div className="flex items-center gap-2 mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-22%20at%2020.24.32_5e59aa0f.jpg-5QY7SYhZ3dD48FLNfzx0lqYBctWT7g.jpeg"
          alt="Aegis AI Logo"
          width={40}
          height={40}
          className="rounded"
        />
        <h1 className="text-xl font-semibold">Aegis AI</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-zinc-400 hover:text-white"
          onClick={onNewChat} // Call onNewChat when clicked
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </nav>

      {/* Settings and Logout */}
      <div className="mt-auto space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-zinc-400 hover:text-white"
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}