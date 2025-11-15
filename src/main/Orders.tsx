"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Info, Home, BusFront } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function OrderSuccessPage() {
  const navigate = useNavigate()

  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-10">

        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-20 w-20 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-200">
            <Check className="w-10 h-10 text-white" />
          </div>

          <div className="space-y-1">
            <p className="text-base md:text-lg font-semibold text-red-600">
              Permintaan pemesanan berhasil dikirim
            </p>
            <p className="text-xs md:text-sm text-slate-500 max-w-md">
              Tim Mandiri Express akan menghubungi PIC melalui WhatsApp untuk konfirmasi armada dan harga charter.
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
                    Kode referensi: ME-REQ-2025-00123
                  </p>
                  <p className="text-xs text-slate-500">
                    Gunakan kode ini jika ingin menanyakan status pemesanan kepada admin Mandiri Express.
                    Ringkasan permintaan dan penawaran akan dikirim ke WhatsApp dan email PIC rombongan.
                  </p>
                </div>
                <div className="text-right space-y-1 text-xs md:text-sm">
                  <p className="text-slate-500">Status</p>
                  <p className="font-semibold text-emerald-600">Permintaan diterima</p>
                  <p className="text-[0.7rem] text-slate-400">
                    Menunggu penawaran dan konfirmasi dari admin
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 text-sm">
                <div className="space-y-3">
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Rute perjalanan</p>
                    <p>Medan → Bandar Lampung</p>
                    <p className="text-sm text-slate-700">
                      Titik jemput dan titik turun akan disesuaikan dengan data yang Anda isi pada form pemesanan.
                    </p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">PIC rombongan</p>
                    <p className="font-medium">Mengikuti data penanggung jawab di form</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Kontak & email</p>
                    <p className="text-sm">
                      Nomor WhatsApp dan email PIC akan digunakan untuk mengirim penawaran resmi dan konfirmasi
                      pemesanan.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-right md:text-right text-sm">
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Perkiraan jadwal</p>
                    <p>Tanggal dan jam berangkat mengikuti permintaan pada form</p>
                    <p className="text-sm text-slate-700">
                      Admin dapat mengusulkan penyesuaian jadwal bila diperlukan untuk kelancaran perjalanan.
                    </p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Perkiraan jumlah penumpang</p>
                    <p>Diambil dari data jumlah penumpang yang Anda isi</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="text-xs text-slate-500">Jenis perjalanan</p>
                    <p>Charter bus rombongan (PP / One Way sesuai permintaan)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                <div className="space-y-1">
                  <p className="text-slate-500">Armada yang diajukan</p>
                  <p className="font-semibold text-slate-900">
                    Sesuai pilihan armada Mandiri Express pada halaman sebelumnya
                  </p>
                </div>
                <div className="space-y-1 md:text-right">
                  <p className="text-slate-500">Status pembayaran</p>
                  <p className="font-semibold text-slate-900">
                    Belum dibayar — proses pembayaran akan diatur langsung oleh admin
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>


          <Card className="border-slate-200 rounded-lg shadow-sm">
            <CardContent className="p-6 flex flex-col items-center gap-5">
              <div className="flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-3 py-1">
                <Info className="w-4 h-4 text-red-600" />
                <span className="text-[0.7rem] font-medium text-red-700">
                  Langkah selanjutnya
                </span>
              </div>

              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold text-slate-900">
                  Tunggu penawaran resmi dari admin Mandiri Express
                </p>
                <p className="text-[0.75rem] text-slate-500 max-w-sm">
                  Admin Mandiri Express akan menghubungi PIC melalui WhatsApp atau telepon untuk
                  mengirim penawaran harga charter, detail pembayaran, dan konfirmasi ketersediaan armada.
                  Semua proses pembayaran dan konfirmasi dilakukan langsung melalui admin, bukan melalui website.
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <Button
                  type="button"
                  onClick={() => navigate("/")}
                  className="w-full h-10 rounded-lg bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <Home className="w-4 h-4" />
                  <span>Kembali ke beranda</span>
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate("/bus")}
                  className="w-full h-10 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-md shadow-red-200"
                >
                  <BusFront className="w-4 h-4" />
                  <span>Lihat armada lainnya</span>
                </Button>
              </div>

              <p className="text-[0.7rem] text-slate-400 text-center">
                Jika dalam beberapa waktu Anda belum dihubungi, Anda dapat menghubungi admin Mandiri Express
                secara langsung dengan menyertakan kode referensi pemesanan di atas agar proses pengecekan
                lebih cepat.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
