"use client"

import { CalendarDays, Users, TrendingUp, Clock, CheckCircle2, AlertCircle, Wrench, MapPin, Calendar } from "lucide-react"

type BusStatus = "aktif" | "operasional" | "non-aktif"

const buses: { id: number; status: BusStatus }[] = [
    { id: 1, status: "aktif" },
    { id: 2, status: "operasional" },
    { id: 3, status: "aktif" },
    { id: 4, status: "non-aktif" },
    { id: 5, status: "aktif" },
    { id: 6, status: "operasional" },
]

const charterRequests = [
    {
        id: 1,
        company: "PT. Mandiri Group",
        route: "Medan - Berastagi",
        buses: 2,
        date: "20 Nov 2024",
        status: "pending",
        time: "2 jam yang lalu"
    },
    {
        id: 2,
        company: "CV. Berkah Jaya",
        route: "Medan - Parapat",
        buses: 1,
        date: "22 Nov 2024",
        status: "approved",
        time: "5 jam yang lalu"
    },
    {
        id: 3,
        company: "Yayasan Pendidikan Sumatra",
        route: "Medan - Danau Toba",
        buses: 3,
        date: "25 Nov 2024",
        status: "pending",
        time: "1 hari yang lalu"
    }
]

export default function AdminHomePage() {
    const totalBus = buses.length
    const aktif = buses.filter((b) => b.status === "aktif").length
    const operasional = buses.filter((b) => b.status === "operasional").length
    const nonAktif = buses.filter((b) => b.status === "non-aktif").length

    return (
        <>
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Total Armada</p>
                        <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-slate-600" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-slate-900 mb-2">{totalBus}</p>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        <span>Semua unit terdaftar</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Siap Dipesan</p>
                        <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-emerald-900 mb-2">{aktif}</p>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        <span>Tersedia untuk charter</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Beroperasi</p>
                        <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-blue-900 mb-2">{operasional}</p>
                    <div className="flex items-center gap-1.5 text-xs text-blue-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span>Sedang on the road</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Maintenance</p>
                        <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                            <Wrench className="w-5 h-5 text-amber-600" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-amber-900 mb-2">{nonAktif}</p>
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span>Dalam perbaikan</span>
                    </div>
                </div>

            </section>


            <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-linear-to-r from-red-600 to-red-700 px-6 py-4">
                        <div className="flex items-center gap-3 text-white">
                            <div className="h-10 w-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <CalendarDays className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-bold text-base">Permintaan Charter Terbaru</h2>
                                <p className="text-xs text-red-100">Daftar pemesanan dari pelanggan</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 space-y-3">
                        {charterRequests.map((request) => (
                            <div
                                key={request.id}
                                className="flex items-start gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-all group"
                            >
                                <div className="h-12 w-12 rounded-lg bg-red-600 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-red-300 transition-colors">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">{request.company}</p>
                                            <p className="text-xs text-slate-600 mt-0.5">{request.route}</p>
                                        </div>
                                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full shrink-0 ${request.status === "pending"
                                                ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                                : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                                            }`}>
                                            {request.status === "pending" ? "Pending" : "Approved"}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{request.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-1 h-1 rounded-full bg-slate-400" />
                                            <span>{request.buses} Bus</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{request.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex items-center justify-center pt-4">
                            <button className="text-sm font-medium text-red-600 hover:text-red-700 hover:underline transition-colors">
                                Lihat semua permintaan →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-linear-to-r from-slate-700 to-slate-800 px-6 py-4">
                        <div className="flex items-center gap-3 text-white">
                            <div className="h-10 w-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-bold text-base">Catatan Admin</h2>
                                <p className="text-xs text-slate-300">Informasi penting</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 space-y-3">
                        <div className="p-4 bg-linear-to-br from-red-50 to-red-100/50 border border-red-200 rounded-lg">
                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center shrink-0">
                                    <AlertCircle className="w-4 h-4 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-red-800 font-bold mb-1">Keamanan Data</p>
                                    <p className="text-xs text-red-700 leading-relaxed">
                                        Dashboard ini hanya untuk internal. Jangan bagikan kredensial login ke pihak lain.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-linear-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-lg">
                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-blue-800 font-bold mb-1">Update Sistem</p>
                                    <p className="text-xs text-blue-700 leading-relaxed">
                                        Maintenance rutin setiap Minggu pukul 02.00 - 04.00 WIB.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-linear-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 rounded-lg">
                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-emerald-800 font-bold mb-1">Tips Operasional</p>
                                    <p className="text-xs text-emerald-700 leading-relaxed">
                                        Cek status armada setiap pagi sebelum menerima pesanan baru.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}