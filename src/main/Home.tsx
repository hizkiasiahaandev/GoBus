"use client"

import { ArrowRight, ShieldCheck, MapPinned, TicketCheck, Headphones } from "lucide-react"
import heroBus from "@/assets/bus.jpg"
import whyImage from "@/assets/bus.jpg"

export default function BerandaPage() {
  return (
    <main className="bg-white antialiased">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-10">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 leading-tight">
              Pesan Tiket Bus Anda Sekarang
            </h1>
            <p className="text-slate-600 leading-relaxed">
              Temukan dan pesan tiket bus Anda hanya dengan beberapa klik. Kami menawarkan beragam rute dan jadwal bus yang sesuai dengan kebutuhan Anda.
            </p>
            <a
              href="#pesan"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Pesan Sekarang <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={heroBus} alt="Bus GoBus" className="w-full max-w-md h-auto drop-shadow-xl" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-10">
          <div className="flex justify-center lg:justify-start">
            <img src={heroBus} alt="Perjalanan GoBus" className="w-full max-w-md h-auto drop-shadow-xl" />
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
              Perjalanan Nyaman Dimulai dari Sini
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Setiap perjalanan punya cerita, dan GoBus hadir untuk memastikan setiap cerita dimulai dengan baik. Kami memahami bahwa mencari tiket bus yang aman, cepat, dan sesuai kebutuhan sering kali merepotkan. Karena itu, GoBus diciptakan agar siapa pun bisa memesan tiket bus dengan mudah, kapan pun, di mana pun.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
              Mengapa Memilih GoBus
            </h2>

            <div className="space-y-5 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-indigo-100 text-indigo-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-indigo-600">Pemesanan Cepat dan Aman</p>
                  <p className="text-slate-600">
                    Dengan sistem digital kami, pemesanan tiket hanya butuh beberapa klik. Semua transaksi dilakukan secara aman dan terverifikasi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-indigo-100 text-indigo-600">
                  <MapPinned className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-indigo-600">Jadwal dan Rute Lengkap</p>
                  <p className="text-slate-600">
                    Nikmati kemudahan memilih dari ratusan jadwal dan rute bus antar kota yang terus diperbarui secara real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-indigo-100 text-indigo-600">
                  <TicketCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-indigo-600">Tiket Elektronik</p>
                  <p className="text-slate-600">
                    Tak perlu mencetak tiket, cukup tunjukkan e-ticket Anda di ponsel saat naik bus. Mudah dan ramah lingkungan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-indigo-100 text-indigo-600">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-indigo-600">Dukungan Pelanggan 24 Jam</p>
                  <p className="text-slate-600">
                    Tim kami siap membantu Anda setiap waktu, dari pemesanan hingga keberangkatan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img src={whyImage} alt="Mengapa memilih GoBus" className="w-full max-w-md h-auto drop-shadow-xl" />
          </div>
        </div>
      </section>
    </main>
  )
}
