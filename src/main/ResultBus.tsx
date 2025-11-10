"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import busThumb from "@/assets/img/bus1.png"
import { Star } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const buses = [
  {
    id: "B01",
    kelas: "Executive",
    berangkatJam: "18:00",
    berangkatKota: "Medan Sunggal",
    durasi: "28j 00m",
    tibaJam: "02:00",
    tibaKota: "Rajabasa",
    rating: 3.6,
    harga: "Rp 450.000",
  },
]

export default function BusResultPage() {
  const navigate = useNavigate()

  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg md:text-xl font-semibold text-slate-900">
            Bus Medan ke Bandar Lampung
          </h1>
          <p className="text-xs md:text-sm text-slate-600">
            {buses.length} Bus ditemukan
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[700px] border border-slate-200 rounded-md">
            <div className="grid grid-cols-[2.5fr_repeat(5,1fr)] px-6 py-3 text-xs font-semibold text-slate-500 border-b border-slate-200">
              <span>Bus</span>
              <span>Berangkat</span>
              <span>Durasi</span>
              <span>Kedatangan</span>
              <span>Penilaian</span>
              <span>Harga</span>
            </div>

            {buses.map((bus) => (
              <button
                key={bus.id}
                className="w-full text-left"
                onClick={() => navigate(`/bus/result/${bus.id}`)}
              >
                <Card className="rounded-none border-0 border-t border-slate-200 px-6 py-4 shadow-none hover:bg-slate-50 transition">
                  <div className="grid grid-cols-[2.5fr_repeat(5,1fr)] items-center gap-4 text-xs md:text-sm">
                    <div className="flex items-center gap-3">
                      <img
                        src={busThumb}
                        alt={bus.id}
                        className="h-14 w-20 object-cover rounded-sm border border-slate-200"
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{bus.id}</p>
                        <p className="text-xs text-slate-500">{bus.kelas}</p>
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-slate-900">{bus.berangkatJam}</p>
                      <p className="text-xs text-slate-500">{bus.berangkatKota}</p>
                    </div>

                    <p className="text-sm text-slate-900">{bus.durasi}</p>

                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-slate-900">{bus.tibaJam}</p>
                      <p className="text-xs text-slate-500">{bus.tibaKota}</p>
                    </div>

                    <div className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-amber-400 text-xs font-semibold text-white gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      <span>{bus.rating.toFixed(1)}</span>
                    </div>

                    <p className="text-sm font-semibold text-slate-900">
                      {bus.harga}
                    </p>
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button className="px-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">
            Hubungi Admin
          </Button>
        </div>
      </div>
    </main>
  )
}
