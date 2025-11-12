"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_0_4px] shadow-indigo-400/30 animate-pulse" />
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span>Pertanyaan yang Sering Diajukan</span>
            <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-[0.65rem] uppercase tracking-wide text-indigo-700 border border-indigo-200 font-bold">
              FAQ GoBus
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 tracking-tight">
            FAQ GoBus Charter
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Temukan jawaban atas pertanyaan umum seputar pemesanan, pembayaran, dan layanan sewa bus rombongan di GoBus.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white/80 shadow-md shadow-indigo-100/40 p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Bagaimana cara memesan bus di GoBus?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Anda dapat memesan bus dengan mengisi detail perjalanan seperti kota asal, tujuan, tanggal, jam keberangkatan,
                dan jumlah penumpang. Setelah itu pilih armada yang tersedia, lalu konfirmasi pemesanan sesuai instruksi yang
                tertera di halaman.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Apakah GoBus melayani perjalanan di luar kota atau wisata?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Ya, GoBus melayani berbagai kebutuhan perjalanan, mulai dari antar kota, wisata, studi tour, acara kantor,
                hingga perjalanan keluarga besar. Anda cukup menyesuaikan rute dan durasi perjalanan saat melakukan permintaan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Metode pembayaran apa saja yang didukung?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Metode pembayaran yang didukung dapat berupa transfer bank dan metode lain yang tercantum pada halaman
                pembayaran. Detail dan batas waktu pembayaran akan dikirimkan setelah Anda menerima konfirmasi pemesanan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Apakah saya bisa mengubah jadwal atau rute setelah pemesanan?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Perubahan jadwal atau rute dapat dilakukan sesuai ketentuan yang berlaku. Silakan hubungi tim GoBus melalui
                kontak yang tersedia untuk melakukan penyesuaian, sebaiknya beberapa waktu sebelum jadwal keberangkatan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Apa saja fasilitas yang biasanya tersedia di dalam bus?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Fasilitas dapat berbeda pada tiap armada, namun umumnya mencakup AC, kursi reclining, audio hiburan, dan
                bagasi. Beberapa armada mungkin menyediakan tambahan seperti port charger atau WiFi, yang akan ditampilkan di
                detail bus.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
