"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import busThumb from "@/assets/img/bus1.png"
import { MessageCircle, BusFront } from "lucide-react"
import { useNavigate } from "react-router-dom"

type BusStatus = "aktif" | "operasional" | "non-aktif"

export const buses = [
  {
    id: "ME-EX-01",
    nama: "Mandiri Express Executive",
    kelas: "Executive",
    berangkatJam: "18.00",
    berangkatKota: "Medan Sunggal",
    durasi: "28j 00m",
    tibaJam: "22.00 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    status: "operasional" as BusStatus,
    harga: undefined,
  },
  {
    id: "ME-EX-02",
    nama: "Mandiri Express Executive Plus",
    kelas: "Executive",
    berangkatJam: "19.30",
    berangkatKota: "Medan Amplas",
    durasi: "27j 30m",
    tibaJam: "23.00 (+1)",
    tibaKota: "Bandar Lampung (Terminal)",
    status: "aktif" as BusStatus,
    harga: undefined,
  },
  {
    id: "ME-BUS-03",
    nama: "Mandiri Express Business",
    kelas: "Business",
    berangkatJam: "17.00",
    berangkatKota: "Medan Padang Bulan",
    durasi: "29j 15m",
    tibaJam: "22.15 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    status: "operasional" as BusStatus,
    harga: undefined,
  },
  {
    id: "ME-BUS-04",
    nama: "Mandiri Express Business+",
    kelas: "Business",
    berangkatJam: "20.00",
    berangkatKota: "Medan Johor",
    durasi: "27j 45m",
    tibaJam: "23.45 (+1)",
    tibaKota: "Bandar Lampung (Terminal)",
    status: "non-aktif" as BusStatus,
    harga: undefined,
  },
  {
    id: "ME-FAM-05",
    nama: "Mandiri Express Family",
    kelas: "Family",
    berangkatJam: "06.00",
    berangkatKota: "Medan Kota",
    durasi: "30j 00m",
    tibaJam: "12.00 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    status: "aktif" as BusStatus,
    harga: undefined,
  },
  {
    id: "ME-FAM-06",
    nama: "Mandiri Express Family+",
    kelas: "Family",
    berangkatJam: "07.30",
    berangkatKota: "Medan Sunggal",
    durasi: "29j 30m",
    tibaJam: "13.00 (+1)",
    tibaKota: "Bandar Lampung (Terminal)",
    status: "operasional" as BusStatus,
    harga: undefined,
  },
  {
    id: "ME-NGT-07",
    nama: "Mandiri Express Night Trip",
    kelas: "Night Trip",
    berangkatJam: "21.00",
    berangkatKota: "Medan Amplas",
    durasi: "26j 45m",
    tibaJam: "23.45 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    status: "operasional" as BusStatus,
    harga: undefined,
  },
  {
    id: "ME-NGT-08",
    nama: "Mandiri Express Night Express",
    kelas: "Night Trip",
    berangkatJam: "22.00",
    berangkatKota: "Medan Padang Bulan",
    durasi: "26j 30m",
    tibaJam: "00.30 (+2)",
    tibaKota: "Bandar Lampung (Terminal)",
    status: "aktif" as BusStatus,
    harga: undefined,
  },
  {
    id: "ME-MINI-09",
    nama: "Mandiri Express Mini Coach",
    kelas: "Mini Bus",
    berangkatJam: "08.00",
    berangkatKota: "Medan Kota",
    durasi: "30j 15m",
    tibaJam: "14.15 (+1)",
    tibaKota: "Bandar Lampung (Rajabasa)",
    status: "non-aktif" as BusStatus,
    harga: undefined,
  },
  {
    id: "ME-MINI-10",
    nama: "Mandiri Express Mini Coach+",
    kelas: "Mini Bus",
    berangkatJam: "09.00",
    berangkatKota: "Medan Johor",
    durasi: "30j 00m",
    tibaJam: "15.00 (+1)",
    tibaKota: "Bandar Lampung (Terminal)",
    status: "aktif" as BusStatus,
    harga: undefined,
  },
]

const statusConfig: Record<
  BusStatus,
  { label: string; badgeClass: string; dotClass: string; note: string }
> = {
  operasional: {
    label: "Sedang beroperasi",
    badgeClass: "bg-emerald-50 border-emerald-100 text-emerald-700",
    dotClass: "bg-emerald-500",
    note: "Sedang digunakan untuk perjalanan",
  },
  aktif: {
    label: "Aktif & siap dipesan",
    badgeClass: "bg-sky-50 border-sky-100 text-sky-700",
    dotClass: "bg-sky-500",
    note: "Tersedia untuk jadwal berikutnya",
  },
  "non-aktif": {
    label: "Non-aktif / maintenance",
    badgeClass: "bg-slate-50 border-slate-200 text-slate-600",
    dotClass: "bg-slate-400",
    note: "Belum dapat digunakan sementara",
  },
}

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
              {buses.length} armada charter tersedia untuk rute yang dipilih.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-slate-500">
            <span className="hidden lg:inline">
              Klik salah satu armada untuk lihat detail dan galeri bus.
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[760px] rounded-lg border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <div className="grid grid-cols-[2.6fr_repeat(4,1fr)_1.2fr] px-6 py-3 text-[0.7rem] lg:text-[0.75rem] font-semibold text-slate-500 border-b border-slate-200">
              <span>Armada</span>
              <span>Berangkat</span>
              <span>Durasi</span>
              <span>Tiba</span>
              <span>Status Armada</span>
              <span className="text-right">Harga Charter</span>
            </div>

            {buses.map((bus, index) => {
              const statusInfo = statusConfig[bus.status]

              return (
                <button
                  key={bus.id}
                  className="w-full text-left"
                  onClick={() => navigate(`/bus/result/${bus.id}`)}
                >
                  <Card
                    className={`rounded-none border-0 border-t border-slate-200 px-6 py-4 lg:py-5 shadow-none transition ${
                      index % 2 === 0
                        ? "bg-white hover:bg-slate-50"
                        : "bg-slate-50/70 hover:bg-slate-100"
                    }`}
                  >
                    <div className="grid grid-cols-[2.6fr_repeat(4,1fr)_1.2fr] items-center gap-3 text-xs lg:text-sm">
                      <div className="flex items-center gap-3">
                        <img
                          src={busThumb}
                          alt={bus.nama}
                          className="h-14 w-20 lg:h-16 lg:w-24 object-cover rounded-lg border border-slate-200"
                        />
                        <div className="space-y-0.5">
                          <p className="text-sm font-semibold text-slate-900 line-clamp-1">
                            {bus.nama}
                          </p>
                          <div className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 border border-red-100">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                            <span className="text-[0.7rem] font-medium text-red-700">
                              {bus.kelas}
                            </span>
                          </div>
                          <p className="text-[0.7rem] text-slate-500">ID Armada: {bus.id}</p>
                        </div>
                      </div>

                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-slate-900">
                          {bus.berangkatJam}
                        </p>
                        <p className="text-[0.7rem] text-slate-500 line-clamp-1">
                          {bus.berangkatKota}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-900">{bus.durasi}</p>
                        <p className="text-[0.7rem] text-slate-500">Perkiraan perjalanan</p>
                      </div>

                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-slate-900">{bus.tibaJam}</p>
                        <p className="text-[0.7rem] text-slate-500 line-clamp-1">
                          {bus.tibaKota}
                        </p>
                      </div>

                      <div className="flex flex-col items-start gap-1">
                        <div
                          className={`inline-flex items-center justify-center px-2 py-1 rounded-lg border text-[0.7rem] font-semibold gap-1 ${statusInfo.badgeClass}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full aspect-square ${statusInfo.dotClass}`}
                          />
                          <span>{statusInfo.label}</span>
                        </div>
                        <p className="text-[0.65rem] text-slate-500 hidden lg:block">
                          {statusInfo.note}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm lg:text-base font-semibold text-slate-900">
                          --
                        </p>
                        <p className="text-[0.7rem] text-slate-500">
                          Hubungi admin untuk detail harga
                        </p>
                      </div>
                    </div>
                  </Card>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 pt-4">
          <p className="text-[0.75rem] lg:text-xs text-slate-500 text-center lg:text-left">
            Butuh bantuan memilih armada charter yang paling pas untuk rombongan Anda?{" "}
            <span className="font-semibold text-red-600">Tim Mandiri Express</span> siap membantu.
          </p>

          <Button className="inline-flex items-center justify-center gap-2 px-6 lg:px-10 shadow-lg h-10 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs lg:text-sm font-semibold shadow-red-500/30 transition-transform hover:scale-[1.03]">
            <MessageCircle className="w-4 h-4" />
            <BusFront className="w-4 h-4" />
            <span>Hubungi Admin</span>
          </Button>
        </div>
      </div>
    </main>
  )
}
