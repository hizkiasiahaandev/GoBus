"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Printer, Download } from "lucide-react"
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
              Permintaan pemesanan rombongan berhasil dikirim
            </p>
            <p className="text-xs md:text-sm text-slate-500 max-w-md">
              Data pemesan dan detail perjalanan Anda sudah kami terima. Tim GoBus akan menghubungi PIC
              melalui WhatsApp untuk konfirmasi ketersediaan armada, harga final, dan langkah pembayaran berikutnya.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2.3fr_1.7fr] items-start">
          <Card className="border-slate-200 rounded-lg shadow-sm">
            <CardContent className="p-6 md:p-7 space-y-6 text-sm md:text-base">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <p className="text-[0.7rem] uppercase tracking-wide text-slate-500 font-semibold">
                    Ringkasan permintaan pemesanan
                  </p>
                  <p className="font-semibold text-slate-900">
                    Kode referensi: GBUS-REQ-2025-00123
                  </p>
                  <p className="text-xs text-slate-500">
                    Gunakan kode ini jika ingin menanyakan status pemesanan kepada admin GoBus.
                    Detail lengkap akan dikirim ke WhatsApp dan email PIC.
                  </p>
                </div>
                <div className="text-right space-y-1 text-xs md:text-sm">
                  <p className="text-slate-500">Status</p>
                  <p className="font-semibold text-emerald-600">Permintaan diterima</p>
                  <p className="text-[0.7rem] text-slate-400">
                    Menunggu konfirmasi dan penawaran dari admin
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 text-sm">
                <div className="space-y-3">
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Rute perjalanan</p>
                    <p>Medan → Bandar Lampung</p>
                    <p className="text-sm text-slate-700">
                      Titik jemput dan turun akan disesuaikan sesuai data yang Anda isi di form.
                    </p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">PIC Rombongan</p>
                    <p className="font-medium">Sesuai data form pemesanan</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Kontak & email</p>
                    <p className="text-sm">
                      WhatsApp dan email PIC akan digunakan untuk mengirim penawaran dan konfirmasi.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-right md:text-right text-sm">
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Perkiraan jadwal</p>
                    <p>Tanggal dan jam berangkat mengikuti permintaan di form</p>
                    <p className="text-sm text-slate-700">
                      Admin akan menyesuaikan jika diperlukan perubahan jam atau hari.
                    </p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Perkiraan jumlah penumpang</p>
                    <p>Diambil dari data yang Anda isi</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Jenis perjalanan</p>
                    <p>Charter rombongan (PP / One Way sesuai permintaan)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                <div className="space-y-1">
                  <p className="text-slate-500">Armada yang diajukan</p>
                  <p className="font-semibold text-slate-900">
                    GoBus Executive / sesuai pilihan di form
                  </p>
                </div>
                <div className="space-y-1 md:text-right">
                  <p className="text-slate-500">Status pembayaran</p>
                  <p className="font-semibold text-slate-900">
                    Belum dibayar — menunggu penawaran dan instruksi pembayaran
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 rounded-lg shadow-sm">
            <CardContent className="p-6 flex flex-col items-center gap-5">
              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold text-slate-900">
                  QR Referensi Pemesanan
                </p>
                <p className="text-[0.75rem] text-slate-500">
                  Simpan kode QR ini sebagai tanda bukti permintaan pemesanan. Admin dapat memindainya
                  untuk melihat detail rombongan Anda di sistem.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <img
                  src={qrCode}
                  alt="QR Referensi Pemesanan"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <Button className="w-full h-10 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-md">
                  <Printer className="w-4 h-4" />
                  <span>Cetak ringkasan permintaan</span>
                </Button>
                <Button className="w-full h-10 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-md">
                  <Download className="w-4 h-4" />
                  <span>Download konfirmasi</span>
                </Button>
              </div>

              <p className="text-[0.7rem] text-slate-400 text-center">
                Tim GoBus akan menghubungi PIC untuk konfirmasi, penyesuaian jadwal, serta instruksi pembayaran.
                Pastikan nomor WhatsApp dan email yang Anda isi aktif dan mudah dihubungi.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
