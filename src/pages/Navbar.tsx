"use client"

import { Home, Bus, Phone, Menu, Mail, MapPin, Clock, HelpCircle } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { id: "beranda", path: "/", icon: Home, title: "Beranda", subtitle: "Halaman utama dan informasi layanan" },
    { id: "daftar-bus", path: "#daftar-bus", icon: Bus, title: "Daftar Bus", subtitle: "Lihat daftar armada di beranda" },
    { id: "bus", path: "/bus", icon: Bus, title: "Armada Bus", subtitle: "Halaman khusus pencarian bus" },
    { id: "faq", path: "#faq", icon: HelpCircle, title: "FAQ", subtitle: "Pertanyaan yang sering diajukan" },
    { id: "kontak", path: "#kontak", icon: Phone, title: "Hubungi Kami", subtitle: "Dapatkan penawaran terbaik" },
  ]

  const scrollToId = (id: string) => {
    if (id === "beranda") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const goToSection = (id: string) => {
    setActiveMenu(id)
    setOpen(false)
    if (location.pathname !== "/") {
      navigate(`/#${id}`)
      return
    }
    scrollToId(id)
  }

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "")
      if (id) scrollToId(id)
    }
  }, [location.pathname, location.hash])

  return (
    <nav className="bg-white fixed z-50 left-0 top-0 w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => {
              setActiveMenu("beranda")
              setOpen(false)
              if (location.pathname !== "/") navigate("/")
              else window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex items-center gap-2"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30">
              <Bus className="w-5 h-5" />
            </div>
            <div className="flex flex-col leading-tight text-left">
              <span className="text-base font-bold text-red-600">Mandiri Express</span>
              <span className="text-xs text-slate-500">Sewa bus nyaman & aman</span>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1.5 text-sm font-medium text-slate-600">
              {menuItems.map((item) => {
                if (item.id === "bus") {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => setActiveMenu(item.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${activeMenu === item.id ? "bg-red-50 text-red-700" : "hover:text-red-600 hover:bg-red-50"
                        }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  )
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => goToSection(item.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${activeMenu === item.id ? "bg-red-50 text-red-700" : "hover:text-red-600 hover:bg-red-50"
                      }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </button>
                )
              })}
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 md:hidden hover:bg-slate-50 active:scale-95 transition-all duration-200 shadow-sm">
                <Menu className="h-5 w-5 text-slate-700" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 border-b border-slate-200 bg-linear-to-br from-red-50 to-white">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => {
                          setActiveMenu("beranda")
                          setOpen(false)
                          if (location.pathname !== "/") navigate("/")
                          else window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                        className="flex items-center gap-2"
                      >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30">
                          <Bus className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col leading-tight text-left">
                          <span className="text-base font-bold text-red-600">Mandiri Express</span>
                          <span className="text-xs text-slate-500">Sewa bus nyaman & aman</span>
                        </div>
                      </button>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed text-left">
                      Solusi transportasi terpercaya untuk perjalanan grup Anda
                    </p>
                  </div>

                  <div className="p-4 space-y-2 text-left">
                    {menuItems.map((item) => {
                      if (item.id === "bus") {
                        return (
                          <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => {
                              setActiveMenu(item.id)
                              setOpen(false)
                            }}
                            className={`flex items-start gap-3 w-full justify-start rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 group ${activeMenu === item.id ? "bg-red-600 text-white shadow-lg shadow-red-500/30" : "text-slate-700 hover:bg-red-50"
                              }`}
                          >
                            <item.icon
                              className={`w-5 h-5 mt-0.5 transition-transform duration-200 ${activeMenu === item.id ? "scale-110" : "group-hover:scale-110"
                                }`}
                            />
                            <div className="flex flex-col gap-0.5 text-left">
                              <span className="font-semibold">{item.title}</span>
                              <span
                                className={`text-xs leading-snug ${activeMenu === item.id ? "text-red-100" : "text-slate-500"
                                  }`}
                              >
                                {item.subtitle}
                              </span>
                            </div>
                          </Link>
                        )
                      }
                      return (
                        <button
                          key={item.id}
                          onClick={() => goToSection(item.id)}
                          className={`flex items-start gap-3 w-full justify-start rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 group ${activeMenu === item.id ? "bg-red-600 text-white shadow-lg shadow-red-500/30" : "text-slate-700 hover:bg-red-50"
                            }`}
                        >
                          <item.icon
                            className={`w-5 h-5 mt-0.5 transition-transform duration-200 ${activeMenu === item.id ? "scale-110" : "group-hover:scale-110"
                              }`}
                          />
                          <div className="flex flex-col gap-0.5 text-left">
                            <span className="font-semibold">{item.title}</span>
                            <span
                              className={`text-xs leading-snug ${activeMenu === item.id ? "text-red-100" : "text-slate-500"
                                }`}
                            >
                              {item.subtitle}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="border-t border-slate-200 bg-linear-to-br from-slate-50 to-white p-6 space-y-4">
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3 text-xs">
                      <MapPin className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-700">Kantor Pusat</p>
                        <p className="text-slate-500 leading-relaxed">Jl. Gatot Subroto No. 123, Medan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-xs">
                      <Phone className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-700">Telepon</p>
                        <p className="text-slate-500">+62 812-3456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-xs">
                      <Mail className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-700">Email</p>
                        <p className="text-slate-500">info@gobuscharter.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-xs">
                      <Clock className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-700">Jam Operasional</p>
                        <p className="text-slate-500">Senin - Minggu: 24 Jam</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-center text-slate-400">© 2025 Mandiri Express. All rights reserved.</p>
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
