"use client"

import { useState } from "react"
import {
  BusFront,
  LogOut,
  Menu,
  Home,
  Bus,
  FileText,
  Settings,
  ChevronDown,
  User,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { logoutAdmin } from "./auth"

const menuItems = [
  {
    id: "dashboard",
    icon: Home,
    title: "Dashboard",
    subtitle: "Ringkasan dan statistik armada",
    path: "/admin",
  },
  {
    id: "armada",
    icon: Bus,
    title: "Kelola Armada",
    subtitle: "Manajemen dan monitoring bus",
    path: "/admin/armada",
  },
  {
    id: "daftarbus",
    icon: Bus,
    title: "Daftar Bus",
    subtitle: "List lengkap seluruh bus",
    path: "/admin/daftar-bus",
  },
  {
    id: "charter",
    icon: FileText,
    title: "Permintaan Charter",
    subtitle: "Daftar permintaan dari pelanggan",
    path: "/admin/charter",
  },
  {
    id: "pengaturan",
    icon: Settings,
    title: "Pengaturan",
    subtitle: "Konfigurasi sistem dan akun",
    path: "/admin/pengaturan",
  },
]


export default function AdminLayout() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutAdmin()
    navigate("/admin/login", { replace: true })
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-screen">
      {/* HEADER SIDEBAR */}
      <div className="p-4 border-b border-slate-200 shrink-0">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-white">
            <BusFront className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Mandiri Express</p>
            <p className="text-xs text-slate-500">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* MENU (scroll sendiri kalau tinggi) */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/admin"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "w-full flex items-start gap-3 px-4 py-3 rounded-lg text-left transition-all",
                  isActive
                    ? "bg-red-600 text-white shadow-md"
                    : "text-slate-700 hover:bg-slate-100",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p
                      className={`text-xs mt-0.5 ${isActive ? "text-red-100" : "text-slate-500"
                        }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </>
              )}
            </NavLink>
          )
        })}
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t border-slate-200 shrink-0">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* SIDEBAR DESKTOP (sticky, tapi isinya bisa scroll) */}
      <aside className="hidden lg:block w-72 bg-white border-r border-slate-200 sticky top-0 self-start">
        <SidebarContent />
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        {/* HEADER (sticky di atas) */}
        <header className="bg-white border-b border-slate-200 px-4 py-4 lg:px-6 sticky top-0 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Sidebar Mobile */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden h-9 w-9">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-72">
                  <SidebarContent />
                </SheetContent>
              </Sheet>

              {/* Title Desktop */}
              <div className="hidden lg:block">
                <h1 className="text-xl font-semibold text-slate-900">
                  Dashboard Mandiri Express
                </h1>
                <p className="text-xs text-slate-500">
                  Kelola armada dan pantau status bus secara real-time
                </p>
              </div>

              {/* Brand mobile */}
              <div className="lg:hidden flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <BusFront className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Mandiri Express</p>
                  <p className="text-xs text-slate-500">Admin Panel</p>
                </div>
              </div>
            </div>

            {/* RIGHT HEADER */}
            <div className="flex items-center gap-2">
              {/* Logout desktop */}
              <Button
                variant="outline"
                onClick={handleLogout}
                className="hidden lg:flex h-9 rounded-full text-sm border-slate-300 gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>

              {/* Dropdown mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="lg:hidden h-9 px-3 gap-2 border-slate-300"
                  >
                    <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center text-white">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Admin</span>
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Admin</p>
                        <p className="text-xs text-slate-500 font-normal">
                          admin@mandiriexpress.com
                        </p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span className="font-medium">Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* CONTENT – ikut scroll halaman biasa */}
        <main className="p-4 lg:p-6 space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
