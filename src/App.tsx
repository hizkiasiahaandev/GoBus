"use client"

import { Routes, Route } from "react-router-dom"
import BerandaPage from "./main/home"
import BusPage from "./main/home/Bus"
import BusResultPage from "./main/ResultBus"
import BusDetailPage from "./main/BusDetails"
import OrderSuccessPage from "./main/Orders"
import ConfirmPaymentPage from "./main/ConfirmPayments"
import InvoicePage from "./main/InvoicePage"
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"
export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<BerandaPage />} />
          <Route path="/bus" element={<BusPage />} />
          <Route path="/bus/result" element={<BusResultPage />} />
          <Route path="/bus/result/:id" element={<BusDetailPage />} />
          <Route path="/pemesanan-berhasil" element={<OrderSuccessPage />} />
          <Route path="/konfirmasi-pembayaran" element={<ConfirmPaymentPage />} />
          <Route path="/invoice" element={<InvoicePage  />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
