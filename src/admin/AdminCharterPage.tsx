"use client"

import { useState } from "react"
import {
  CalendarDays,
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  Users,
  Phone,
  Mail,
  Building2,
  Calendar,
  RefreshCcw,
  Save,
  TrendingUp,
  CheckCircle2,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  DialogFooter,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type CharterStatus = "pending" | "approved" | "rejected" | "completed"

type CharterData = {
  id: string
  kodeRef: string
  picNama: string
  whatsapp: string
  email: string
  instansi: string
  tanggalBerangkat: string
  durasiSewa: number
  titikJemput: string
  titikTurun: string
  jumlahPenumpang: number
  busNama: string
  busId: string
  catatan: string
  status: CharterStatus
  tanggalRequest: string
  hargaEstimasi?: string
  adminNotes?: string
}

const initialCharters: CharterData[] = [
  {
    id: "1",
    kodeRef: "ME-REQ-2025-00123",
    picNama: "Cahaya Putri",
    whatsapp: "081234567890",
    email: "cahaya@email.com",
    instansi: "PT. Mandiri Group",
    tanggalBerangkat: "2024-11-20",
    durasiSewa: 2,
    titikJemput: "Medan Sunggal, depan kampus",
    titikTurun: "Berastagi, Hotel Grand Mutiara",
    jumlahPenumpang: 35,
    busNama: "Mandiri Express Executive",
    busId: "ME-EX-01",
    catatan: "Butuh stop makan 1x",
    status: "pending",
    tanggalRequest: "2024-11-15 10:30",
    hargaEstimasi: "Rp 5.500.000",
  },
  {
    id: "2",
    kodeRef: "ME-REQ-2025-00124",
    picNama: "Budi Santoso",
    whatsapp: "082345678901",
    email: "budi@email.com",
    instansi: "CV. Berkah Jaya",
    tanggalBerangkat: "2024-11-22",
    durasiSewa: 1,
    titikJemput: "Medan Amplas",
    titikTurun: "Parapat, Toba Lake",
    jumlahPenumpang: 40,
    busNama: "Mandiri Express Family",
    busId: "ME-FAM-03",
    catatan: "Rombongan keluarga, ada anak kecil",
    status: "approved",
    tanggalRequest: "2024-11-15 14:20",
    hargaEstimasi: "Rp 3.200.000",
    adminNotes: "Sudah dikonfirmasi via WA, DP 50%",
  },
  {
    id: "3",
    kodeRef: "ME-REQ-2025-00125",
    picNama: "Siti Rahma",
    whatsapp: "083456789012",
    email: "siti@pendidikan.ac.id",
    instansi: "Yayasan Pendidikan Sumatra",
    tanggalBerangkat: "2024-11-25",
    durasiSewa: 3,
    titikJemput: "Medan Kota",
    titikTurun: "Danau Toba, Samosir",
    jumlahPenumpang: 50,
    busNama: "Mandiri Express School Trip",
    busId: "ME-SCH-05",
    catatan: "Study tour siswa SMA, butuh tour guide",
    status: "completed",
    tanggalRequest: "2024-11-10 09:15",
    hargaEstimasi: "Rp 8.500.000",
    adminNotes: "Pelunasan sudah diterima, perjalanan selesai dengan baik",
  },
]

const statusConfig = {
  pending: {
    label: "Pending",
    class: "bg-yellow-100 text-yellow-700 border-yellow-200",
    icon: Clock,
  },
  approved: {
    label: "Disetujui",
    class: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: CheckCircle,
  },
  rejected: {
    label: "Ditolak",
    class: "bg-red-100 text-red-700 border-red-200",
    icon: XCircle,
  },
  completed: {
    label: "Selesai",
    class: "bg-blue-100 text-blue-700 border-blue-200",
    icon: CheckCircle,
  },
}

export default function AdminCharterPage() {
  const [charters, setCharters] = useState<CharterData[]>(initialCharters)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isUpdateOpen, setIsUpdateOpen] = useState(false)
  const [selectedCharter, setSelectedCharter] = useState<CharterData | null>(
    null,
  )
  const [updateForm, setUpdateForm] = useState({
    status: "" as CharterStatus,
    hargaEstimasi: "",
    adminNotes: "",
  })

  const filteredCharters = charters.filter((charter) => {
    const q = searchQuery.toLowerCase()
    const matchSearch =
      charter.kodeRef.toLowerCase().includes(q) ||
      charter.picNama.toLowerCase().includes(q) ||
      charter.instansi.toLowerCase().includes(q) ||
      charter.busNama.toLowerCase().includes(q)

    const matchStatus = filterStatus === "all" || charter.status === filterStatus
    return matchSearch && matchStatus
  })

  const openDetail = (charter: CharterData) => {
    setSelectedCharter(charter)
    setIsDetailOpen(true)
  }

  const openUpdate = (charter: CharterData) => {
    setSelectedCharter(charter)
    setUpdateForm({
      status: charter.status,
      hargaEstimasi: charter.hargaEstimasi || "",
      adminNotes: charter.adminNotes || "",
    })
    setIsUpdateOpen(true)
  }

  const handleUpdate = () => {
    if (!selectedCharter) return
    setCharters((prev) =>
      prev.map((charter) =>
        charter.id === selectedCharter.id
          ? { ...charter, ...updateForm }
          : charter,
      ),
    )
    setIsUpdateOpen(false)
    setSelectedCharter(null)
  }

  const stats = {
    total: charters.length,
    pending: charters.filter((c) => c.status === "pending").length,
    approved: charters.filter((c) => c.status === "approved").length,
    completed: charters.filter((c) => c.status === "completed").length,
  }

  return (
    <div className="space-y-6">
     
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Total Permintaan
            </p>
            <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-slate-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-900 mb-2">
            {stats.total}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Semua request tercatat</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
              Menunggu Approval
            </p>
            <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-amber-900 mb-2">
            {stats.pending}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-amber-700 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
            <span>Perlu ditindaklanjuti</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Disetujui
            </p>
            <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-emerald-900 mb-2">
            {stats.approved}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Siap berangkat</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Selesai
            </p>
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-blue-600 rotate-90" />
            </div>
          </div>
          <p className="text-3xl font-bold text-blue-900 mb-2">
            {stats.completed}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-blue-700 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Perjalanan selesai</span>
          </div>
        </div>
      </section>

    
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-linear-to-r from-red-600 to-red-700 px-6 py-5">
          <div className="flex items-center gap-3 text-white">
            <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Kelola Permintaan Charter</h2>
              <p className="text-sm text-red-100">Daftar pemesanan dari pelanggan</p>
            </div>
          </div>
        </div>

       
        <div className="p-6 space-y-4 border-b border-slate-200">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Cari kode referensi, nama PIC, instansi, atau bus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Disetujui</SelectItem>
                <SelectItem value="rejected">Ditolak</SelectItem>
                <SelectItem value="completed">Selesai</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p className="text-slate-600">
              Menampilkan{" "}
              <span className="font-semibold text-slate-900">
                {filteredCharters.length}
              </span>{" "}
              dari{" "}
              <span className="font-semibold text-slate-900">
                {charters.length}
              </span>{" "}
              permintaan
            </p>
          </div>
        </div>

      
        <div className="hidden md:block overflow-x-auto max-h-[420px]">
          <table className="w-full border-separate border-spacing-0">
            <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Kode & PIC
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Perjalanan
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Bus
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Penumpang
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
              {filteredCharters.map((charter) => {
                const StatusIcon = statusConfig[charter.status].icon
                return (
                  <tr
                    key={charter.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <p className="text-xs font-mono text-slate-500">
                          {charter.kodeRef}
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          {charter.picNama}
                        </p>
                        <p className="text-xs text-slate-600">
                          {charter.instansi || "-"}
                        </p>
                        <p className="text-xs text-slate-400">
                          {charter.tanggalRequest}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{charter.tanggalBerangkat}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{charter.durasiSewa} hari</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="line-clamp-1">
                            {charter.titikJemput} → {charter.titikTurun}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-900">
                        {charter.busNama}
                      </p>
                      <p className="text-xs text-slate-500">
                        ID: {charter.busId}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-medium text-slate-900">
                          {charter.jumlahPenumpang}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={statusConfig[charter.status].class}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {statusConfig[charter.status].label}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDetail(charter)}
                          className="h-8"
                        >
                          <Eye className="w-3.5 h-3.5 mr-1" />
                          Detail
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openUpdate(charter)}
                          className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          Update
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {filteredCharters.length === 0 && (
            <div className="py-16 text-center">
              <CalendarDays className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-medium">
                Tidak ada permintaan ditemukan
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Coba ubah filter atau kata kunci pencarian
              </p>
            </div>
          )}
        </div>

      
        <div className="md:hidden">
          {filteredCharters.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {filteredCharters.map((charter) => {
                const StatusIcon = statusConfig[charter.status].icon
                return (
                  <div
                    key={charter.id}
                    className="px-4 py-4 flex flex-col gap-3 bg-white"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5">
                        <p className="text-[0.7rem] font-mono text-slate-500">
                          {charter.kodeRef}
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          {charter.picNama}
                        </p>
                        <p className="text-xs text-slate-600 line-clamp-1">
                          {charter.instansi || "-"}
                        </p>
                        <p className="text-[0.7rem] text-slate-400">
                          {charter.tanggalRequest}
                        </p>
                      </div>
                      <Badge className={statusConfig[charter.status].class}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {statusConfig[charter.status].label}
                      </Badge>
                    </div>

                    <div className="flex flex-col gap-1 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{charter.tanggalBerangkat}</span>
                        <span className="mx-1">•</span>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{charter.durasiSewa} hari</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 mt-0.5" />
                        <span className="line-clamp-2">
                          {charter.titikJemput} → {charter.titikTurun}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>{charter.jumlahPenumpang} penumpang</span>
                        <span className="mx-1">•</span>
                        <span className="font-medium text-slate-900 line-clamp-1">
                          {charter.busNama}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 h-8 text-xs"
                        onClick={() => openDetail(charter)}
                      >
                        <Eye className="w-3.5 h-3.5 mr-1" />
                        Detail
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 h-8 text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => openUpdate(charter)}
                      >
                        <RefreshCcw className="w-3.5 h-3.5 mr-1" />
                        Update
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="py-12 text-center">
              <CalendarDays className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-700 text-sm font-medium">
                Tidak ada permintaan ditemukan
              </p>
              <p className="text-xs text-slate-500 mt-1 px-6">
                Coba ubah filter atau kata kunci pencarian.
              </p>
            </div>
          )}
        </div>
      </div>

   
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="container max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detail Permintaan Charter</DialogTitle>
            <DialogDescription>
              Informasi lengkap pemesanan dari pelanggan
            </DialogDescription>
          </DialogHeader>
          {selectedCharter && (
            <div className="space-y-6 py-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">
                      Data PIC
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">Nama Lengkap</p>
                          <p className="font-medium text-slate-900">
                            {selectedCharter.picNama}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">WhatsApp</p>
                          <p className="font-medium text-slate-900">
                            {selectedCharter.whatsapp}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">Email</p>
                          <p className="font-medium text-slate-900">
                            {selectedCharter.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">Instansi</p>
                          <p className="font-medium text-slate-900">
                            {selectedCharter.instansi || "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">
                      Detail Perjalanan
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">
                            Tanggal Berangkat
                          </p>
                          <p className="font-medium text-slate-900">
                            {selectedCharter.tanggalBerangkat}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">Durasi Sewa</p>
                          <p className="font-medium text-slate-900">
                            {selectedCharter.durasiSewa} hari
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">Titik Jemput</p>
                          <p className="font-medium text-slate-900">
                            {selectedCharter.titikJemput}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">Titik Turun</p>
                          <p className="font-medium text-slate-900">
                            {selectedCharter.titikTurun}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-xs text-slate-500">
                            Jumlah Penumpang
                          </p>
                          <p className="font-medium text-slate-900">
                            {selectedCharter.jumlahPenumpang} orang
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    Bus yang Dipilih
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    {selectedCharter.busNama}
                  </p>
                  <p className="text-xs text-slate-600">
                    ID: {selectedCharter.busId}
                  </p>
                </div>

                {selectedCharter.catatan && (
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      Catatan Tambahan
                    </p>
                    <p className="text-sm text-slate-700 bg-slate-50 rounded-lg p-3 border border-slate-200">
                      {selectedCharter.catatan}
                    </p>
                  </div>
                )}

                {selectedCharter.hargaEstimasi && (
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      Harga Estimasi
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      {selectedCharter.hargaEstimasi}
                    </p>
                  </div>
                )}

                {selectedCharter.adminNotes && (
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      Catatan Admin
                    </p>
                    <p className="text-sm text-slate-700 bg-blue-50 rounded-lg p-3 border border-blue-200">
                      {selectedCharter.adminNotes}
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <p className="text-xs text-slate-500">Status:</p>
                  <Badge className={statusConfig[selectedCharter.status].class}>
                    {statusConfig[selectedCharter.status].label}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailOpen(false)}>
              Tutup
            </Button>
            <Button
              onClick={() => {
                setIsDetailOpen(false)
                if (selectedCharter) openUpdate(selectedCharter)
              }}
              className="bg-red-600 hover:bg-red-700 shadow-lg inline-flex items-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              <span>Update Status</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    
      <Dialog open={isUpdateOpen} onOpenChange={setIsUpdateOpen}>
        <DialogContent className="container">
          <DialogHeader>
            <DialogTitle>Update Permintaan Charter</DialogTitle>
            <DialogDescription>
              Ubah status dan tambahkan informasi untuk{" "}
              {selectedCharter?.kodeRef}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="status">Status Permintaan</Label>
              <Select
                value={updateForm.status}
                onValueChange={(v: CharterStatus) =>
                  setUpdateForm({ ...updateForm, status: v })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">
                    Pending - Menunggu
                  </SelectItem>
                  <SelectItem value="approved">
                    Disetujui - Konfirmasi Diterima
                  </SelectItem>
                  <SelectItem value="rejected">
                    Ditolak - Tidak Tersedia
                  </SelectItem>
                  <SelectItem value="completed">
                    Selesai - Perjalanan Selesai
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="harga">Harga Estimasi Charter</Label>
              <Input
                id="harga"
                value={updateForm.hargaEstimasi}
                onChange={(e) =>
                  setUpdateForm({ ...updateForm, hargaEstimasi: e.target.value })
                }
                placeholder="Contoh: Rp 5.500.000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Catatan Admin (Internal)</Label>
              <Textarea
                id="notes"
                value={updateForm.adminNotes}
                onChange={(e) =>
                  setUpdateForm({ ...updateForm, adminNotes: e.target.value })
                }
                placeholder="Catatan untuk tim internal, progress konfirmasi, status pembayaran, dll"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsUpdateOpen(false)}>
              Batal
            </Button>
            <Button
              onClick={handleUpdate}
              className="bg-red-600 shadow-lg hover:bg-red-700 inline-flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Update</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
