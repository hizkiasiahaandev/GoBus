"use client"

import { Home, Bus, Phone, Menu, Mail, MapPin, Clock } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState("")

  const menuItems = [
    {
      id: "beranda",
      path: "/",
      icon: Home,
      title: "Beranda",
      subtitle: "Halaman utama dan informasi layanan",
    },
    {
      id: "bus",
      path: "/bus",
      icon: Bus,
      title: "Armada Bus",
      subtitle: "Lihat berbagai pilihan bus kami",
    },
    {
      id: "kontak",
      path: "/kontak",
      icon: Phone,
      title: "Hubungi Kami",
      subtitle: "Dapatkan penawaran terbaik",
    },
  ]

  return (
    <nav className="bg-white fixed z-50 left-0 top-0 w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/30">
              <Bus className="w-5 h-5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-indigo-600">GoBus Charter</span>
              <span className="text-xs text-slate-500">Sewa bus nyaman & aman</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                  onClick={() => setActiveMenu(item.id)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 md:hidden hover:bg-slate-50 active:scale-95 transition-all duration-200 shadow-sm">
                <Menu className="h-5 w-5 text-slate-700" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 border-b border-slate-200 bg-linear-to-br from-indigo-50 to-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/30">
                          <Bus className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col leading-tight">
                          <span className="text-base font-bold text-indigo-600">GoBus Charter</span>
                          <span className="text-xs text-slate-500">Sewa bus nyaman & aman</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Solusi transportasi terpercaya untuk perjalanan grup Anda
                    </p>
                  </div>

                  <div className="p-4 space-y-2">
                    {menuItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        onClick={() => {
                          setActiveMenu(item.id)
                          setOpen(false)
                        }}
                        onMouseEnter={() => setActiveMenu(item.id)}
                        onMouseLeave={() => setActiveMenu("")}
                        className={`flex items-start gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 group ${
                          activeMenu === item.id
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                            : "text-slate-700 hover:bg-indigo-50"
                        }`}
                      >
                        <item.icon
                          className={`w-5 h-5 mt-0.5 transition-transform duration-200 ${
                            activeMenu === item.id ? "scale-110" : "group-hover:scale-110"
                          }`}
                        />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-semibold">{item.title}</span>
                          <span
                            className={`text-xs leading-snug ${
                              activeMenu === item.id ? "text-indigo-100" : "text-slate-500"
                            }`}
                          >
                            {item.subtitle}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 bg-linear-to-br from-slate-50 to-white p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-xs">
                      <MapPin className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-700">Kantor Pusat</p>
                        <p className="text-slate-500 leading-relaxed">Jl. Gatot Subroto No. 123, Medan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-xs">
                      <Phone className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-700">Telepon</p>
                        <p className="text-slate-500">+62 812-3456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-xs">
                      <Mail className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-700">Email</p>
                        <p className="text-slate-500">info@gobuscharter.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-xs">
                      <Clock className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-700">Jam Operasional</p>
                        <p className="text-slate-500">Senin - Minggu: 24 Jam</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-center text-slate-400">
                      © 2025 GoBus Charter. All rights reserved.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
