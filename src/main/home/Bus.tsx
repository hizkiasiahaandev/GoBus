"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Send, MapPin, Calendar, Users, Bus, BusFront } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import busSearch from "@/assets/img/bus1.png"

export default function BusPage() {
  const navigate = useNavigate()
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [passenger, setPassenger] = useState("")

  const handleSearch = () => {
    navigate("/bus/result")
  }

  return (
    <main className="bg-white antialiased py-20" id="daftar-bus">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/80 px-4 py-2 text-xs font-semibold text-red-700 shadow-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px] shadow-red-400/30 animate-pulse" />
              <Bus className="w-4 h-4 text-red-600" />
              <span>Mulai dari sini</span>
              <span className="px-2 py-0.5 rounded-md bg-red-100 text-[0.65rem] uppercase tracking-wide text-red-700 border border-red-200 font-bold">
                Cari Armada Charter
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-red-600 leading-tight">
              Cari bus charter untuk perjalanan rombongan Anda
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
              Atur titik jemput, tujuan, dan tanggal keberangkatan dengan mudah.{" "}
              <span className="font-semibold text-red-600">Mandiri Express</span> membantu menemukan
              <span className="text-red-600 font-semibold"> armada charter yang tepat</span> untuk wisata, acara kantor,
              studi tour, ibadah, hingga perjalanan keluarga besar dalam satu rombongan.
            </p>

            <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-600">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 border border-red-100 text-red-700">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Sekali jalan atau pulang-pergi
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 border border-red-100 text-red-700">
                <Users className="w-3.5 h-3.5" />
                Cocok untuk rombongan kecil hingga besar
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <img
                src={busSearch}
                alt="Ilustrasi pencarian bus Mandiri Express"
                className="w-full max-w-md h-auto drop-shadow-xl rounded-xl"
              />
            </div>
          </div>

          <Card className="border-red-100 shadow-lg shadow-red-100/60 rounded-2xl">
            <CardContent className="p-6 md:p-7 space-y-6">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <p className="text-sm md:text-base font-semibold text-slate-800">
                    Temukan bus charter untuk rombongan Anda
                  </p>
                  <p className="text-[0.78rem] md:text-xs text-slate-500">
                    Isi detail perjalanan di bawah ini, lalu lihat pilihan armada charter yang sesuai dengan kebutuhan
                    rombongan pada tanggal tersebut.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 flex items-center gap-1">
                    Dari (Kota / Titik Jemput)
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white">
                      <Send className="w-4 h-4 text-red-600" />
                    </div>
                    <Input
                      placeholder="Contoh: Medan"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="h-11 rounded-md border-slate-200 focus-visible:ring-red-500 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 flex items-center gap-1">
                    Tujuan (Kota / Lokasi Akhir)
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white">
                      <MapPin className="w-4 h-4 text-red-600" />
                    </div>
                    <Input
                      placeholder="Contoh: Berastagi"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="h-11 rounded-md border-slate-200 focus-visible:ring-red-500 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 flex items-center gap-1">
                    Tanggal keberangkatan
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white">
                      <Calendar className="w-4 h-4 text-red-600" />
                    </div>
                    <Input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="h-11 rounded-md border-slate-200 focus-visible:ring-red-500 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 flex items-center gap-1">
                    Perkiraan jumlah penumpang rombongan
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white">
                      <Users className="w-4 h-4 text-red-600" />
                    </div>
                    <Input
                      type="number"
                      min={5}
                      placeholder="Contoh: 30"
                      value={passenger}
                      onChange={(e) => setPassenger(e.target.value)}
                      className="h-11 rounded-md border-slate-200 focus-visible:ring-red-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Button
                  className="w-full h-11 rounded-lg shadow-lg bg-red-600 hover:bg-red-700 text-white font-medium text-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                  onClick={handleSearch}
                >
                  <BusFront className="w-4 h-4" />
                  <span>Cari Bus Charter</span>
                </Button>

                <p className="text-[0.7rem] text-slate-500 text-center leading-relaxed">
                  Data yang Anda isi akan membantu kami menampilkan armada charter yang paling sesuai dengan
                  kebutuhan perjalanan rombongan Anda.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
