import type React from "react"
import "./globals.css"
import { Montserrat } from "next/font/google"
import { AuthProvider } from "@/components/auth-provider"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Aegis AI - Customer Service",
  description: "AI-Powered Customer Service Assistant",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'