import { ShieldCheck, MapPinned, TicketCheck, Headphones, Bus } from "lucide-react"
import whyFeatures from "@/assets/img/logo2.png"

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white" id="mengapamemilihkami">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/80 px-4 py-2.5 text-xs font-semibold text-red-700 shadow-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px] shadow-red-400/30 animate-pulse" />
            <Bus className="w-4 h-4 text-red-600" />
            <span>Alasan Rombongan Memilih Mandiri Express</span>
            <span className="px-2 py-0.5 rounded-md bg-red-100 text-[0.65rem] uppercase tracking-wide text-red-700 border border-red-200 font-bold">
              Why Mandiri Express
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-tight">
            Mengapa Memilih Mandiri Express
          </h2>

          <div className="space-y-5 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-red-100 text-red-600">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-red-600">Pemesanan Charter yang Rapi dan Terstruktur</p>
                <p className="text-slate-600">
                  Proses sewa bus rombongan dirancang sederhana namun tertata. Cukup isi detail perjalanan, pilih
                  armada charter, dan dapatkan konfirmasi tanpa perlu bolak-balik chat yang melelahkan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-red-100 text-red-600">
                <MapPinned className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-red-600">Rute Fleksibel untuk Rombongan</p>
                <p className="text-slate-600">
                  Atur titik jemput, tujuan, dan jalur perjalanan sesuai agenda rombongan charter Anda. Cocok untuk
                  wisata, outing kantor, studi tour, maupun keluarga besar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-red-100 text-red-600">
                <TicketCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-red-600">Harga Jelas dan Transparan untuk Panitia</p>
                <p className="text-slate-600">
                  Penawaran charter bus disajikan dengan rincian biaya yang jelas, tanpa biaya tersembunyi. Mudah
                  dibagikan dan dipahami oleh panitia serta seluruh rombongan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-red-100 text-red-600">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-red-600">Tim Support Rombongan yang Sigap</p>
                <p className="text-slate-600">
                  Butuh revisi jam berangkat, update titik jemput, atau konfirmasi ulang rombongan? Tim Mandiri
                  Express siap membantu agar perjalanan charter berjalan lancar dari awal hingga selesai.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={whyFeatures}
            alt="Mengapa memilih Mandiri Express charter bus rombongan"
            className="w-full max-w-md h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
