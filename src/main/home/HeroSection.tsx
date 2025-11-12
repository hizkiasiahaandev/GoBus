"use client"

import { useState, useEffect, useMemo } from "react"
import {
    ArrowRight,
    Bus,
    ChevronLeft,
    ChevronRight,
    PhoneCall,
    CheckCircle2,
    MapPin,
    Users,
    Calendar,
    Moon
} from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import busExecutive from "@/assets/img/bus.png"
import busFamily from "@/assets/img/bus1.png"
import busNight from "@/assets/img/bus.png"

const busSlides = [
    { src: busExecutive, title: "Armada Executive", subtitle: "Kursi reclining, AC dingin, perjalanan lebih nyaman" },
    { src: busFamily, title: "Bus Keluarga", subtitle: "Cocok untuk rombongan wisata dan perjalanan bersama" },
    { src: busNight, title: "Night Trip", subtitle: "Pilihan jadwal malam untuk kamu yang suka hemat waktu" }
]

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [asal, setAsal] = useState("Medan")
    const [tujuan, setTujuan] = useState("Berastagi")
    const [tanggal, setTanggal] = useState("")
    const [durasi, setDurasi] = useState(1)
    const [penumpang, setPenumpang] = useState(20)
    const [layanan, setLayanan] = useState("Charter Harian")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % busSlides.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const goNext = () => setCurrentIndex((prev) => (prev + 1) % busSlides.length)
    const goPrev = () => setCurrentIndex((prev) => (prev - 1 + busSlides.length) % busSlides.length)

    const waLink = useMemo(() => {
        const phone = "6281234567890"
        const msg =
            `Halo GoBus, saya ingin charter bus.\n` +
            `Layanan: ${layanan}\n` +
            `Rute: ${asal} → ${tujuan}\n` +
            `Tanggal: ${tanggal || "-"} | Durasi: ${durasi} hari\n` +
            `Jumlah Penumpang: ${penumpang} orang\n` +
            `Mohon kirimkan estimasi harga dan ketersediaan armada.`
        return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    }, [asal, tujuan, tanggal, durasi, penumpang, layanan])

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pt-5">
                <div className="grid lg:grid-cols-2 items-center gap-10 min-h-[80vh]">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50/80 px-4 py-2.5 text-xs font-semibold text-indigo-700 shadow-sm">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_0_4px] shadow-indigo-400/30 animate-pulse"></span>
                            <Bus className="w-4 h-4 text-indigo-600" />
                            <span>GoBus Charter</span>
                            <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-[0.65rem] uppercase tracking-wide text-indigo-700 border border-indigo-200 font-bold">
                                Trusted Travel Partner
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 leading-tight">
                            Sewa Bus Pilihan Anda Sekarang
                        </h1>

                        <p className="text-slate-600 leading-relaxed">
                            Nikmati kemudahan menyewa bus tanpa ribet. Pilih{" "}
                            <span className="text-indigo-600 font-semibold">armada terbaik</span> untuk perjalanan rombongan Anda — dengan layanan{" "}
                            <span className="text-indigo-600 font-semibold">nyaman, aman, dan fleksibel</span> hanya di GoBus. Pemesanan{" "}
                            <span className="text-indigo-600 font-semibold">transparan</span> dan didukung tim operasional yang siaga.
                        </p>


                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                            <Dialog open={open} onOpenChange={setOpen}>
                                <DialogTrigger asChild>
                                    <button className="inline-flex justify-center items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg font-medium hover:bg-indigo-700 transition w-full sm:w-auto">
                                        Pesan Sekarang
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-lg">
                                    <DialogHeader>
                                        <DialogTitle>Form Pemesanan Charter Bus</DialogTitle>
                                        <DialogDescription>Isi data berikut untuk cek ketersediaan dan mendapatkan estimasi harga.</DialogDescription>
                                    </DialogHeader>

                                    <div className="grid sm:grid-cols-2 gap-3">
                                        <div className="relative">
                                            <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                                            <Input
                                                value={asal}
                                                onChange={(e) => setAsal(e.target.value)}
                                                className="pl-9 h-11"
                                                placeholder="Kota Asal"
                                            />
                                        </div>
                                        <div className="relative">
                                            <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                                            <Input
                                                value={tujuan}
                                                onChange={(e) => setTujuan(e.target.value)}
                                                className="pl-9 h-11"
                                                placeholder="Kota Tujuan"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                                            <Input
                                                type="date"
                                                value={tanggal}
                                                onChange={(e) => setTanggal(e.target.value)}
                                                className="pl-9 h-11"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Moon className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                                            <Select value={String(durasi)} onValueChange={(v) => setDurasi(parseInt(v))}>
                                                <SelectTrigger className="h-11 text-sm pl-9 pr-3 w-full">
                                                    <SelectValue placeholder="Durasi" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Array.from({ length: 7 }).map((_, i) => (
                                                        <SelectItem key={i + 1} value={String(i + 1)}>{i + 1} Hari</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="relative">
                                            <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                                            <Input
                                                type="number"
                                                min={10}
                                                max={60}
                                                value={penumpang}
                                                onChange={(e) => setPenumpang(parseInt(e.target.value) || 0)}
                                                className="pl-9 h-11"
                                                placeholder="Jumlah Penumpang"
                                            />
                                        </div>
                                        <Select value={layanan} onValueChange={setLayanan}>
                                            <SelectTrigger className="h-11 text-sm px-3 w-full">
                                                <SelectValue placeholder="Jenis Layanan" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Charter Harian">Charter Harian</SelectItem>
                                                <SelectItem value="One Way">One Way</SelectItem>
                                                <SelectItem value="Pulang Pergi">Pulang Pergi</SelectItem>
                                                <SelectItem value="Trip Malam">Trip Malam</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:justify-start w-full">
                                        <a
                                            href={waLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={() => setOpen(false)}
                                            className="w-full inline-flex justify-center items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg font-medium hover:bg-indigo-700 transition"
                                        >
                                            Minta Penawaran
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                        <a
                                            href="tel:+6281234567890"
                                            className="w-full inline-flex justify-center items-center gap-2 border border-indigo-200 text-indigo-700 px-5 py-3 rounded-lg font-medium hover:bg-indigo-50 transition"
                                        >
                                            Hubungi Admin
                                            <PhoneCall className="w-4 h-4" />
                                        </a>
                                    </DialogFooter>

                                </DialogContent>
                            </Dialog>

                            <a
                                href="#daftar-bus"
                                className="inline-flex justify-center items-center gap-2 border border-indigo-200 text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition w-full sm:w-auto"
                            >
                                Lihat Daftar Bus
                            </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <div className="inline-flex items-center gap-2 text-xs text-slate-600">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                <span>Free konsultasi rute</span>
                            </div>
                            <div className="inline-flex items-center gap-2 text-xs text-slate-600">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                <span>Pembayaran fleksibel</span>
                            </div>
                            <div className="inline-flex items-center gap-2 text-xs text-slate-600">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                <span>Harga transparan</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <a href="#daftar-bus" className="px-3 py-1.5 text-xs rounded-full border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">Medan–Berastagi</a>
                            <a href="#daftar-bus" className="px-3 py-1.5 text-xs rounded-full border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">Medan–Pematangsiantar</a>
                            <a href="#daftar-bus" className="px-3 py-1.5 text-xs rounded-full border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">Medan–Parapat</a>
                            <a href="#daftar-bus" className="px-3 py-1.5 text-xs rounded-full border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">Medan–Binjai</a>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md h-64 md:h-80">
                            {busSlides.map((slide, index) => (
                                <div
                                    key={slide.title}
                                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                                >
                                    <img
                                        src={slide.src}
                                        alt={slide.title}
                                        className="w-full h-full object-cover rounded-lg drop-shadow-xl"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-slate-900/70 backdrop-blur-md px-4 py-3 text-xs md:text-sm text-slate-100 shadow-lg">
                                        <p className="font-semibold">{slide.title}</p>
                                        <p className="text-slate-300 text-[0.7rem] md:text-xs">{slide.subtitle}</p>
                                    </div>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={goPrev}
                                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/90 shadow-md w-8 h-8 hover:bg-indigo-50 transition"
                            >
                                <ChevronLeft className="w-4 h-4 text-slate-700" />
                            </button>

                            <button
                                type="button"
                                onClick={goNext}
                                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/90 shadow-md w-8 h-8 hover:bg-indigo-50 transition"
                            >
                                <ChevronRight className="w-4 h-4 text-slate-700" />
                            </button>

                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3">
                                {busSlides.map((s, idx) => (
                                    <button
                                        key={s.title}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-10 w-14 rounded-lg overflow-hidden ring-1 transition ${idx === currentIndex ? "ring-indigo-500 scale-105" : "ring-indigo-200 hover:scale-105"}`}
                                    >
                                        <img src={s.src} alt={s.title} className="h-full w-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
