import { Button } from "@/components/ui/button"
import { ChevronRight, MessageCircle, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-22%20at%2020.24.32_5e59aa0f.jpg-5QY7SYhZ3dD48FLNfzx0lqYBctWT7g.jpeg"
              alt="Aegis AI Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-semibold text-xl">Aegis AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-zinc-400 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-zinc-200">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Your Shield for Smarter, Personalized Customer Support
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Delivering intelligent, context-aware customer service with NLU, sentiment analysis, and multilingual
            support.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
              Try Out Aegis AI
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Aegis AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-black rounded-lg border border-zinc-800">
              <Shield className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Context-Aware</h3>
              <p className="text-zinc-400">
                Understands conversation context and maintains memory for personalized interactions.
              </p>
            </div>
            <div className="p-6 bg-black rounded-lg border border-zinc-800">
              <MessageCircle className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">Multilingual</h3>
              <p className="text-zinc-400">Supports multiple languages for global customer service capabilities.</p>
            </div>
            <div className="p-6 bg-black rounded-lg border border-zinc-800">
              <Zap className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
              <p className="text-zinc-400">
                Seamlessly integrates with your existing CRM systems for enhanced support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How Aegis AI Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Natural Language Understanding</h3>
              <p className="text-zinc-400">
                Advanced NLU capabilities allow Aegis AI to understand user intent and context, providing more accurate
                and relevant responses.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contextual Memory</h3>
              <p className="text-zinc-400">
                Maintains conversation history and user preferences to provide personalized support throughout the
                interaction.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Sentiment Analysis</h3>
              <p className="text-zinc-400">
                Real-time analysis of user sentiment helps adapt responses and escalate issues when necessary.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">CRM Integration</h3>
              <p className="text-zinc-400">
                Connects with your existing customer relationship management systems for seamless data flow and enhanced
                support capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Limitations of Aegis AI</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="p-4 bg-black rounded-lg border border-zinc-800">
              <p className="text-zinc-400">Complex queries may require human intervention for resolution</p>
            </div>
            <div className="p-4 bg-black rounded-lg border border-zinc-800">
              <p className="text-zinc-400">Understanding certain dialects and colloquialisms can be challenging</p>
            </div>
            <div className="p-4 bg-black rounded-lg border border-zinc-800">
              <p className="text-zinc-400">Emotional nuance in sensitive situations may need human touch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-22%20at%2020.24.32_5e59aa0f.jpg-5QY7SYhZ3dD48FLNfzx0lqYBctWT7g.jpeg"
                  alt="Aegis AI Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="font-semibold">Aegis AI</span>
              </div>
              <p className="text-sm text-zinc-400">Your Shield for Smarter Customer Support</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-400">
            © 2025 Aegis AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

