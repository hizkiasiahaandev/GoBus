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
            className="px-0"
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

  const total = 1000000
  const hargaTiket = 500000
  const jumlahOrang = 1
  const diskonPersen = 10
  const jumlahSetelahDiskon = 400000

  const handlePay = () => {
    navigate("/payment-success")
  }

  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <Button
          variant="ghost"
          className="px-0"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Kembali
        </Button>

        <p className="text-sm md:text-base font-semibold">
          Bayar{" "}
          <span className="text-indigo-600">
            {total.toLocaleString("id-ID")}
          </span>{" "}
          untuk konfirmasi booking
        </p>

        <div className="grid gap-6 lg:grid-cols-[2fr_1.5fr]">
          <div className="space-y-6">
            <Card className="bg-indigo-50 border-indigo-100">
              <CardContent className="p-6 grid md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500">Detail Tiket</p>
                    <p className="font-semibold text-slate-900">
                      12340 - BUS TIPE 1
                    </p>
                  </div>
                  <div className="space-y-1 text-slate-800">
                    <p>01 November 2025</p>
                    <p>Medan</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="space-y-1 text-slate-800">
                    <p>07 November 2025</p>
                    <p>Siantar</p>
                  </div>

                  <div className="grid grid-cols-[1.5fr_1fr_1.5fr] gap-3 text-xs md:text-sm pt-2">
                    <div className="space-y-1">
                      <p className="text-slate-500">Detail Penumpang</p>
                      <p className="text-slate-800">Caca caca</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-slate-500">Usia</p>
                      <p className="text-slate-800">17 tahun</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-slate-500">Gender</p>
                      <p className="text-slate-800">Perempuan</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs md:text-sm pt-2">
                    <div className="space-y-1">
                      <p className="text-slate-500">Tiket akan dikirim ke</p>
                      <p className="text-slate-800">cahaya@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">
                Pilih Pembayaran
              </p>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-between h-12 border-slate-300"
                  onClick={handlePay}
                >
                  <span className="inline-flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-slate-700" />
                    <span>Credit/Debit Card</span>
                  </span>
                  <span className="text-xs text-slate-400">•••</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-between h-12 border-slate-300"
                  onClick={handlePay}
                >
                  <span className="inline-flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-slate-700" />
                    <span>Pay Later</span>
                  </span>
                  <span className="text-xs text-slate-400">•••</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-between h-12 border-slate-300"
                  onClick={handlePay}
                >
                  <span className="inline-flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-slate-700" />
                    <span>Mobile banking</span>
                  </span>
                  <span className="text-xs text-slate-400">•••</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="bg-indigo-50 border-indigo-100">
              <CardContent className="p-4 space-y-1 text-sm">
                <p className="font-semibold text-slate-900">Spesial Penawaran</p>
                <p className="text-xs text-slate-700">
                  Potongan 50% untuk pengguna pertama
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-3">
                <p className="text-sm font-semibold text-slate-900">Apply Kode:</p>
                <Input
                  placeholder="Masukkan kode promo"
                  className="h-10 border-slate-300 focus-visible:ring-indigo-500"
                />
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-4 space-y-3 text-sm">
                <p className="font-semibold text-slate-900">Detail pembayaran:</p>

                <div className="space-y-1 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Harga tiket</span>
                    <span className="text-slate-900">
                      {hargaTiket.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Jumlah Orang</span>
                    <span className="text-slate-900">{jumlahOrang}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Diskon</span>
                    <span className="text-red-500">{diskonPersen}%</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-900">
                    Jumlah
                  </span>
                  <span className="text-sm font-bold text-red-500">
                    {jumlahSetelahDiskon.toLocaleString("id-ID")}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
