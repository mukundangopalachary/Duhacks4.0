"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/auth-provider"

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      // Here you would typically create the user account
      await login() // Log them in after signup
      router.push("/chat")
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              autoCapitalize="words"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              className="bg-zinc-800 border-zinc-700 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="bg-zinc-800 border-zinc-700 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              disabled={isLoading}
              className="bg-zinc-800 border-zinc-700 text-white"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

