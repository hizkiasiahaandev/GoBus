"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import busThumb from "@/assets/img/bus1.png"
import { Star, MessageCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const buses = [
  {
    id: "GB-EX-01",
    nama: "GoBus Executive",
    kelas: "Executive",
    berangkatJam: "18.00",
    berangkatKota: "Medan Sunggal",
    durasi: "28j 00m",
    tibaJam: "22.00 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    rating: 4.8,
    harga: "Rp 4.500.000",
  },
  {
    id: "GB-EX-02",
    nama: "GoBus Executive Plus",
    kelas: "Executive",
    berangkatJam: "19.30",
    berangkatKota: "Medan Amplas",
    durasi: "27j 30m",
    tibaJam: "23.00 (+1)",
    tibaKota: "Bandar Lampung (Terminal)",
    rating: 4.7,
    harga: "Rp 4.650.000",
  },
  {
    id: "GB-BUS-03",
    nama: "GoBus Business",
    kelas: "Business",
    berangkatJam: "17.00",
    berangkatKota: "Medan Padang Bulan",
    durasi: "29j 15m",
    tibaJam: "22.15 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    rating: 4.5,
    harga: "Rp 4.200.000",
  },
  {
    id: "GB-BUS-04",
    nama: "GoBus Business+",
    kelas: "Business",
    berangkatJam: "20.00",
    berangkatKota: "Medan Johor",
    durasi: "27j 45m",
    tibaJam: "23.45 (+1)",
    tibaKota: "Bandar Lampung (Terminal)",
    rating: 4.4,
    harga: "Rp 4.350.000",
  },
  {
    id: "GB-FAM-05",
    nama: "GoBus Family",
    kelas: "Family",
    berangkatJam: "06.00",
    berangkatKota: "Medan Kota",
    durasi: "30j 00m",
    tibaJam: "12.00 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    rating: 4.3,
    harga: "Rp 4.000.000",
  },
  {
    id: "GB-FAM-06",
    nama: "GoBus Family+",
    kelas: "Family",
    berangkatJam: "07.30",
    berangkatKota: "Medan Sunggal",
    durasi: "29j 30m",
    tibaJam: "13.00 (+1)",
    tibaKota: "Bandar Lampung (Terminal)",
    rating: 4.2,
    harga: "Rp 4.050.000",
  },
  {
    id: "GB-NGT-07",
    nama: "GoBus Night Trip",
    kelas: "Night Trip",
    berangkatJam: "21.00",
    berangkatKota: "Medan Amplas",
    durasi: "26j 45m",
    tibaJam: "23.45 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    rating: 4.6,
    harga: "Rp 4.700.000",
  },
  {
    id: "GB-NGT-08",
    nama: "GoBus Night Express",
    kelas: "Night Trip",
    berangkatJam: "22.00",
    berangkatKota: "Medan Padang Bulan",
    durasi: "26j 30m",
    tibaJam: "00.30 (+2)",
    tibaKota: "Bandar Lampung (Terminal)",
    rating: 4.4,
    harga: "Rp 4.750.000",
  },
  {
    id: "GB-MINI-09",
    nama: "GoBus Mini Coach",
    kelas: "Mini Bus",
    berangkatJam: "08.00",
    berangkatKota: "Medan Kota",
    durasi: "30j 15m",
    tibaJam: "14.15 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    rating: 4.1,
    harga: "Rp 3.800.000",
  },
  {
    id: "GB-MINI-10",
    nama: "GoBus Mini Coach+",
    kelas: "Mini Bus",
    berangkatJam: "09.00",
    berangkatKota: "Medan Johor",
    durasi: "30j 00m",
    tibaJam: "15.00 (+1)",
    tibaKota: "Bandar Lampung (Terminal)",
    rating: 4.0,
    harga: "Rp 3.750.000",
  },
]

export default function BusResultPage() {
  const navigate = useNavigate()

  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <h1 className="text-lg lg:text-2xl font-semibold text-slate-900 flex items-center gap-2">
              Medan
              <span className="text-slate-400">→</span>
              <span>Bandar Lampung</span>
            </h1>
            <p className="text-xs lg:text-sm text-slate-600">
              {buses.length} bus tersedia untuk tanggal yang dipilih.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="hidden lg:inline text-slate-400 text-[0.7rem]">Klik salah satu armada untuk lihat detail.</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[760px] rounded-lg border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <div className="grid grid-cols-[2.6fr_repeat(4,1fr)_1.2fr] px-6 py-3 text-[0.7rem] lg:text-[0.75rem] font-semibold text-slate-500 border-b border-slate-200">
              <span>Armada</span>
              <span>Berangkat</span>
              <span>Durasi</span>
              <span>Tiba</span>
              <span>Rating</span>
              <span className="text-right">Harga Sewa</span>
            </div>

            {buses.map((bus, index) => (
              <button
                key={bus.id}
                className="w-full text-left"
                onClick={() => navigate(`/bus/result/${bus.id}`)}
              >
                <Card className={`rounded-none border-0 border-t border-slate-200 px-6 py-4 lg:py-5 shadow-none transition ${index % 2 === 0 ? "bg-white hover:bg-slate-50" : "bg-slate-50/70 hover:bg-slate-100"
                  }`}>
                  <div className="grid grid-cols-[2.6fr_repeat(4,1fr)_1.2fr] items-center gap-3 text-xs lg:text-sm">

                    <div className="flex items-center gap-3">
                      <img
                        src={busThumb}
                        alt={bus.nama}
                        className="h-14 w-20 lg:h-16 lg:w-24 object-cover rounded-lg border border-slate-200"
                      />
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-slate-900 line-clamp-1">{bus.nama}</p>
                        <div className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 border border-indigo-100">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                          <span className="text-[0.7rem] font-medium text-indigo-700">{bus.kelas}</span>
                        </div>
                        <p className="text-[0.7rem] text-slate-500">ID Armada: {bus.id}</p>
                      </div>
                    </div>


                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-slate-900">{bus.berangkatJam}</p>
                      <p className="text-[0.7rem] text-slate-500 line-clamp-1">{bus.berangkatKota}</p>
                    </div>


                    <div>
                      <p className="text-sm text-slate-900">{bus.durasi}</p>
                      <p className="text-[0.7rem] text-slate-500">Perkiraan perjalanan</p>
                    </div>


                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-slate-900">{bus.tibaJam}</p>
                      <p className="text-[0.7rem] text-slate-500 line-clamp-1">{bus.tibaKota}</p>
                    </div>


                    <div className="flex flex-col items-start gap-1">
                      <div className="inline-flex items-center justify-center px-2 py-1 rounded-lg bg-amber-400 text-[0.7rem] font-semibold text-white gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        <span>{bus.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-[0.65rem] text-slate-500">Rating penumpang</p>
                    </div>


                    <div className="text-right">
                      <p className="text-sm lg:text-base font-semibold text-slate-900">{bus.harga}</p>
                      <p className="text-[0.7rem] text-slate-500">Per armada / perjalanan</p>
                    </div>
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 pt-4">
          <p className="text-[0.75rem] lg:text-xs text-slate-500 text-center lg:text-left">
            Butuh rekomendasi armada yang paling cocok untuk rombongan Anda?{" "}
            <span className="font-semibold text-indigo-600">Tim GoBus</span> siap membantu.
          </p>

          <Button
            className="inline-flex items-center justify-center gap-2 px-6 lg:px-10  shadow-lg h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs lg:text-sm font-semibold shadow-indigo-500/30 transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hubungi Admin</span>
          </Button>
        </div>
      </div>
    </main>
  )
}
