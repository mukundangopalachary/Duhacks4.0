"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  user: any | null
  login: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  logout: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)

  const login = async () => {
    // Implement your login logic here
    setUser({ id: 1, name: "User" })
  }

  const logout = async () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

