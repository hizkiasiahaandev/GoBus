"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function KontakPage() {
  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-600">Hubungi Kami</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ada pertanyaan seputar tiket, jadwal, atau layanan kami? Tim GoBus siap membantu Anda kapan saja.
            </p>

            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Alamat:</span> Jl. Sempurna No 212
              </p>
              <p>
                <span className="font-semibold">Telepon:</span> 08123495
              </p>
              <p>
                <span className="font-semibold">Email:</span> adminbus@gmail.com
              </p>
              <p>
                <span className="font-semibold">Jam Operasional:</span> 08.00 - 18.00
              </p>
            </div>
          </div>

          <Card className="border-indigo-100 shadow-md shadow-indigo-50">
            <CardContent className="p-6 space-y-5">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Kirim Pesan</h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <Input
                    placeholder="Masukkan nama lengkap Anda"
                    className="border-slate-200 focus-visible:ring-indigo-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input
                    type="email"
                    placeholder="Masukkan email Anda"
                    className="border-slate-200 focus-visible:ring-indigo-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Pesan</label>
                  <Textarea
                    placeholder="Tulis pesan Anda di sini..."
                    className="border-slate-200 focus-visible:ring-indigo-500"
                  />
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Kirim Pesan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
