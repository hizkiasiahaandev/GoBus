"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/80 px-4 py-2 text-xs font-semibold text-red-700 shadow-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px] shadow-red-400/30 animate-pulse" />
            <HelpCircle className="w-4 h-4 text-red-600" />
            <span className="text-left">Pertanyaan yang Sering Diajukan</span>
            <span className="px-2 py-0.5 rounded-md bg-red-100 text-[0.65rem] uppercase tracking-wide text-red-700 border border-red-200 font-bold">
              FAQ Mandiri Express
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-tight">
            FAQ Charter Bus Mandiri Express
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Temukan jawaban atas pertanyaan umum seputar pemesanan, pembayaran, dan layanan sewa{" "}
            <span className="font-semibold text-red-600">bus charter rombongan</span> di Mandiri Express.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white/80 shadow-md shadow-red-100/40 p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Bagaimana cara memesan bus charter di Mandiri Express?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Anda dapat mengajukan pemesanan charter dengan mengisi detail perjalanan seperti kota asal, tujuan,
                tanggal, jam keberangkatan, durasi, dan jumlah penumpang rombongan. Setelah itu, tim Mandiri Express
                akan membantu memilih armada yang sesuai dan mengirimkan konfirmasi serta rincian penawaran.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Apakah Mandiri Express melayani perjalanan luar kota atau wisata rombongan?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Ya, Mandiri Express melayani berbagai kebutuhan perjalanan rombongan: antar kota, wisata, studi tour,
                acara kantor, hingga perjalanan keluarga besar. Anda cukup menyesuaikan rute, durasi, dan kebutuhan
                rombongan saat melakukan permintaan charter.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Metode pembayaran apa saja yang didukung untuk charter bus?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Metode pembayaran umumnya berupa transfer bank ke rekening resmi Mandiri Express dan metode lain yang
                tercantum pada halaman pembayaran. Detail nominal, termin pembayaran, dan batas waktu akan disampaikan
                bersama invoice setelah pemesanan disetujui panitia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Apakah jadwal atau rute rombongan bisa diubah setelah pemesanan?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Perubahan jadwal, rute, atau titik jemput dapat dilakukan sesuai ketentuan yang berlaku. Silakan
                hubungi tim Mandiri Express untuk penyesuaian. Sebaiknya perubahan diajukan beberapa waktu sebelum
                jadwal keberangkatan agar koordinasi dengan pengemudi dan armada tetap optimal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-lg px-3 md:px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-800 py-3 md:py-4">
                Apa saja fasilitas yang biasanya tersedia di dalam bus charter?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-slate-600 pb-4 md:pb-5">
                Fasilitas berbeda pada tiap armada, namun umumnya mencakup AC, kursi reclining, audio hiburan, dan
                bagasi luas untuk koper rombongan. Beberapa unit menyediakan tambahan seperti port charger, WiFi, atau
                mic untuk tour leader. Detail fasilitas akan tercantum pada informasi masing-masing bus Mandiri Express.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
