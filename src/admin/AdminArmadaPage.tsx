"use client"

import { useState } from "react"
import { Bus, Search, Plus, Edit, Trash2, X, Save } from "lucide-react"
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

type BusStatus = "aktif" | "operasional" | "non-aktif"

type BusData = {
  id: string
  nama: string
  kapasitas: string
  tipe: string
  keterangan: string
  status: BusStatus
  platNomor: string
  tahunProduksi: string
}


const initialBuses: BusData[] = []

const statusConfig: Record<
  BusStatus,
  { label: string; className: string }
> = {
  operasional: {
    label: "Beroperasi",
    className: "bg-blue-100 text-blue-700 border-blue-200",
  },
  aktif: {
    label: "Siap Dipesan",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  "non-aktif": {
    label: "Maintenance",
    className: "bg-slate-100 text-slate-700 border-slate-200",
  },
}

export default function AdminArmadaPage() {
  const [buses, setBuses] = useState<BusData[]>(initialBuses)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterTipe, setFilterTipe] = useState<string>("all")
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedBus, setSelectedBus] = useState<BusData | null>(null)
  const [formData, setFormData] = useState<BusData>({
    id: "",
    nama: "",
    kapasitas: "",
    tipe: "",
    keterangan: "",
    status: "aktif",
    platNomor: "",
    tahunProduksi: "",
  })

  const filteredBuses = buses.filter((bus) => {
    const q = searchQuery.toLowerCase()
    const matchSearch =
      bus.nama.toLowerCase().includes(q) ||
      bus.id.toLowerCase().includes(q) ||
      bus.platNomor.toLowerCase().includes(q)

    const matchStatus = filterStatus === "all" || bus.status === filterStatus
    const matchTipe = filterTipe === "all" || bus.tipe === filterTipe

    return matchSearch && matchStatus && matchTipe
  })

  const handleAdd = () => {
    if (!formData.nama || !formData.platNomor) return

    setBuses((prev) => [
      ...prev,
      {
        ...formData,
        id: formData.id || `ME-${Date.now()}`, 
      },
    ])

    setIsAddOpen(false)
    setFormData({
      id: "",
      nama: "",
      kapasitas: "",
      tipe: "",
      keterangan: "",
      status: "aktif",
      platNomor: "",
      tahunProduksi: "",
    })
  }

  const handleEdit = () => {
    if (!selectedBus) return
    setBuses((prev) =>
      prev.map((bus) => (bus.id === selectedBus.id ? formData : bus)),
    )
    setIsEditOpen(false)
    setSelectedBus(null)
  }

  const handleDelete = () => {
    if (!selectedBus) return
    setBuses((prev) => prev.filter((bus) => bus.id !== selectedBus.id))
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

  const resetFilters = () => {
    setSearchQuery("")
    setFilterStatus("all")
    setFilterTipe("all")
  }

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
      
        <div className="bg-linear-to-r from-red-600 to-red-700 px-4 md:px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-bold text-lg">Kelola Armada Bus</h2>
                <p className="text-sm text-red-100">
                  Manajemen dan monitoring seluruh armada
                </p>
              </div>
            </div>

            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
              <DialogTrigger asChild>
                <Button className="bg-white text-red-600 hover:bg-red-50 font-semibold shadow-md">
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Bus Baru
                </Button>
              </DialogTrigger>

            
              <DialogContent className="container max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Tambah Armada Baru</DialogTitle>
                  <DialogDescription>
                    Lengkapi data bus yang akan ditambahkan ke armada
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nama">Nama Bus</Label>
                      <Input
                        id="nama"
                        value={formData.nama}
                        onChange={(e) =>
                          setFormData({ ...formData, nama: e.target.value })
                        }
                        placeholder="Mandiri Express Executive"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="platNomor">Plat Nomor</Label>
                      <Input
                        id="platNomor"
                        value={formData.platNomor}
                        onChange={(e) =>
                          setFormData({ ...formData, platNomor: e.target.value })
                        }
                        placeholder="BK 1234 AB"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipe">Tipe Bus</Label>
                      <Select
                        value={formData.tipe}
                        onValueChange={(v) =>
                          setFormData({ ...formData, tipe: v })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih tipe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Executive">Executive</SelectItem>
                          <SelectItem value="Family">Family</SelectItem>
                          <SelectItem value="School Trip">
                            School Trip
                          </SelectItem>
                          <SelectItem value="Mini Bus">Mini Bus</SelectItem>
                          <SelectItem value="Night Trip">Night Trip</SelectItem>
                          <SelectItem value="Touring">Touring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="kapasitas">Kapasitas</Label>
                      <Input
                        id="kapasitas"
                        value={formData.kapasitas}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            kapasitas: e.target.value,
                          })
                        }
                        placeholder="45 seat"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tahunProduksi">Tahun</Label>
                      <Input
                        id="tahunProduksi"
                        value={formData.tahunProduksi}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            tahunProduksi: e.target.value,
                          })
                        }
                        placeholder="2024"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Status Armada</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(v: BusStatus) =>
                        setFormData({ ...formData, status: v })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aktif">Aktif & Siap Dipesan</SelectItem>
                        <SelectItem value="operasional">
                          Sedang Beroperasi
                        </SelectItem>
                        <SelectItem value="non-aktif">
                          Non-aktif / Maintenance
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keterangan">Keterangan</Label>
                    <Textarea
                      id="keterangan"
                      value={formData.keterangan}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          keterangan: e.target.value,
                        })
                      }
                      placeholder="Deskripsi singkat tentang bus ini..."
                      rows={3}
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsAddOpen(false)}
                  >
                    Batal
                  </Button>
                  <Button
                    onClick={handleAdd}
                    className="bg-red-600 shadow-lg hover:bg-red-700 inline-flex items-center gap-2"
                  >
                    <Bus className="w-4 h-4" />
                    <span>Simpan Bus</span>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

                      
        <div className="p-4 md:p-6 space-y-4 border-b border-slate-200">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Cari nama bus, ID armada, atau plat nomor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full min-w-[130px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="aktif">Siap Dipesan</SelectItem>
                  <SelectItem value="operasional">Beroperasi</SelectItem>
                  <SelectItem value="non-aktif">Maintenance</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterTipe} onValueChange={setFilterTipe}>
                <SelectTrigger className="w-full min-w-[130px]">
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

              {(searchQuery ||
                filterStatus !== "all" ||
                filterTipe !== "all") && (
                <Button variant="outline" size="icon" onClick={resetFilters}>
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p className="text-slate-600">
              Menampilkan{" "}
              <span className="font-semibold text-slate-900">
                {filteredBuses.length}
              </span>{" "}
              dari{" "}
              <span className="font-semibold text-slate-900">
                {buses.length}
              </span>{" "}
              armada
            </p>
          </div>
        </div>

     
        <div className="hidden md:block overflow-x-auto max-h-[420px]">
          <table className="w-full border-separate border-spacing-0">
            <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Armada
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Plat Nomor
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Tipe
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Kapasitas
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredBuses.map((bus) => (
                <tr key={bus.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-16 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                        <Bus className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {bus.nama}
                        </p>
                        <p className="text-xs text-slate-500">ID: {bus.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">
                      {bus.platNomor}
                    </p>
                    <p className="text-xs text-slate-500">
                      Tahun {bus.tahunProduksi}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant="outline"
                      className="bg-red-50 text-red-700 border-red-200"
                    >
                      {bus.tipe}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">
                      {bus.kapasitas}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={statusConfig[bus.status].className}>
                      {statusConfig[bus.status].label}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEdit(bus)}
                        className="h-8"
                      >
                        <Edit className="w-3.5 h-3.5 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openDelete(bus)}
                        className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredBuses.length === 0 && (
            <div className="py-16 text-center">
              <Bus className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-medium">
                Belum ada armada yang terdaftar
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Tambah armada baru melalui tombol &quot;Tambah Bus Baru&quot;
              </p>
            </div>
          )}
        </div>

        <div className="md:hidden">
          {filteredBuses.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {filteredBuses.map((bus) => (
                <div
                  key={bus.id}
                  className="px-4 py-4 flex flex-col gap-3 bg-white"
                >
                  <div className="flex gap-3">
                    <div className="h-11 w-11 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <Bus className="w-5 h-5 text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        {bus.nama}
                      </p>
                      <p className="text-[0.7rem] text-slate-500">
                        ID: {bus.id}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-red-50 text-red-700 border-red-200 text-[0.65rem]"
                        >
                          {bus.tipe}
                        </Badge>
                        <Badge
                          className={`text-[0.65rem] ${statusConfig[bus.status].className}`}
                        >
                          {statusConfig[bus.status].label}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <p className="text-slate-500">Plat</p>
                      <p className="font-semibold text-slate-900">
                        {bus.platNomor}
                      </p>
                    </div>
                    <div className="space-y-0.5 text-right">
                      <p className="text-slate-500">Kapasitas</p>
                      <p className="font-semibold text-slate-900">
                        {bus.kapasitas}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-8 text-xs"
                      onClick={() => openEdit(bus)}
                    >
                      <Edit className="w-3.5 h-3.5 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-8 text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => openDelete(bus)}
                    >
                      <Trash2 className="w-3.5 h-3.5 mr-1" />
                      Hapus
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <Bus className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-700 text-sm font-medium">
                Belum ada armada yang terdaftar
              </p>
              <p className="text-xs text-slate-500 mt-1 px-6">
                Tambahkan data bus pertama melalui tombol &quot;Tambah Bus
                Baru&quot; di atas.
              </p>
            </div>
          )}
        </div>
      </div>

   
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="container max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Data Armada</DialogTitle>
            <DialogDescription>
              Perbarui informasi bus {selectedBus?.nama}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-nama">Nama Bus</Label>
                <Input
                  id="edit-nama"
                  value={formData.nama}
                  onChange={(e) =>
                    setFormData({ ...formData, nama: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-plat">Plat Nomor</Label>
                <Input
                  id="edit-plat"
                  value={formData.platNomor}
                  onChange={(e) =>
                    setFormData({ ...formData, platNomor: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-tipe">Tipe Bus</Label>
                <Select
                  value={formData.tipe}
                  onValueChange={(v) =>
                    setFormData({ ...formData, tipe: v })
                  }
                >
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
                <Label htmlFor="edit-kapasitas">Kapasitas</Label>
                <Input
                  id="edit-kapasitas"
                  value={formData.kapasitas}
                  onChange={(e) =>
                    setFormData({ ...formData, kapasitas: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-tahun">Tahun</Label>
                <Input
                  id="edit-tahun"
                  value={formData.tahunProduksi}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tahunProduksi: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-status">Status Armada</Label>
              <Select
                value={formData.status}
                onValueChange={(v: BusStatus) =>
                  setFormData({ ...formData, status: v })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aktif">Aktif & Siap Dipesan</SelectItem>
                  <SelectItem value="operasional">Sedang Beroperasi</SelectItem>
                  <SelectItem value="non-aktif">
                    Non-aktif / Maintenance
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-keterangan">Keterangan</Label>
              <Textarea
                id="edit-keterangan"
                value={formData.keterangan}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    keterangan: e.target.value,
                  })
                }
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
              className="bg-red-600 shadow-lg hover:bg-red-700 inline-flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Armada?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda akan menghapus{" "}
              <span className="font-semibold text-slate-900">
                {selectedBus?.nama}
              </span>{" "}
              dari daftar armada. Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 shadow-lg inline-flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              <span>Hapus Armada</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
