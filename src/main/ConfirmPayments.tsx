"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, UploadCloud, SendHorizonal, CreditCard, Copy, FileText } from "lucide-react"

export default function ConfirmPaymentPage() {
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        navigate("/pemesanan-berhasil")
    }

    return (
        <main className="bg-white antialiased py-20">
            <div className="max-w-7xl mx-auto px-4 space-y-6">
                <Button
                    variant="ghost"
                    className="px-0 text-slate-700 hover:text-slate-900 flex items-center gap-1"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-xs md:text-sm">Kembali ke halaman sebelumnya</span>
                </Button>

                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                        <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 font-semibold">
                            Konfirmasi pembayaran
                        </p>
                        <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
                            Laporkan bukti transfer pemesanan GoBus
                        </h1>
                        <p className="text-xs md:text-sm text-slate-600 max-w-xl">
                            Isi form berikut setelah Anda melakukan transfer sesuai instruksi dari admin GoBus.
                            Tim kami akan memverifikasi dan mengupdate status pemesanan rombongan Anda.
                        </p>
                    </div>

                    <div className="text-right space-y-1">
                        <p className="text-[0.7rem] text-slate-500">Perkiraan jam verifikasi</p>
                        <p className="text-sm font-semibold text-slate-900">
                            10–30 menit jam kerja
                        </p>
                        <p className="text-[0.7rem] text-slate-400">
                            Di luar jam kerja, verifikasi dilakukan di hari berikutnya.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.7fr_1.3fr] items-start">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <Card className="border-slate-200 rounded-xl shadow-sm">
                            <CardContent className="p-5 md:p-6 space-y-5">
                                <div className="space-y-1">
                                    <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 font-semibold">
                                        Data pemesanan
                                    </p>
                                    <p className="text-sm md:text-base font-semibold text-slate-900">
                                        Cocokkan dengan kode referensi yang Anda terima
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="kode">Kode referensi pemesanan</Label>
                                        <Input
                                            id="kode"
                                            required
                                            placeholder="Contoh: GBUS-REQ-2025-00123"
                                            className="h-10 text-sm border-slate-300 focus-visible:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="nama">Nama PIC</Label>
                                            <Input
                                                id="nama"
                                                required
                                                placeholder="Nama lengkap penanggung jawab"
                                                className="h-10 text-sm border-slate-300 focus-visible:ring-indigo-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="whatsapp">Nomor WhatsApp PIC</Label>
                                            <Input
                                                id="whatsapp"
                                                required
                                                placeholder="Contoh: 0812xxxxxxxx"
                                                className="h-10 text-sm border-slate-300 focus-visible:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200 rounded-xl shadow-sm">
                            <CardContent className="p-5 md:p-6 space-y-5">
                                <div className="space-y-1">
                                    <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 font-semibold">
                                        Detail pembayaran
                                    </p>
                                    <p className="text-sm md:text-base font-semibold text-slate-900">
                                        Informasi transfer yang sudah Anda lakukan
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="bank-tujuan">Bank tujuan</Label>
                                            <Input
                                                id="bank-tujuan"
                                                required
                                                placeholder="Contoh: BCA a.n PT GoBus Indonesia"
                                                className="h-10 text-sm border-slate-300 focus-visible:ring-indigo-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="tanggal-transfer">Tanggal transfer</Label>
                                            <Input
                                                id="tanggal-transfer"
                                                type="date"
                                                required
                                                className="h-10 text-sm border-slate-300 focus-visible:ring-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="jumlah">Jumlah yang ditransfer (Rp)</Label>
                                            <Input
                                                id="jumlah"
                                                type="number"
                                                min={0}
                                                required
                                                placeholder="Contoh: 4500000"
                                                className="h-10 text-sm border-slate-300 focus-visible:ring-indigo-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="tipe-pembayaran">Tipe pembayaran</Label>
                                            <Input
                                                id="tipe-pembayaran"
                                                required
                                                placeholder="Contoh: DP 30% atau Pelunasan"
                                                className="h-10 text-sm border-slate-300 focus-visible:ring-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Bukti transfer</Label>
                                        <div className="flex flex-col gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                                                    <UploadCloud className="w-5 h-5 text-slate-500" />
                                                </div>
                                                <div className="flex-1 text-xs md:text-sm text-slate-600 text-left">
                                                    Upload screenshot atau foto bukti transfer yang jelas. Format yang diterima:
                                                    JPG, PNG, atau PDF.
                                                </div>
                                            </div>
                                            <Input
                                                id="bukti"
                                                type="file"
                                                required
                                                className="h-10 cursor-pointer bg-white text-sm file:mr-3 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-white hover:file:bg-indigo-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
                            <p className="text-[0.7rem] md:text-xs text-slate-500">
                                Dengan mengirim form ini, Anda menyatakan bahwa data pembayaran yang diisi sudah benar.
                                Tim GoBus akan menghubungi Anda jika diperlukan verifikasi tambahan.
                            </p>
                            <Button
                                type="submit"
                                className="w-full md:w-auto h-11 md:h-11 rounded-lg text-sm md:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-400/40 inline-flex items-center justify-center gap-2 px-6"
                            >
                                <SendHorizonal className="w-4 h-4" />
                                <span>Kirim konfirmasi pembayaran</span>
                            </Button>
                        </div>
                    </form>

                    <div className="space-y-4">
                        <Card className="border-slate-200 rounded-xl shadow-sm">
                            <CardContent className="p-5 md:p-6 space-y-4 text-xs md:text-sm">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="space-y-1">
                                        <p className="text-sm font-semibold text-slate-900">
                                            Informasi rekening pembayaran
                                        </p>
                                        <p className="text-[0.75rem] text-slate-500">
                                            Lakukan transfer hanya ke rekening resmi di bawah ini atas nama PT GoBus Indonesia.
                                        </p>
                                    </div>
                                    <CreditCard className="w-6 h-6 text-indigo-500" />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3">
                                        <div className="space-y-0.5">
                                            <p className="text-xs font-semibold text-slate-900">BCA</p>
                                            <p className="text-xs text-slate-700">123 456 7890</p>
                                            <p className="text-[0.7rem] text-slate-500">a.n PT GoBus Indonesia</p>
                                        </div>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="h-8 rounded-full px-3 text-[0.7rem] gap-1 border-slate-300"
                                        >
                                            <Copy className="w-3 h-3" />
                                            Salin
                                        </Button>
                                    </div>

                                    <div className="flex items-center justify-between rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3">
                                        <div className="space-y-0.5">
                                            <p className="text-xs font-semibold text-slate-900">Mandiri</p>
                                            <p className="text-xs text-slate-700">987 654 3210</p>
                                            <p className="text-[0.7rem] text-slate-500">a.n PT GoBus Indonesia</p>
                                        </div>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="h-8 rounded-full px-3 text-[0.7rem] gap-1 border-slate-300"
                                        >
                                            <Copy className="w-3 h-3" />
                                            Salin
                                        </Button>
                                    </div>

                                    <div className="flex items-center justify-between rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3">
                                        <div className="space-y-0.5">
                                            <p className="text-xs font-semibold text-slate-900">BRI</p>
                                            <p className="text-xs text-slate-700">112 233 4455</p>
                                            <p className="text-[0.7rem] text-slate-500">a.n PT GoBus Indonesia</p>
                                        </div>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="h-8 rounded-full px-3 text-[0.7rem] gap-1 border-slate-300"
                                        >
                                            <Copy className="w-3 h-3" />
                                            Salin
                                        </Button>
                                    </div>
                                </div>


                                <p className="text-[0.7rem] text-amber-600">
                                    Hindari transfer ke nomor rekening selain yang tertera di atas untuk keamanan transaksi Anda.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200 rounded-xl shadow-sm">
                            <CardContent className="p-5 md:p-6 space-y-4 text-xs md:text-sm">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="space-y-1">
                                        <p className="text-sm font-semibold text-slate-900">
                                            Invoice pemesanan
                                        </p>
                                        <p className="text-[0.75rem] text-slate-500">
                                            Lihat ringkasan tagihan lengkap untuk pemesanan rombongan Anda.
                                        </p>
                                    </div>
                                    <FileText className="w-6 h-6 text-indigo-500" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">Kode invoice</span>
                                        <span className="font-semibold text-slate-900">INV-GBUS-2025-00123</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">Status</span>
                                        <span className="text-[0.75rem] rounded-full bg-amber-50 px-2 py-1 border border-amber-100 text-amber-700 font-medium">
                                            Menunggu pembayaran
                                        </span>
                                    </div>
                                </div>

                                <Button
                                    type="button"
                                    onClick={() => navigate("/invoice")}
                                    className="w-full h-9 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold text-white inline-flex items-center justify-center gap-2 shadow-md"
                                >
                                    <FileText className="w-4 h-4" />
                                    <span>Lihat invoice lengkap</span>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    )
}
