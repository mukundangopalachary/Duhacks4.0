import { LoginForm } from "@/components/login-form"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="container max-w-lg mx-auto flex-1 flex flex-col justify-center px-4">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-22%20at%2020.24.32_5e59aa0f.jpg-5QY7SYhZ3dD48FLNfzx0lqYBctWT7g.jpeg"
              alt="Aegis AI Logo"
              width={64}
              height={64}
              className="rounded mx-auto mb-4"
            />
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-zinc-400">Sign in to continue to Aegis AI</p>
        </div>

        <LoginForm />

        <p className="text-center mt-6 text-sm text-zinc-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

