"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import qrCode from "@/assets/qr_ticket.png"

export default function PaymentSuccessPage() {
  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-20 w-20 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200">
            <Check className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-1">
            <p className="text-base md:text-lg font-semibold text-emerald-600">
              Pembayaran pemesanan rombongan berhasil
            </p>
            <p className="text-xs md:text-sm text-slate-500 max-w-md">
              Konfirmasi sewa bus rombongan Anda sudah berhasil. Detail pemesanan dan informasi perjalanan
              telah dikirim ke email PIC, lengkap dengan dokumen yang dibutuhkan saat hari keberangkatan.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2.3fr_1.7fr] items-start">
          <Card className="border-slate-200 rounded-lg shadow-sm">
            <CardContent className="p-6 md:p-7 space-y-6 text-sm md:text-base">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <p className="text-[0.7rem] uppercase tracking-wide text-slate-500 font-semibold">
                    Detail pemesanan rombongan
                  </p>
                  <p className="font-semibold text-slate-900">
                    GBUS-2025-00123 • Armada BUS TIPE 1
                  </p>
                  <p className="text-xs text-slate-500">
                    Pemesanan telah dikonfirmasi. Armada akan disiapkan sesuai jadwal dan rute yang tertera di bawah.
                  </p>
                </div>
                <div className="text-right space-y-1 text-xs md:text-sm">
                  <p className="text-slate-500">Status</p>
                  <p className="font-semibold text-emerald-600">Berhasil dikonfirmasi</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 text-sm">
                <div className="space-y-3">
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Keberangkatan</p>
                    <p>01 November 2025</p>
                    <p className="text-sm text-slate-700">Medan</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">PIC Rombongan</p>
                    <p className="font-medium">Caca Caca</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Detail kontak & dokumen dikirim ke</p>
                    <p className="text-sm">cahaya@gmail.com</p>
                  </div>
                </div>

                <div className="space-y-3 text-right md:text-right text-sm">
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Tujuan akhir</p>
                    <p>07 November 2025</p>
                    <p className="text-sm text-slate-700">Siantar</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Perkiraan jumlah penumpang</p>
                    <p>± 30 orang</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Jenis perjalanan</p>
                    <p>Charter rombongan (PP / One Way sesuai kesepakatan)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                <div className="space-y-1">
                  <p className="text-slate-500">Kode pemesanan rombongan</p>
                  <p className="font-semibold text-slate-900">GBUS-2025-00123</p>
                </div>
                <div className="space-y-1 md:text-right">
                  <p className="text-slate-500">Metode pembayaran</p>
                  <p className="font-semibold text-slate-900">Mobile banking / Virtual Account</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 rounded-lg shadow-sm">
            <CardContent className="p-6 flex flex-col items-center gap-5">
              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold text-slate-900">
                  QR Konfirmasi Pemesanan
                </p>
                <p className="text-[0.75rem] text-slate-500">
                  Tunjukkan kode QR ini kepada petugas atau admin GoBus saat verifikasi keberangkatan rombongan Anda.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <img
                  src={qrCode}
                  alt="QR Konfirmasi Pemesanan"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <Button className="w-full h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">
                  Cetak Detail Pemesanan
                </Button>
                <Button className="w-full h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold">
                  Download Konfirmasi
                </Button>
              </div>

              <p className="text-[0.7rem] text-slate-400 text-center">
                Simpan salinan konfirmasi ini untuk ditunjukkan saat hari H. Tim GoBus juga akan menghubungi PIC jika
                dibutuhkan penyesuaian jadwal atau detail teknis lainnya.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
