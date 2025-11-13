"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useParams, useNavigate } from "react-router-dom"
import { buses } from "./ResultBus"
import { ArrowLeft, CreditCard, Wallet, Smartphone } from "lucide-react"

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

  const hargaSewa = 1_000_000
  const diskonPersen = 10
  const jumlahSetelahDiskon = hargaSewa - (hargaSewa * diskonPersen) / 100

  const handlePay = () => {
    navigate("/payment-success")
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
          <span className="text-xs md:text-sm">Kembali ke pilihan armada</span>
        </Button>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-lg md:text-2xl font-semibold text-slate-900 flex flex-wrap items-center gap-2">
              {bus.nama}
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 border border-indigo-100 text-[0.7rem] font-medium text-indigo-700">
                {bus.kelas}
              </span>
            </h1>
            <p className="text-xs md:text-sm text-slate-600">
              Selesaikan pembayaran untuk mengamankan jadwal perjalanan rombongan Anda.
            </p>
          </div>

          <div className="text-right space-y-1">
            <p className="text-[0.75rem] text-slate-500">Total yang perlu dibayar</p>
            <p className="text-xl md:text-2xl font-semibold text-indigo-600">
              {jumlahSetelahDiskon.toLocaleString("id-ID")}
            </p>
            <p className="text-[0.7rem] text-slate-400">Termasuk diskon promo</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.7fr_1.3fr]">
        
          <div className="space-y-6">
            <Card className="border-slate-200 rounded-lg shadow-sm">
              <CardContent className="p-5 md:p-6 space-y-5 text-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-1">
                    <p className="text-[0.7rem] uppercase tracking-wide text-slate-500 font-semibold">Detail perjalanan</p>
                    <p className="font-semibold text-slate-900 text-sm md:text-base">
                      Medan → Bandar Lampung
                    </p>
                    <p className="text-xs text-slate-500">
                      Berangkat dari <span className="font-medium text-slate-700">{bus.berangkatKota}</span> dan tiba di
                      <span className="font-medium text-slate-700"> {bus.tibaKota}</span>.
                    </p>
                  </div>
                  <div className="text-right space-y-1 text-xs md:text-sm">
                    <p className="text-slate-500">Estimasi durasi</p>
                    <p className="font-semibold text-slate-900">{bus.durasi}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 text-xs md:text-sm">
                  <div className="space-y-1 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3">
                    <p className="text-[0.7rem] text-slate-500">Keberangkatan</p>
                    <p className="font-semibold text-slate-900">01 November 2025</p>
                    <p className="text-[0.75rem] text-slate-600">{bus.berangkatJam} • {bus.berangkatKota}</p>
                  </div>
                  <div className="space-y-1 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3">
                    <p className="text-[0.7rem] text-slate-500">Kedatangan</p>
                    <p className="font-semibold text-slate-900">02 November 2025</p>
                    <p className="text-[0.75rem] text-slate-600">{bus.tibaJam} • {bus.tibaKota}</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 grid gap-4 md:grid-cols-3 text-xs md:text-sm">
                  <div className="space-y-1">
                    <p className="text-slate-500">Nama PIC Rombongan</p>
                    <p className="text-slate-800">Caca Caca</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500">Kontak</p>
                    <p className="text-slate-800">0812-3456-7890</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500">Email tiket</p>
                    <p className="text-slate-800 truncate">cahaya@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Pilih metode pembayaran</p>
              <p className="text-[0.75rem] text-slate-500">
                Pilih metode yang paling nyaman. Setelah pembayaran terkonfirmasi, e-ticket dan detail perjalanan akan dikirim ke email Anda.
              </p>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-between h-12 rounded-lg border-slate-300 hover:border-indigo-500 hover:bg-indigo-50/60"
                  onClick={handlePay}
                >
                  <span className="inline-flex items-center gap-2 text-sm">
                    <CreditCard className="w-4 h-4 text-slate-700" />
                    <span>Kartu kredit / debit</span>
                  </span>
                  <span className="text-[0.7rem] text-slate-400">Diproses instan</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-between h-12 rounded-lg border-slate-300 hover:border-indigo-500 hover:bg-indigo-50/60"
                  onClick={handlePay}
                >
                  <span className="inline-flex items-center gap-2 text-sm">
                    <Wallet className="w-4 h-4 text-slate-700" />
                    <span>Pay later (berbasis tagihan)</span>
                  </span>
                  <span className="text-[0.7rem] text-slate-400">Cocok untuk perusahaan</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-between h-12 rounded-lg border-slate-300 hover:border-indigo-500 hover:bg-indigo-50/60"
                  onClick={handlePay}
                >
                  <span className="inline-flex items-center gap-2 text-sm">
                    <Smartphone className="w-4 h-4 text-slate-700" />
                    <span>Mobile banking / Virtual account</span>
                  </span>
                  <span className="text-[0.7rem] text-slate-400">Rekomendasi untuk rombongan</span>
                </Button>
              </div>
            </div>
          </div>

       
          <div className="space-y-4">
            <Card className="bg-indigo-50 border-indigo-100 rounded-lg">
              <CardContent className="p-4 space-y-1 text-sm">
                <p className="font-semibold text-slate-900">Spesial penawaran</p>
                <p className="text-xs text-slate-700">
                  Nikmati potongan {diskonPersen}% untuk pemesanan rombongan tertentu. Promo dapat berbeda sesuai periode dan ketentuan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 rounded-lg">
              <CardContent className="p-4 space-y-3">
                <p className="text-sm font-semibold text-slate-900">Kode promo</p>
                <Input
                  placeholder="Masukkan kode promo (opsional)"
                  className="h-10 border-slate-300 focus-visible:ring-indigo-500 text-sm"
                />
                <p className="text-[0.7rem] text-slate-400">
                  Jika Anda memiliki kode promo dari GoBus, masukkan di sini sebelum menyelesaikan pembayaran.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 rounded-lg">
              <CardContent className="p-4 space-y-3 text-sm">
                <p className="font-semibold text-slate-900">Ringkasan pembayaran</p>

                <div className="space-y-1 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Harga sewa dasar</span>
                    <span className="text-slate-900">{hargaSewa.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Diskon promo</span>
                    <span className="text-emerald-600">-{(hargaSewa - jumlahSetelahDiskon).toLocaleString("id-ID")}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-900">Total dibayar</span>
                  <span className="text-sm md:text-lg font-bold text-indigo-600">
                    {jumlahSetelahDiskon.toLocaleString("id-ID")}
                  </span>
                </div>

                <p className="text-[0.7rem] text-slate-400">
                  Dengan melanjutkan, Anda menyetujui syarat & ketentuan pemesanan yang berlaku di GoBus Charter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
 