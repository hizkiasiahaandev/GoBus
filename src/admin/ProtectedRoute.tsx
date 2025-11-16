"use client"

import { Navigate } from "react-router-dom"
import { isAdminLoggedIn } from "./auth"
import type { JSX } from "react"

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const loggedIn = isAdminLoggedIn()

  if (!loggedIn) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
