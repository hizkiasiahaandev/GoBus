"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import qrCode from "@/assets/qr_ticket.png"

export default function PaymentSuccessPage() {
  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="flex flex-col items-center gap-3">
          <div className="h-20 w-20 rounded-full bg-emerald-500 flex items-center justify-center">
            <Check className="w-10 h-10 text-white" />
          </div>
          <p className="text-sm md:text-base font-semibold text-emerald-600">
            Selamat, Pembayaran anda berhasil
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2.5fr_1.5fr] items-start">
          <Card className="border-slate-300">
            <CardContent className="p-6 text-sm md:text-base">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900">Detail Tiket</p>
                    <p className="text-slate-900">12340 - BUS TIPE 1</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p>01 November 2025</p>
                    <p>Medan</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p className="font-semibold text-slate-900">Detail Penumpang</p>
                    <p>Caca caca</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p>Tiket akan dikirim ke</p>
                    <p>cahaya@gmail.com</p>
                  </div>
                </div>

                <div className="space-y-3 text-right">
                  <div className="space-y-1 text-slate-900">
                    <p>07 November 2025</p>
                    <p>Siantar</p>
                  </div>
                  <div className="space-y-1 text-slate-900">
                    <p>17 tahun</p>
                    <p>Perempuan</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center gap-6">
            <img
              src={qrCode}
              alt="QR Ticket"
              className="w-32 h-32 border border-slate-300"
            />

            <div className="flex flex-col gap-3 w-full max-w-xs">
              <Button className="w-full h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">
                Print Tiket
              </Button>
              <Button className="w-full h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold">
                Download Tiket
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
