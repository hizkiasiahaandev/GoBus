"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useParams, useNavigate } from "react-router-dom"
import { buses } from "./ResultBus"
import { ArrowLeft, SendHorizonal } from "lucide-react"

type BusStatus = "aktif" | "operasional" | "non-aktif"

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

export default function BusDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const bus = buses.find((b) => b.id === id)

  if (!bus) {
    return (
      <main className="bg-white antialiased py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <Button
            variant="ghost"
            className="px-0 text-slate-700 hover:text-slate-900"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Kembali
          </Button>
          <p className="text-slate-700 text-sm">Bus tidak ditemukan.</p>
        </div>
      </main>
    )
  }

  const statusInfo = statusConfig[bus.status as BusStatus]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate("/pemesanan-berhasil")
  }

  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <Button
          variant="ghost"
          className="px-0 text-slate-700 hover:text-slate-900 flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs md:text-sm">Kembali ke daftar armada</span>
        </Button>

        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 font-semibold">
              Form pemesanan Mandiri Express
            </p>
            <h1 className="text-xl md:text-2xl font-semibold text-slate-900 flex flex-wrap items-center gap-2">
              {bus.nama}
              <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 border border-red-100 text-[0.7rem] font-medium text-red-700">
                {bus.kelas}
              </span>
            </h1>
            <p className="text-xs md:text-sm text-slate-600">
              Lengkapi data penanggung jawab rombongan dan detail perjalanan. Tim Mandiri Express
              akan mengonfirmasi ketersediaan armada dan harga charter final melalui WhatsApp.
            </p>
          </div>

          <div className="text-right space-y-1">
            <p className="text-[0.75rem] text-slate-500">Harga charter estimasi</p>
            <p className="text-xl md:text-2xl font-semibold text-slate-900">--</p>
            <p className="text-[0.7rem] text-slate-400">
              Harga akan diinformasikan admin berdasarkan rute & durasi sewa
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 lg:grid-cols-[1.7fr_1.3fr] items-start"
        >
          <div className="space-y-6">
            <Card className="border-slate-200 rounded-xl shadow-sm">
              <CardContent className="p-5 md:p-6 space-y-5">
                <div className="space-y-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 font-semibold">
                    Data pemesan
                  </p>
                  <p className="text-sm md:text-base font-semibold text-slate-900">
                    Informasi penanggung jawab rombongan
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nama">Nama lengkap PIC</Label>
                    <Input
                      id="nama"
                      name="picNama"
                      autoComplete="name"
                      required
                      placeholder="Contoh: Cahaya Putri"
                      className="h-10 text-sm border-slate-300 focus-visible:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">Nomor WhatsApp aktif</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      autoComplete="tel"
                      required
                      placeholder="Contoh: 0812xxxxxxxx"
                      className="h-10 text-sm border-slate-300 focus-visible:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email untuk dokumen pemesanan</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="nama@email.com"
                      className="h-10 text-sm border-slate-300 focus-visible:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instansi">Instansi / komunitas (opsional)</Label>
                    <Input
                      id="instansi"
                      name="instansi"
                      autoComplete="organization"
                      placeholder="Perusahaan, kampus, atau nama rombongan"
                      className="h-10 text-sm border-slate-300 focus-visible:ring-red-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 rounded-xl shadow-sm">
              <CardContent className="p-5 md:p-6 space-y-5">
                <div className="space-y-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 font-semibold">
                    Detail perjalanan
                  </p>
                  <p className="text-sm md:text-base font-semibold text-slate-900">
                    Sesuaikan rencana keberangkatan rombongan
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="tanggal">Tanggal berangkat</Label>
                    <Input
                      id="tanggal"
                      name="tanggalBerangkat"
                      type="date"
                      autoComplete="off"
                      required
                      className="h-10 text-sm border-slate-300 focus-visible:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="durasi">Lama sewa (hari)</Label>
                    <Input
                      id="durasi"
                      name="durasiSewa"
                      type="number"
                      min={1}
                      autoComplete="off"
                      required
                      placeholder="Contoh: 3"
                      className="h-10 text-sm border-slate-300 focus-visible:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="jemput">Titik jemput</Label>
                    <Input
                      id="jemput"
                      name="titikJemput"
                      autoComplete="off"
                      required
                      placeholder="Contoh: Medan Sunggal, depan kampus"
                      className="h-10 text-sm border-slate-300 focus-visible:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="turun">Titik turun</Label>
                    <Input
                      id="turun"
                      name="titikTurun"
                      autoComplete="off"
                      required
                      placeholder="Contoh: Bandar Lampung, Rajabasa"
                      className="h-10 text-sm border-slate-300 focus-visible:ring-red-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="penumpang">Perkiraan jumlah penumpang</Label>
                  <Input
                    id="penumpang"
                    name="jumlahPenumpang"
                    type="number"
                    min={1}
                    autoComplete="off"
                    required
                    placeholder="Contoh: 35 orang"
                    className="h-10 text-sm border-slate-300 focus-visible:ring-red-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="catatan">Catatan tambahan (opsional)</Label>
                  <textarea
                    id="catatan"
                    name="catatan"
                    rows={3}
                    autoComplete="off"
                    placeholder="Contoh: Butuh stop makan 2x, rombongan keluarga, ingin kursi reclining, dll."
                    className="w-full rounded-md border border-slate-300 text-sm px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 resize-none"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="border-slate-200 rounded-xl shadow-sm">
              <CardContent className="p-4 md:p-5 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 font-semibold">
                      Ringkasan bus
                    </p>
                    <p className="font-semibold text-slate-900">{bus.nama}</p>
                    <p className="text-xs text-slate-600">
                      {bus.berangkatKota} → {bus.tibaKota}
                    </p>
                    <p className="text-xs text-slate-500">
                      Berangkat {bus.berangkatJam} • Tiba {bus.tibaJam} • Durasi {bus.durasi}
                    </p>
                  </div>

                  <div
                    className={`inline-flex items-center justify-center px-2 py-1 rounded-lg border text-[0.7rem] font-semibold gap-1 ${statusInfo.badgeClass}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${statusInfo.dotClass}`} />
                    <span>{statusInfo.label}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Status armada</span>
                    <span className="text-slate-800 text-right hidden lg:block">
                      {statusInfo.note}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-900">
                    Perkiraan harga charter
                  </span>
                  <span className="text-sm md:text-lg font-bold text-slate-900">--</span>
                </div>

                <p className="text-[0.7rem] text-slate-400">
                  Harga final akan dihitung oleh admin Mandiri Express berdasarkan rute, durasi
                  sewa, dan kebutuhan tambahan yang Anda sampaikan di form.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 rounded-xl shadow-sm">
              <CardContent className="p-4 md:p-5 space-y-3 text-xs md:text-sm">
                <p className="font-semibold text-slate-900">Catatan penting</p>
                <ul className="space-y-1 text-slate-600">
                  <li>Pengisian data yang jelas membantu proses penawaran lebih cepat.</li>
                  <li>Tim Mandiri Express akan menghubungi via WhatsApp setelah form dikirim.</li>
                  <li>
                    Metode pembayaran dapat disepakati bersama (transfer bank, VA, atau opsi lain
                    yang tersedia).
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Button
              type="submit"
              className="w-full h-11 md:h-12 rounded-lg text-sm md:text-base font-semibold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/30 inline-flex items-center justify-center gap-2"
            >
              <SendHorizonal className="w-4 h-4" />
              <span>Kirim permintaan pemesanan</span>
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
