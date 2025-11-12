import { Bus, CheckCircle2 } from "lucide-react"
import whyImage from "@/assets/img/logo1.png"

export default function WhyJourneySection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-10">
                <div className="flex justify-center lg:justify-start">
                    <img
                        src={whyImage}
                        alt="Perjalanan GoBus"
                        className="w-full max-w-md h-auto drop-shadow-xl"
                    />
                </div>

                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50/80 px-4 py-2.5 text-xs font-semibold text-indigo-700 shadow-sm">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_0_4px] shadow-indigo-400/30 animate-pulse"></span>
                        <Bus className="w-4 h-4 text-indigo-600" />
                        <span>Perjalanan Rombongan Lebih Terencana</span>
                        <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-[0.65rem] uppercase tracking-wide text-indigo-700 border border-indigo-200 font-bold">
                            GoBus Journey
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
                        Perjalanan Nyaman Dimulai dari Perencanaan yang Tepat
                    </h2>

                    <p className="text-slate-600 leading-relaxed">
                        Setiap perjalanan rombongan punya kebutuhan yang berbeda. GoBus membantu Anda merencanakan semuanya dari awal:
                        memilih <span className="text-indigo-600 font-semibold">armada yang tepat</span>, menentukan titik jemput, hingga
                        menyesuaikan jadwal keberangkatan agar sesuai dengan agenda acara Anda.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-600">
                        <div className="flex items-start gap-2">
                            <span className="mt-0.5 rounded-full bg-indigo-50 p-1.5">
                                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                            </span>
                            <div>
                                <p className="font-semibold text-indigo-700">Cocok untuk Berbagai Acara</p>
                                <p className="text-[0.8rem]">
                                    Wisata, outing kantor, studi tour, keluarga besar, hingga acara komunitas.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <span className="mt-0.5 rounded-full bg-indigo-50 p-1.5">
                                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                            </span>
                            <div>
                                <p className="font-semibold text-indigo-700">Rute & Jadwal Fleksibel</p>
                                <p className="text-[0.8rem]">
                                    Atur titik jemput, drop-off, dan jam berangkat sesuai kebutuhan rombongan.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <span className="mt-0.5 rounded-full bg-indigo-50 p-1.5">
                                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                            </span>
                            <div>
                                <p className="font-semibold text-indigo-700">Koordinasi Lebih Mudah</p>
                                <p className="text-[0.8rem]">
                                    Satu armada, satu koordinasi, tanpa pusing atur banyak kendaraan terpisah.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <span className="mt-0.5 rounded-full bg-indigo-50 p-1.5">
                                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                            </span>
                            <div>
                                <p className="font-semibold text-indigo-700">Fokus ke Acaranya</p>
                                <p className="text-[0.8rem]">
                                    Biarkan GoBus urus transportasi, Anda fokus ke momen dan kegiatan bersama.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
