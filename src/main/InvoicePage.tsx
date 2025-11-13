"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Printer, Download, CheckCircle2 } from "lucide-react"

type InvoiceStatus = "UNPAID" | "PARTIAL" | "PAID"

export default function InvoicePage() {
  const navigate = useNavigate()

  const status: InvoiceStatus = "UNPAID"

  const statusConfig = {
    UNPAID: {
      label: "Menunggu pembayaran",
      badgeClass:
        "bg-amber-50 border border-amber-100 text-amber-700",
      textClass: "text-amber-700",
      desc: "Silakan lakukan pembayaran sesuai nominal di bawah, lalu konfirmasi melalui halaman konfirmasi pembayaran.",
    },
    PARTIAL: {
      label: "DP diterima",
      badgeClass:
        "bg-sky-50 border border-sky-100 text-sky-700",
      textClass: "text-sky-700",
      desc: "DP sudah diterima. Mohon selesaikan pelunasan sebelum tanggal keberangkatan yang disepakati.",
    },
    PAID: {
      label: "Lunas",
      badgeClass:
        "bg-emerald-50 border border-emerald-100 text-emerald-700",
      textClass: "text-emerald-700",
      desc: "Pembayaran untuk invoice ini sudah lunas. Terima kasih, tim GoBus akan menyiapkan armada sesuai jadwal.",
    },
  }[status]

  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <Button
          variant="ghost"
          className="px-0 text-slate-700 hover:text-slate-900 flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs md:text-sm">Kembali</span>
        </Button>

        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 font-semibold">
              Invoice pemesanan
            </p>
            <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
              INV-GBUS-2025-00123
            </h1>
            <p className="text-xs md:text-sm text-slate-600">
              Invoice untuk pemesanan charter bus rombongan GoBus berdasarkan permintaan yang telah Anda kirim.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[0.7rem] font-medium ${statusConfig.badgeClass}`}
              >
                <CheckCircle2 className="w-3 h-3" />
                {statusConfig.label}
              </span>
            </div>
            <div className="text-xs md:text-sm text-slate-500 text-left md:text-right">
              <p>Tanggal terbit: 10 November 2025</p>
              <p>Jatuh tempo: 13 November 2025</p>
            </div>
          </div>
        </header>

        <Card className="border-slate-200 rounded-xl shadow-sm">
          <CardContent className="p-5 md:p-6 space-y-6 text-xs md:text-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-slate-500 font-semibold">
                  Ditagihkan kepada
                </p>
                <p className="font-semibold text-slate-900">Cahaya Putri</p>
                <p className="text-slate-600">PIC Rombongan Medan</p>
                <p className="text-slate-500">
                  WhatsApp: 0812-3456-7890
                  <br />
                  Email: cahaya@gmail.com
                </p>
              </div>
              <div className="space-y-2 md:text-right">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-slate-500 font-semibold">
                  Detail GoBus
                </p>
                <p className="font-semibold text-slate-900">PT GoBus Indonesia</p>
                <p className="text-slate-600">Layanan Carter Bus Rombongan</p>
                <p className="text-slate-500">
                  admin@gobus.id
                  <br />
                  +62 812-0000-0000
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-slate-500 font-semibold">
                Rincian perjalanan
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-slate-600">Rute</p>
                  <p className="font-medium text-slate-900">Medan → Bandar Lampung</p>
                  <p className="text-slate-500">
                    Charter rombongan (PP / One Way sesuai kesepakatan)
                  </p>
                </div>
                <div className="space-y-1 md:text-right">
                  <p className="text-slate-600">Jadwal perkiraan</p>
                  <p className="font-medium text-slate-900">Berangkat 01 November 2025</p>
                  <p className="text-slate-500">Durasi sewa: 3 hari • ± 30 penumpang</p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-3">
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-slate-500 font-semibold">
                Rincian biaya
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm border-collapse min-w-[420px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="text-left px-3 py-2 font-medium text-slate-600">Deskripsi</th>
                      <th className="text-center px-3 py-2 font-medium text-slate-600">Qty</th>
                      <th className="text-right px-3 py-2 font-medium text-slate-600">Harga</th>
                      <th className="text-right px-3 py-2 font-medium text-slate-600">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="px-3 py-2">
                        <p className="font-medium text-slate-900">Sewa GoBus Executive</p>
                        <p className="text-[0.7rem] text-slate-500">
                          Termasuk sopir, BBM, dan fasilitas standar selama perjalanan
                        </p>
                      </td>
                      <td className="px-3 py-2 text-center text-slate-700">1 armada</td>
                      <td className="px-3 py-2 text-right text-slate-700">Rp 4.500.000</td>
                      <td className="px-3 py-2 text-right text-slate-900 font-semibold">Rp 4.500.000</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-3 py-2">
                        <p className="font-medium text-slate-900">Biaya parkir & tol (estimasi)</p>
                        <p className="text-[0.7rem] text-slate-500">
                          Dapat disesuaikan kembali setelah perjalanan selesai
                        </p>
                      </td>
                      <td className="px-3 py-2 text-center text-slate-700">1 paket</td>
                      <td className="px-3 py-2 text-right text-slate-700">Rp 500.000</td>
                      <td className="px-3 py-2 text-right text-slate-900 font-semibold">Rp 500.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-3">
                <div className="space-y-2 text-xs text-slate-500 max-w-sm">
                  <p>{statusConfig.desc}</p>
                  <p>
                    Setelah pembayaran terverifikasi, status invoice akan diperbarui secara otomatis oleh admin
                    melalui sistem internal GoBus.
                  </p>
                </div>
                <div className="w-full md:w-auto space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-medium text-slate-900">Rp 5.000.000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">DP minimum (30%)</span>
                    <span className="font-medium text-slate-900">Rp 1.500.000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-t border-slate-200 pt-2 mt-1">
                    <span className="font-semibold text-slate-900">Total tagihan</span>
                    <span className="text-lg font-bold text-indigo-600">Rp 5.000.000</span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-600">Status pembayaran</span>
                    <span className={`font-semibold text-right ${statusConfig.textClass}`}>
                      {statusConfig.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-[0.7rem] md:text-xs text-slate-500">
            Setelah melakukan pembayaran sesuai instruksi, segera lakukan konfirmasi melalui halaman konfirmasi
            pembayaran agar status invoice ini dapat diperbarui menjadi lunas atau DP diterima.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              type="button"
              className="h-10 rounded-lg px-4 text-xs font-semibold inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-800 hover:bg-slate-50"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak invoice</span>
            </Button>
            <Button
              type="button"
              className="h-10 rounded-lg px-4 text-xs font-semibold inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
