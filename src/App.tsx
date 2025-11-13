"use client"

import { Routes, Route } from "react-router-dom"
import BerandaPage from "./main/home"
import BusPage from "./main/home/Bus"
import BusResultPage from "./main/ResultBus"
import BusDetailPage from "./main/BusDetails"
import PaymentSuccessPage from "./main/Payments"
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
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
