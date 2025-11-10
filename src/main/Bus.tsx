"use client"

import { Send, MapPin, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import busSearch from "@/assets/img/bus1.png"
import { useNavigate } from "react-router-dom"

export default function BusPage() {
  const navigate = useNavigate()

  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-600">
              Cari Bus disini
            </h1>
            <div className="flex justify-center lg:justify-start">
              <img
                src={busSearch}
                alt="Bus GoBus"
                className="w-full max-w-md h-auto drop-shadow-xl"
              />
            </div>
          </div>

          <Card className="border-indigo-100 shadow-lg shadow-indigo-100">
            <CardContent className="p-6 space-y-5">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-700">
                  Temukan bus untuk perjalanan Anda
                </p>
                <p className="text-xs text-slate-500">
                  Pilih titik keberangkatan, tujuan, dan tanggal perjalanan.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white">
                    <Send className="w-4 h-4 text-indigo-600" />
                  </div>
                  <Input
                    placeholder="From"
                    className="h-11 rounded-md border-slate-200 focus-visible:ring-indigo-500"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                  </div>
                  <Input
                    placeholder="To"
                    className="h-11 rounded-md border-slate-200 focus-visible:ring-indigo-500"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white">
                    <Calendar className="w-4 h-4 text-indigo-600" />
                  </div>
                  <Input
                    type="date"
                    className="h-11 rounded-md border-slate-200 focus-visible:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  className="w-full h-11 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                  onClick={() => navigate("/bus/result")}
                >
                  Search Bus
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
