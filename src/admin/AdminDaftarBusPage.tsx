"use client"

import { useState } from "react"
import { Bus, Search, Plus, Edit, Trash2, Eye, Image as ImageIcon, X, Save, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

type BusData = {
  id: string
  nama: string
  kapasitas: string
  tipe: string
  keterangan: string
  img: string
  gallery: string[]
}

const initialBuses: BusData[] = [
  {
    id: "ME-EX-01",
    nama: "Mandiri Express Executive",
    kapasitas: "45 seat",
    tipe: "Executive",
    keterangan: "Nyaman untuk acara kantor dan perjalanan bisnis jarak jauh.",
    img: "",
    gallery: [],
  },
  {
    id: "ME-EX-02",
    nama: "Mandiri Express Executive Plus",
    kapasitas: "45 seat",
    tipe: "Executive",
    keterangan: "Kursi reclining, legroom lega, AC dingin, perjalanan mulus.",
    img: "",
    gallery: [],
  },
  {
    id: "ME-FAM-03",
    nama: "Mandiri Express Family",
    kapasitas: "40 seat",
    tipe: "Family",
    keterangan: "Cocok untuk keluarga besar, arisan, atau acara kampung.",
    img: "",
    gallery: [],
  },
  {
    id: "ME-FAM-04",
    nama: "Mandiri Express Family+",
    kapasitas: "40 seat",
    tipe: "Family",
    keterangan: "Bagasi ekstra untuk koper dan perlengkapan liburan.",
    img: "",
    gallery: [],
  },
  {
    id: "ME-SCH-05",
    nama: "Mandiri Express School Trip",
    kapasitas: "50 seat",
    tipe: "School Trip",
    keterangan: "Dirancang untuk study tour dan kunjungan edukasi.",
    img: "",
    gallery: [],
  },
  {
    id: "ME-SCH-06",
    nama: "Mandiri Express Graduation Tour",
    kapasitas: "50 seat",
    tipe: "School Trip",
    keterangan: "Pilihan favorit untuk perpisahan dan liburan kelulusan.",
    img: "",
    gallery: [],
  },
  {
    id: "ME-MINI-07",
    nama: "Mandiri Express Mini Coach",
    kapasitas: "25 seat",
    tipe: "Mini Bus",
    keterangan: "Rombongan kecil, komunitas, atau family trip ringkas.",
    img: "",
    gallery: [],
  },
  {
    id: "ME-NGT-09",
    nama: "Mandiri Express Night Trip",
    kapasitas: "45 seat",
    tipe: "Night Trip",
    keterangan: "Berangkat malam, waktu efisien, tiba pagi siap aktivitas.",
    img: "",
    gallery: [],
  },
  {
    id: "ME-TXL-10",
    nama: "Mandiri Express Touring XL",
    kapasitas: "48 seat",
    tipe: "Touring",
    keterangan: "Cocok untuk rombongan wisata besar dengan perjalanan antarkota.",
    img: "",
    gallery: [],
  },
]

export default function AdminDaftarBusPage() {
  const [buses, setBuses] = useState<BusData[]>(initialBuses)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterTipe, setFilterTipe] = useState<string>("all")
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedBus, setSelectedBus] = useState<BusData | null>(null)
  const [formData, setFormData] = useState<BusData>({
    id: "",
    nama: "",
    kapasitas: "",
    tipe: "",
    keterangan: "",
    img: "",
    gallery: [],
  })

  const filteredBuses = buses.filter((bus) => {
    const matchSearch =
      bus.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bus.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bus.kapasitas.toLowerCase().includes(searchQuery.toLowerCase())
    const matchTipe = filterTipe === "all" || bus.tipe === filterTipe
    return matchSearch && matchTipe
  })

  const resetForm = () => {
    setFormData({
      id: "",
      nama: "",
      kapasitas: "",
      tipe: "",
      keterangan: "",
      img: "",
      gallery: [],
    })
  }

  const handleAdd = () => {
    setBuses([...buses, { ...formData, id: `ME-${Date.now()}` }])
    setIsAddOpen(false)
    resetForm()
  }

  const handleEdit = () => {
    if (!selectedBus) return
    const updated = buses.map((bus) => (bus.id === selectedBus.id ? { ...formData, id: bus.id } : bus))
    setBuses(updated)
    setIsEditOpen(false)
    const newSelected = updated.find((b) => b.id === selectedBus.id) || null
    setSelectedBus(newSelected)
  }

  const handleDelete = () => {
    if (!selectedBus) return
    setBuses(buses.filter((bus) => bus.id !== selectedBus.id))
    setIsDeleteOpen(false)
    setSelectedBus(null)
  }

  const openEdit = (bus: BusData) => {
    setSelectedBus(bus)
    setFormData(bus)
    setIsEditOpen(true)
  }

  const openDelete = (bus: BusData) => {
    setSelectedBus(bus)
    setIsDeleteOpen(true)
  }

  const openGallery = (bus: BusData) => {
    setSelectedBus(bus)
    setIsGalleryOpen(true)
  }

  const resetFilters = () => {
    setSearchQuery("")
    setFilterTipe("all")
  }

  const handleCoverUpload = (files: FileList | null) => {
    const file = files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setFormData((prev) => ({ ...prev, img: url }))
  }

  const handleGalleryUpload = (files: FileList | null) => {
    if (!selectedBus || !files) return
    const urls = Array.from(files).map((file) => URL.createObjectURL(file))
    const updatedBuses = buses.map((bus) =>
      bus.id === selectedBus.id ? { ...bus, gallery: [...bus.gallery, ...urls] } : bus
    )
    setBuses(updatedBuses)
    setSelectedBus((prev) => (prev ? { ...prev, gallery: [...prev.gallery, ...urls] } : prev))
  }

  const handleRemoveGalleryImage = (index: number) => {
    if (!selectedBus) return
    const newGallery = selectedBus.gallery.filter((_, i) => i !== index)
    const updatedBuses = buses.map((bus) =>
      bus.id === selectedBus.id ? { ...bus, gallery: newGallery } : bus
    )
    setBuses(updatedBuses)
    setSelectedBus((prev) => (prev ? { ...prev, gallery: newGallery } : prev))
  }

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-linear-to-r from-red-600 to-red-700 px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <div className="h-12 w-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-bold text-lg">Kelola Daftar Bus</h2>
                <p className="text-sm text-red-100">Manajemen armada yang ditampilkan di website</p>
              </div>
            </div>

            <Dialog
              open={isAddOpen}
              onOpenChange={(open) => {
                setIsAddOpen(open)
                if (open) resetForm()
              }}
            >
              <DialogTrigger asChild>
                <Button className="bg-white text-red-600 hover:bg-red-50 font-semibold shadow-md">
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Bus ke Daftar
                </Button>
              </DialogTrigger>
              <DialogContent className="container max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Tambah Bus ke Daftar Website</DialogTitle>
                  <DialogDescription>Bus ini akan ditampilkan di halaman daftar armada website</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nama">Nama Bus</Label>
                      <Input
                        id="nama"
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        placeholder="Mandiri Express Executive"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="kapasitas">Kapasitas</Label>
                      <Input
                        id="kapasitas"
                        value={formData.kapasitas}
                        onChange={(e) => setFormData({ ...formData, kapasitas: e.target.value })}
                        placeholder="45 seat"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tipe">Tipe Bus</Label>
                    <Select value={formData.tipe} onValueChange={(v) => setFormData({ ...formData, tipe: v })}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih tipe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Executive">Executive</SelectItem>
                        <SelectItem value="Family">Family</SelectItem>
                        <SelectItem value="School Trip">School Trip</SelectItem>
                        <SelectItem value="Mini Bus">Mini Bus</SelectItem>
                        <SelectItem value="Night Trip">Night Trip</SelectItem>
                        <SelectItem value="Touring">Touring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Gambar Utama</Label>
                    {formData.img && (
                      <div className="h-32 w-full rounded-lg overflow-hidden border border-slate-200 mb-2">
                        <img src={formData.img} alt="Preview" className="h-full w-full object-cover" />
                      </div>
                    )}
                    <Input
                      id="img-upload-add"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleCoverUpload(e.target.files)}
                    />
                    <p className="text-xs text-slate-500">Pilih file gambar dari perangkat Anda.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keterangan">Keterangan Singkat</Label>
                    <Textarea
                      id="keterangan"
                      value={formData.keterangan}
                      onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
                      placeholder="Deskripsi singkat tentang bus ini..."
                      rows={3}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddOpen(false)}>
                    Batal
                  </Button>
                  <Button onClick={handleAdd} className="bg-red-600 shadow-lg hover:bg-red-700 flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Simpan Bus
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="p-6 space-y-4 border-b border-slate-200">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Cari nama bus, ID, atau kapasitas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterTipe} onValueChange={setFilterTipe}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Tipe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Tipe</SelectItem>
                  <SelectItem value="Executive">Executive</SelectItem>
                  <SelectItem value="Family">Family</SelectItem>
                  <SelectItem value="School Trip">School Trip</SelectItem>
                  <SelectItem value="Mini Bus">Mini Bus</SelectItem>
                  <SelectItem value="Night Trip">Night Trip</SelectItem>
                  <SelectItem value="Touring">Touring</SelectItem>
                </SelectContent>
              </Select>

              {(searchQuery || filterTipe !== "all") && (
                <Button variant="outline" size="icon" onClick={resetFilters}>
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p className="text-slate-600">
              Menampilkan{" "}
              <span className="font-semibold text-slate-900">{filteredBuses.length}</span> dari{" "}
              <span className="font-semibold text-slate-900">{buses.length}</span> bus
            </p>
          </div>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBuses.map((bus) => (
            <div
              key={bus.id}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-40 bg-slate-100">
                {bus.img ? (
                  <img src={bus.img} alt={bus.nama} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <Bus className="w-16 h-16 text-slate-300" />
                  </div>
                )}
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-2 py-0.5 border border-slate-200 text-xs font-medium text-slate-700">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{bus.gallery.length}</span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <p className="text-xs text-slate-400">ID {bus.id}</p>
                  <p className="text-sm font-semibold text-slate-900 line-clamp-2">{bus.nama}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 text-xs">
                      {bus.tipe}
                    </Badge>
                    <span className="text-xs text-slate-600">{bus.kapasitas}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{bus.keterangan}</p>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openGallery(bus)}
                    className="flex-1 h-8 text-xs"
                  >
                    <Eye className="w-3.5 h-3.5 mr-1" />
                    Galeri
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEdit(bus)}
                    className="h-8 text-xs"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openDelete(bus)}
                    className="h-8 text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBuses.length === 0 && (
          <div className="py-16 text-center px-6">
            <Bus className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-medium">Tidak ada bus ditemukan</p>
            <p className="text-sm text-slate-500 mt-1">Coba ubah filter atau kata kunci pencarian</p>
          </div>
        )}
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="container max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Data Bus</DialogTitle>
            <DialogDescription>Perbarui informasi bus {selectedBus?.nama}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-nama">Nama Bus</Label>
                <Input
                  id="edit-nama"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-kapasitas">Kapasitas</Label>
                <Input
                  id="edit-kapasitas"
                  value={formData.kapasitas}
                  onChange={(e) => setFormData({ ...formData, kapasitas: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-tipe">Tipe Bus</Label>
              <Select value={formData.tipe} onValueChange={(v) => setFormData({ ...formData, tipe: v })}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Executive">Executive</SelectItem>
                  <SelectItem value="Family">Family</SelectItem>
                  <SelectItem value="School Trip">School Trip</SelectItem>
                  <SelectItem value="Mini Bus">Mini Bus</SelectItem>
                  <SelectItem value="Night Trip">Night Trip</SelectItem>
                  <SelectItem value="Touring">Touring</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Gambar Utama</Label>
              {formData.img && (
                <div className="h-32 w-full rounded-lg overflow-hidden border border-slate-200 mb-2">
                  <img src={formData.img} alt="Preview" className="h-full w-full object-cover" />
                </div>
              )}
              <Input
                id="edit-img-upload"
                type="file"
                accept="image/*"
                onChange={(e) => handleCoverUpload(e.target.files)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-keterangan">Keterangan</Label>
              <Textarea
                id="edit-keterangan"
                value={formData.keterangan}
                onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
              Batal
            </Button>
            <Button
              onClick={handleEdit}
              className="bg-red-600 shadow-lg hover:bg-red-700 flex items-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              Simpan Perubahan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Bus dari Daftar?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda akan menghapus{" "}
              <span className="font-semibold text-slate-900">{selectedBus?.nama}</span> dari daftar bus di website.
              Bus ini tidak akan ditampilkan lagi di halaman armada.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 shadow-lg hover:bg-red-700 flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Hapus dari Daftar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog
        open={isGalleryOpen}
        onOpenChange={(open) => {
          setIsGalleryOpen(open)
          if (!open) return
        }}
      >
        <DialogContent className="container max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Galeri Foto • {selectedBus?.nama}</DialogTitle>
            <DialogDescription>
              Kelola foto galeri untuk bus ini ({selectedBus?.gallery.length || 0} foto)
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {selectedBus?.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-4/3 rounded-lg overflow-hidden border border-slate-200 group"
                >
                  <img src={img} alt={`Foto ${idx + 1}`} className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => handleRemoveGalleryImage(idx)}
                    className="absolute right-2 top-2 rounded-full bg-black/60 text-white p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <label
                htmlFor="gallery-upload"
                className="aspect-4/3 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-400 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Plus className="w-8 h-8 mb-2" />
                <p className="text-xs font-medium">Tambah Foto</p>
              </label>
            </div>
            <Input
              id="gallery-upload"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleGalleryUpload(e.target.files)}
            />
            <p className="text-xs text-slate-500">
              Upload gambar dari perangkat untuk menambahkan ke galeri bus ini.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsGalleryOpen(false)}>
              Tutup
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
