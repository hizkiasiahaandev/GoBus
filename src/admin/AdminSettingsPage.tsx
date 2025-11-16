"use client"

import { useState } from "react"
import { Settings, User, Lock, Eye, EyeOff, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminSettingsPage() {
  const [currentName, setCurrentName] = useState("Admin Mandiri Express")
  const [newName, setNewName] = useState("")
  const [nameMessage, setNameMessage] = useState("")

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordMessage, setPasswordMessage] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const handleUpdateName = () => {
    if (!newName.trim()) {
      setNameMessage("")
      return
    }
    setCurrentName(newName)
    setNameMessage("Nama berhasil diperbarui!")
    setNewName("")
    setTimeout(() => setNameMessage(""), 3000)
  }

  const handleUpdatePassword = () => {
    setPasswordError("")
    setPasswordMessage("")

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Semua field password harus diisi")
      return
    }

    if (newPassword.length < 8) {
      setPasswordError("Password baru minimal 8 karakter")
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Password baru dan konfirmasi tidak cocok")
      return
    }

    setPasswordMessage("Password berhasil diperbarui!")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    setTimeout(() => setPasswordMessage(""), 3000)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-linear-to-r from-slate-700 to-slate-800 px-6 py-5">
          <div className="flex items-center gap-3 text-white">
            <div className="h-12 w-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Pengaturan Akun</h2>
              <p className="text-sm text-slate-300">Kelola profil dan keamanan akun admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-base">Ganti Nama</CardTitle>
                <CardDescription>Perbarui nama tampilan akun admin</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="current-name">Nama Saat Ini</Label>
              <Input
                id="current-name"
                value={currentName}
                disabled
                className="bg-slate-50"
              />
              <p className="text-[0.75rem] text-slate-500">
                Nama ini akan tampil di header dashboard admin Mandiri Express.
              </p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="new-name">Nama Baru</Label>
              <Input
                id="new-name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Masukkan nama baru"
              />
              <p className="text-[0.75rem] text-slate-500">
                Gunakan nama yang mudah dikenali oleh admin lain atau pemilik usaha.
              </p>
            </div>

            {nameMessage && (
              <Alert className="bg-emerald-50 border-emerald-200">
                <Shield className="h-4 w-4 text-emerald-600" />
                <AlertDescription className="text-emerald-700 text-sm">
                  {nameMessage}
                </AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleUpdateName}
              className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg inline-flex items-center justify-center gap-2"
              disabled={!newName.trim()}
            >
              <User className="w-4 h-4" />
              <span>Simpan Nama Baru</span>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <CardTitle className="text-base">Ganti Password</CardTitle>
                <CardDescription>Perbarui password untuk keamanan akun</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="current-password">Password Saat Ini</Label>
              <div className="relative">
                <Input
                  id="current-password"
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Masukkan password saat ini"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-[0.75rem] text-slate-500">
                Masukkan password yang saat ini digunakan untuk login ke dashboard admin.
              </p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="new-password">Password Baru</Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimal 8 karakter"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-[0.75rem] text-slate-500">
                Gunakan kombinasi huruf, angka, dan simbol untuk meningkatkan keamanan password.
              </p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="confirm-password">Konfirmasi Password Baru</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ketik ulang password baru"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-[0.75rem] text-slate-500">
                Pastikan password yang diketik sama persis dengan password baru di atas.
              </p>
            </div>

            {passwordError && (
              <Alert className="bg-red-50 border-red-200">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-700 text-sm">
                  {passwordError}
                </AlertDescription>
              </Alert>
            )}

            {passwordMessage && (
              <Alert className="bg-emerald-50 border-emerald-200">
                <Shield className="h-4 w-4 text-emerald-600" />
                <AlertDescription className="text-emerald-700 text-sm">
                  {passwordMessage}
                </AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleUpdatePassword}
              className="w-full bg-amber-600 shadow-lg hover:bg-amber-700 inline-flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Perbarui Password</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-200 shadow-sm bg-slate-50">
        <CardContent className="p-5">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-900">Tips Keamanan</p>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>Gunakan password yang kuat dengan kombinasi huruf, angka, dan simbol</li>
                <li>Jangan bagikan kredensial login kepada siapa pun</li>
                <li>Perbarui password secara berkala untuk menjaga keamanan akun</li>
                <li>Logout dari dashboard setelah selesai menggunakan</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
