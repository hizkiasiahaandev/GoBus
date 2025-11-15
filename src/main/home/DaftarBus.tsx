"use client"

import { useMemo, useState, useEffect } from "react"
import { Bus, Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react"
import busExecutive from "@/assets/img/bus.png"
import busFamily from "@/assets/img/bus1.png"

type GalleryItem = { src: string; label: string; desc: string }

type BusItem = {
  id: string
  nama: string
  kapasitas: string
  tipe: string
  keterangan: string
  img: string
  gallery: GalleryItem[]
}

const daftarBus: BusItem[] = [
  {
    id: "ME-EX-01",
    nama: "Mandiri Express Executive",
    kapasitas: "45 seat",
    tipe: "Executive",
    keterangan: "Nyaman untuk acara kantor dan perjalanan bisnis jarak jauh.",
    img: busExecutive,
    gallery: [
      { src: busExecutive, label: "Tampak Luar", desc: "Body bersih, lampu LED, kaca panorama." },
      { src: busFamily, label: "Interior", desc: "Kursi reclining, AC dingin, lampu ambient." },
      { src: busExecutive, label: "Bagian Belakang", desc: "Bagasi luas untuk koper dan perlengkapan." },
      { src: busFamily, label: "Kursi & Akses", desc: "Akses lorong lega, seatbelt pada tiap kursi." },
    ],
  },
  {
    id: "ME-EX-02",
    nama: "Mandiri Express Executive Plus",
    kapasitas: "45 seat",
    tipe: "Executive",
    keterangan: "Kursi reclining, legroom lega, AC dingin, perjalanan mulus.",
    img: busFamily,
    gallery: [
      { src: busFamily, label: "Tampak Luar", desc: "Body aerodynamic, cat pearl, lampu DRL." },
      { src: busExecutive, label: "Interior", desc: "Konfigurasi 2-2, USB charger tiap baris." },
      { src: busFamily, label: "Bagian Belakang", desc: "Kamera mundur dan sensor parkir." },
      { src: busExecutive, label: "Kursi & Akses", desc: "Sandaran kaki, jok empuk, handrail aman." },
    ],
  },
  {
    id: "ME-FAM-03",
    nama: "Mandiri Express Family",
    kapasitas: "40 seat",
    tipe: "Family",
    keterangan: "Cocok untuk keluarga besar, arisan, atau acara kampung.",
    img: busFamily,
    gallery: [
      { src: busFamily, label: "Tampak Luar", desc: "Livery cerah, mudah dikenali di parkiran." },
      { src: busFamily, label: "Interior", desc: "Layout ramah anak, tirai privasi." },
      { src: busExecutive, label: "Bagian Belakang", desc: "Kompartemen penyimpanan stroller." },
      { src: busExecutive, label: "Kursi & Akses", desc: "Langkah anak rendah, pijakan anti-slip." },
    ],
  },
  {
    id: "ME-FAM-04",
    nama: "Mandiri Express Family+",
    kapasitas: "40 seat",
    tipe: "Family",
    keterangan: "Bagasi ekstra untuk koper dan perlengkapan liburan.",
    img: busExecutive,
    gallery: [
      { src: busExecutive, label: "Tampak Luar", desc: "Roof rack opsional, siap perjalanan jauh." },
      { src: busFamily, label: "Interior", desc: "Rak atas besar, lampu baca individual." },
      { src: busFamily, label: "Bagian Belakang", desc: "Pintu bagasi lebar, loading mudah." },
      { src: busExecutive, label: "Kursi & Akses", desc: "Material mudah dibersihkan, ramah keluarga." },
    ],
  },
  {
    id: "ME-SCH-05",
    nama: "Mandiri Express School Trip",
    kapasitas: "50 seat",
    tipe: "School Trip",
    keterangan: "Dirancang untuk study tour dan kunjungan edukasi.",
    img: busExecutive,
    gallery: [
      { src: busExecutive, label: "Tampak Luar", desc: "Stiker sekolah, identitas rombongan jelas." },
      { src: busFamily, label: "Interior", desc: "Seat 2-3, pengawas duduk depan-belakang." },
      { src: busExecutive, label: "Bagian Belakang", desc: "Kotak P3K, APAR, standar keselamatan." },
      { src: busFamily, label: "Kursi & Akses", desc: "Area darurat ditandai reflektif." },
    ],
  },
  {
    id: "ME-SCH-06",
    nama: "Mandiri Express Graduation Tour",
    kapasitas: "50 seat",
    tipe: "School Trip",
    keterangan: "Pilihan favorit untuk perpisahan dan liburan kelulusan.",
    img: busFamily,
    gallery: [
      { src: busFamily, label: "Tampak Luar", desc: "Dekorasi kelulusan opsional, foto-ready." },
      { src: busExecutive, label: "Interior", desc: "Speaker onboard, bisa karaoke santai." },
      { src: busFamily, label: "Bagian Belakang", desc: "Bagasi seragam dan goodie bag." },
      { src: busExecutive, label: "Kursi & Akses", desc: "Kursi baris belakang lega untuk foto." },
    ],
  },
  {
    id: "ME-MINI-07",
    nama: "Mandiri Express Mini Coach",
    kapasitas: "25 seat",
    tipe: "Mini Bus",
    keterangan: "Rombongan kecil, komunitas, atau family trip ringkas.",
    img: busFamily,
    gallery: [
      { src: busFamily, label: "Tampak Luar", desc: "Dimensi kompak, lincah masuk gang." },
      { src: busExecutive, label: "Interior", desc: "Layout efisien, AC merata." },
      { src: busExecutive, label: "Bagian Belakang", desc: "Penyimpanan peralatan komunitas." },
      { src: busFamily, label: "Kursi & Akses", desc: "Akses cepat, cocok trip harian." },
    ],
  },
  {
    id: "ME-NGT-09",
    nama: "Mandiri Express Night Trip",
    kapasitas: "45 seat",
    tipe: "Night Trip",
    keterangan: "Berangkat malam, waktu efisien, tiba pagi siap aktivitas.",
    img: busExecutive,
    gallery: [
      { src: busExecutive, label: "Tampak Luar", desc: "Lampu malam terang, visibilitas tinggi." },
      { src: busExecutive, label: "Interior", desc: "Lampu redup, tirai gelap untuk tidur." },
      { src: busFamily, label: "Bagian Belakang", desc: "Power backup dan maintenance kit." },
      { src: busFamily, label: "Kursi & Akses", desc: "Sandaran leher, selimut opsional." },
    ],
  },
  {
    id: "ME-TXL-10",
    nama: "Mandiri Express Touring XL",
    kapasitas: "48 seat",
    tipe: "Touring",
    keterangan: "Cocok untuk rombongan wisata besar dengan perjalanan antarkota.",
    img: busExecutive,
    gallery: [
      { src: busExecutive, label: "Tampak Luar", desc: "Sasis tinggi, bagasi besar, lampu proyektor." },
      { src: busFamily, label: "Interior", desc: "Audio video on-board, port USB, ambience light." },
      { src: busExecutive, label: "Bagian Belakang", desc: "Ruang bagasi ekstra dan ban serep." },
      { src: busFamily, label: "Kursi & Akses", desc: "Kursi ergonomis 2-2, handrest nyaman." },
    ],
  },
]

export default function DaftarBusSection() {
  const [selectedBus, setSelectedBus] = useState<BusItem | null>(null)
  const [open, setOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const gallery = useMemo(() => selectedBus?.gallery ?? [], [selectedBus])
  const current = gallery[lightboxIndex]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxOpen) setLightboxOpen(false)
        else setOpen(false)
      }
      if (e.key === "ArrowRight" && lightboxOpen && gallery.length > 0) {
        setLightboxIndex((i) => (i + 1) % gallery.length)
      }
      if (e.key === "ArrowLeft" && lightboxOpen && gallery.length > 0) {
        setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [lightboxOpen, gallery.length])

  return (
    <section id="daftar-bus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 space-y-8 pt-20">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/80 px-4 py-2 text-xs font-semibold text-red-700 shadow-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px] shadow-red-400/30 animate-pulse" />
            <Bus className="w-4 h-4 text-red-600" />
            <span>Daftar Armada Mandiri Express</span>
            <span className="px-2 py-0.5 rounded-lg bg-red-100 text-[0.65rem] uppercase tracking-wide text-red-700 border border-red-200 font-bold">
              Pilih Bus
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-red-600">Pilih bus yang sesuai dengan kebutuhan rombongan Anda</h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl">Lihat galeri foto armada.</p>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {daftarBus.map((bus) => (
            <div
              key={bus.id}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(15,23,42,0.07)]"
            >
              <button
                onClick={() => {
                  setSelectedBus(bus)
                  setOpen(true)
                  setLightboxOpen(false)
                  setLightboxIndex(0)
                }}
                className="w-full text-left"
              >
                <div className="relative">
                  <img src={bus.img} alt={bus.nama} className="h-44 w-full object-cover" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-2 py-0.5 border border-slate-200 text-[0.7rem] font-medium text-slate-700">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>{bus.kapasitas}</span>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <p className="text-[0.7rem] text-slate-400">ID {bus.id}</p>
                      <p className="text-sm md:text-base font-semibold text-slate-900 line-clamp-2">{bus.nama}</p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 border border-red-100 text-[0.7rem] font-medium text-red-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        {bus.tipe}
                      </span>
                    </div>
                    <div className="text-right text-xs space-y-1">
                      <p className="text-slate-500">Kapasitas</p>
                      <p className="font-semibold text-slate-900">{bus.kapasitas}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed min-h-10">{bus.keterangan}</p>

                  <div className="flex gap-3">
                    <span className="w-full h-10 rounded-lg shadow-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold inline-flex items-center justify-center gap-2">
                      <ImageIcon className="w-4 h-4" />
                      Buka Galeri
                    </span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {open && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false)
            }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div className="relative max-w-4xl w-[94%] rounded-lg bg-white shadow-2xl border border-slate-200 p-0 overflow-hidden">
              <div className="px-5 md:px-6 pt-5 md:pt-6 pb-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">Galeri • {selectedBus?.nama}</h3>
                  <button
                    onClick={() => setOpen(false)}
                    className="h-9 w-9 rounded-lg bg-white border border-slate-200 shadow-sm hover:bg-slate-50 text-slate-600"
                    aria-label="Tutup dialog"
                    title="Tutup"
                  >
                    <X className="w-5 h-5 mx-auto" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {(selectedBus?.gallery ?? []).slice(0, 4).map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setLightboxIndex(idx)
                        setLightboxOpen(true)
                      }}
                      className="group relative aspect-4/3 rounded-lg overflow-hidden border border-slate-200"
                    >
                      <img
                        src={item.src}
                        alt={`${selectedBus?.nama} • ${item.label}`}
                        className="w-full h-full object-cover transition group-hover:scale-[1.02]"
                      />
                      <span className="absolute left-2 bottom-2 rounded-lg bg-black/60 text-white text-[0.7rem] px-2 py-0.5">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {open && lightboxOpen && gallery.length > 0 && current && (
          <div
            className="fixed inset-0 z-110 flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxOpen(false)
            }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div className="relative w-full h-full max-h-[92vh] flex items-center justify-center px-4">
              <img
                src={current.src}
                alt={`${selectedBus?.nama} • ${current.label}`}
                className="max-h-[78vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
              />

              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute right-4 top-4 h-10 w-10 rounded-lg bg-white/90 border border-slate-200 shadow-sm hover:bg-white text-slate-700"
                aria-label="Tutup pratinjau"
                title="Tutup"
              >
                <X className="w-5 h-5 mx-auto" />
              </button>

              {gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length)}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border border-slate-200 shadow hover:bg-white"
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5 mx-auto" />
                  </button>
                  <button
                    onClick={() => setLightboxIndex((i) => (i + 1) % gallery.length)}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border border-slate-200 shadow hover:bg-white"
                    aria-label="Foto selanjutnya"
                  >
                    <ChevronRight className="w-5 h-5 mx-auto" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
