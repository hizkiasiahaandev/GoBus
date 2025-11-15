"use client"

import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToId = (id: string) => {
    if (id === "beranda") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`)
      return
    }
    scrollToId(id)
  }

  return (
    <footer className="bg-red-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-14 lg:py-16 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1.1fr)] items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/80 px-4 py-2.5 text-xs font-semibold text-red-700 shadow-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px] shadow-red-400/30 animate-pulse"></span>
            <span>Mandiri Express</span>
            <span className="px-2 py-0.5 rounded-md bg-white/70 text-[0.65rem] uppercase tracking-wide text-red-700 border border-red-200 font-bold">
              Trusted Travel Partner
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Sewa bus rombongan lebih mudah, rapi, dan terencana.
          </h2>

          <p className="text-xs md:text-sm leading-relaxed text-red-100 max-w-md">
            Mandiri Express membantu Anda mengatur perjalanan rombongan untuk wisata, acara kantor, studi tour, hingga
            keluarga besar dengan armada yang nyaman dan layanan profesional.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-red-600 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-red-600 transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-red-600 transition"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wide uppercase">Navigasi</h3>
          <ul className="space-y-2 text-sm text-red-100">
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("beranda")}
                className="hover:text-white transition-colors text-left"
              >
                Beranda
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("daftar-bus")}
                className="hover:text-white transition-colors text-left"
              >
                Daftar Bus
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("mengapamemilihkami")}
                className="hover:text-white transition-colors text-left"
              >
                Mengapa Mandiri Express
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("kontak")}
                className="hover:text-white transition-colors text-left"
              >
                Kontak
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("faq")}
                className="hover:text-white transition-colors text-left"
              >
                FAQ
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wide uppercase">Hubungi Kami</h3>
          <ul className="space-y-3 text-sm text-red-100">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-red-200" />
              <span>Jl. Dr. Mansyur No. 12, Medan — Sumatera Utara</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-red-200" />
              <span>0812-3456-7890</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-red-200" />
              <span>support@mandiriexpress.id</span>
            </li>
          </ul>

          <div className="mt-4 rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-xs text-red-50 space-y-2">
            <p className="font-semibold text-white">Butuh penawaran cepat?</p>
            <p className="text-[0.7rem] text-red-100/80">
              Kirim detail perjalanan Anda melalui WhatsApp atau email, dan tim Mandiri Express akan merespons secepatnya pada
              jam kerja.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.75rem] text-red-100/80">
          <p>© {currentYear} Mandiri Express. All rights reserved.</p>
          <p>
            Made with <span className="text-rose-400">❤</span> by <span className="font-medium text-white">Mandiri Express Team</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
