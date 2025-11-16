"use client"

import { useEffect, useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { BusFront, Lock, Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { loginAdmin, isAdminLoggedIn } from "./auth"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (isAdminLoggedIn()) {
      navigate("/admin", { replace: true })
    }
  }, [navigate])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const ok = loginAdmin(username, password)

    if (ok) {
      setError("")
      navigate("/admin", { replace: true })
    } else {
      setError("Username atau password salah.")
    }
  }

  return (
    <main className="bg-linear-to-br from-slate-50 via-white to-red-50 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-lg shadow-lg shadow-red-100/60 overflow-hidden">
        
        <div className="bg-linear-to-r from-red-600 to-red-700 p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <BusFront className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-100">
                Panel Admin
              </p>
              <p className="text-lg font-bold">Mandiri Express</p>
            </div>
          </div>
          <p className="text-xs text-red-100 mt-3">
            Silakan masuk dengan kredensial admin resmi.
          </p>
        </div>

       
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
         
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username admin"
              className="h-11 text-sm border-slate-300 focus-visible:ring-red-500"
              autoComplete="username"
              required
            />
            <p className="text-[0.7rem] text-slate-500">
              Gunakan username admin yang telah diberikan.
            </p>
          </div>

          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="h-11 pr-12 text-sm border-slate-300 focus-visible:ring-red-500"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-[0.7rem] text-slate-500">
              Jaga kerahasiaan password admin Anda.
            </p>
          </div>

          {error && (
            <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              {error}
            </div>
          )}

         
          <div className="space-y-2">
            <Button
              type="submit"
              className="w-full h-12 text-sm font-semibold bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md shadow-red-300/40"
            >
              <Lock className="w-4 h-4 mr-2" />
              Masuk ke Dashboard
            </Button>
            <p className="text-[0.7rem] text-slate-400 text-center">
              Akses hanya untuk admin resmi Mandiri Express.
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}
