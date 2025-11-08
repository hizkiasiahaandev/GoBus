"use client"

import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">GoBus</h2>

          <p className="max-w-xl text-sm md:text-base text-indigo-50 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit tincidunt eleifend.
            Praesent justo nisi, condimentum sit amet nibh a, gravida feugiat mi. Donec vel sem eget
            nulla malesuada venenatis.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="#"
              aria-label="GoBus on Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 hover:bg-white hover:text-indigo-600 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="GoBus on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 hover:bg-white hover:text-indigo-600 transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="GoBus on YouTube"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 hover:bg-white hover:text-indigo-600 transition"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
