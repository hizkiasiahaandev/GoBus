"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

export default function KontakPage() {
  return (
    <main className="bg-white antialiased py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_0_4px] shadow-indigo-400/30 animate-pulse" />
              <MessageCircle className="w-4 h-4 text-indigo-600" />
              <span>Butuh bantuan pemesanan?</span>
              <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-[0.65rem] uppercase tracking-wide text-indigo-700 border border-indigo-200 font-bold">
                Kontak GoBus
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-600">
                Hubungi Tim GoBus Charter
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                Sampaikan kebutuhan perjalanan rombongan Anda, mulai dari studi tour, acara kantor, hingga
                liburan keluarga. Tim kami siap membantu memberikan rekomendasi armada dan estimasi biaya terbaik.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Alamat Kantor</p>
                  <p className="font-medium text-slate-800">Jl. Sempurna No. 212</p>
                  <p className="text-xs text-slate-500">Medan, Sumatera Utara</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Telepon / WhatsApp</p>
                  <p className="font-medium text-slate-800">0812-3495-0000</p>
                  <p className="text-xs text-slate-500">Hubungi untuk penawaran dan konfirmasi cepat</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Email</p>
                  <p className="font-medium text-slate-800">adminbus@gmail.com</p>
                  <p className="text-xs text-slate-500">Kirim detail perjalanan untuk penawaran resmi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Jam Operasional</p>
                  <p className="font-medium text-slate-800">08.00 – 18.00 WIB</p>
                  <p className="text-xs text-slate-500">Respon di luar jam kerja akan diproses di hari berikutnya</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-[0.75rem] text-indigo-800">
              <p className="font-semibold text-[0.8rem]">Tips agar respon lebih cepat:</p>
              <p className="mt-1">
                Sertakan tujuan, tanggal keberangkatan, jumlah penumpang, dan jenis keperluan (wisata, kantor, sekolah, dll)
                saat menghubungi kami.
              </p>
            </div>
          </div>

          <Card className="border-indigo-100 shadow-lg shadow-indigo-100/60 rounded-lg">
            <CardContent className="p-6 md:p-7 space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Kirim pesan ke GoBus
                </h3>
                <p className="text-xs md:text-sm text-slate-500">
                  Isi formulir singkat ini, lalu tim kami akan menghubungi Anda melalui WhatsApp atau email.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-slate-700">
                    Nama Lengkap PIC Rombongan
                  </Label>
                  <Input
                    placeholder="Masukkan nama lengkap Anda"
                    className="h-10 border-slate-200 focus-visible:ring-indigo-500 text-sm"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-medium text-slate-700">
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="Masukkan email aktif"
                      className="h-10 border-slate-200 focus-visible:ring-indigo-500 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-medium text-slate-700">
                      No. WhatsApp
                    </Label>
                    <Input
                      placeholder="Contoh: 0812xxxxxxx"
                      className="h-10 border-slate-200 focus-visible:ring-indigo-500 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-slate-700">
                    Subjek Pesan
                  </Label>
                  <Input
                    placeholder="Contoh: Permintaan sewa bus untuk study tour"
                    className="h-10 border-slate-200 focus-visible:ring-indigo-500 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-slate-700">
                    Detail Kebutuhan Perjalanan
                  </Label>
                  <Textarea
                    placeholder="Ceritakan rencana perjalanan Anda: tujuan, tanggal, jumlah penumpang, dan keperluan perjalanan (wisata, kantor, sekolah, dll)."
                    className="min-h-[120px] border-slate-200 focus-visible:ring-indigo-500 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-slate-700">
                    Perkiraan tanggal berangkat (opsional)
                  </Label>
                  <Input
                    type="date"
                    className="h-10 border-slate-200 focus-visible:ring-indigo-500 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <Button className="w-full h-11 rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-95">
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan ke GoBus</span>
                </Button>
                <p className="text-[0.7rem] text-slate-500 text-center">
                  Kami akan berusaha merespons dalam waktu kurang dari 1 x 24 jam pada hari kerja.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
