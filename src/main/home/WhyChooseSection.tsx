import { ShieldCheck, MapPinned, TicketCheck, Headphones, Bus } from "lucide-react"
import whyFeatures from "@/assets/img/logo2.png"

export default function WhyChooseSection() {
    return (
        <section className="py-20 bg-white" id="mengapamemilihkami">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-10">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50/80 px-4 py-2.5 text-xs font-semibold text-indigo-700 shadow-sm">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_0_4px] shadow-indigo-400/30 animate-pulse"></span>
                        <Bus className="w-4 h-4 text-indigo-600" />
                        <span>Alasan Rombongan Memilih GoBus</span>
                        <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-[0.65rem] uppercase tracking-wide text-indigo-700 border border-indigo-200 font-bold">
                            Why GoBus
                        </span>
                    </div>


                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
                        Mengapa Memilih GoBus
                    </h2>

                    <div className="space-y-5 text-sm md:text-base">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-indigo-100 text-indigo-600">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-semibold text-indigo-600">Pemesanan Cepat dan Terstruktur</p>
                                <p className="text-slate-600">
                                    Proses sewa bus dirancang sederhana namun rapi. Cukup isi detail perjalanan, pilih armada, dan dapatkan konfirmasi tanpa perlu bolak-balik chat yang melelahkan.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-indigo-100 text-indigo-600">
                                <MapPinned className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-semibold text-indigo-600">Rute Fleksibel Sesuai Kebutuhan</p>
                                <p className="text-slate-600">
                                    Atur titik jemput, tujuan, dan jalur perjalanan sesuai agenda rombongan Anda. Cocok untuk wisata, acara kantor, studi tour, maupun keluarga besar.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-indigo-100 text-indigo-600">
                                <TicketCheck className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-semibold text-indigo-600">Harga Jelas dan Transparan</p>
                                <p className="text-slate-600">
                                    Dapatkan penawaran sewa bus dengan rincian biaya yang jelas, tanpa biaya tersembunyi. Semua detail disusun agar mudah dipahami oleh panitia dan rombongan.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="mt-1 inline-flex h-7 w-7 items-center justify-center aspect-square rounded-full bg-indigo-100 text-indigo-600">
                                <Headphones className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-semibold text-indigo-600">Tim Support yang Sigap</p>
                                <p className="text-slate-600">
                                    Butuh revisi jam berangkat, update titik jemput, atau konfirmasi ulang? Tim GoBus siap membantu agar perjalanan berjalan lancar dari awal hingga selesai.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img
                        src={whyFeatures}
                        alt="Mengapa memilih GoBus"
                        className="w-full max-w-md h-auto drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}
