import { Bus, CheckCircle2 } from "lucide-react"
import whyImage from "@/assets/img/logo1.png"

export default function WhyJourneySection() {
  return (
    <section id="mengapamemilihkami" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-10">
        <div className="flex justify-center lg:justify-start">
          <img
            src={whyImage}
            alt="Perjalanan Mandiri Express"
            className="w-full max-w-md h-auto drop-shadow-xl"
          />
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/80 px-4 py-2.5 text-xs font-semibold text-red-700 shadow-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px] shadow-red-400/30 animate-pulse" />
            <Bus className="w-4 h-4 text-red-600" />
            <span>Charter Bus Rombongan Lebih Terencana</span>
            <span className="px-2 py-0.5 rounded-md bg-red-100 text-[0.65rem] uppercase tracking-wide text-red-700 border border-red-200 font-bold">
              Mandiri Express Journey
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-tight">
            Perjalanan Nyaman Dimulai dari Perencanaan yang Tepat
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Setiap perjalanan <span className="font-semibold text-red-600">rombongan charter</span> punya kebutuhan
            yang berbeda. Mandiri Express membantu Anda merencanakan semuanya dari awal: memilih{" "}
            <span className="text-red-600 font-semibold">armada khusus rombongan</span>, menentukan titik jemput,
            hingga menyusun jadwal keberangkatan yang selaras dengan agenda acara Anda.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-600">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 rounded-full bg-red-50 p-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
              </span>
              <div>
                <p className="font-semibold text-red-700">Cocok untuk Berbagai Acara Rombongan</p>
                <p className="text-[0.8rem]">
                  Wisata rombongan, outing kantor, studi tour sekolah, keluarga besar, dan komunitas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="mt-0.5 rounded-full bg-red-50 p-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
              </span>
              <div>
                <p className="font-semibold text-red-700">Rute & Jadwal Fleksibel</p>
                <p className="text-[0.8rem]">
                  Titik jemput dan drop-off bisa disesuaikan dengan kebutuhan rombongan charter Anda.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="mt-0.5 rounded-full bg-red-50 p-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
              </span>
              <div>
                <p className="font-semibold text-red-700">Koordinasi Satu Armada</p>
                <p className="text-[0.8rem]">
                  Satu bus khusus rombongan, satu titik koordinasi, tanpa repot mengatur banyak kendaraan terpisah.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="mt-0.5 rounded-full bg-red-50 p-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
              </span>
              <div>
                <p className="font-semibold text-red-700">Fokus ke Acaranya</p>
                <p className="text-[0.8rem]">
                  Biarkan Mandiri Express mengurus armada charter Anda, sementara Anda fokus ke momen bersama rombongan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
