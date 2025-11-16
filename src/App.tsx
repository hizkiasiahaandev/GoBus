"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import BerandaPage from "./main/home"
import BusPage from "./main/home/Bus"
import BusResultPage from "./main/ResultBus"
import BusDetailPage from "./main/BusDetails"
import OrderSuccessPage from "./main/Orders"

import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"

import AdminLoginPage from "./admin/AdminLoginPage"
import AdminLayout from "./admin/AdminLayout"
import AdminHomePage from "./admin/AdminHomePage"
import AdminArmadaPage from "./admin/AdminArmadaPage"
import AdminDaftarBusPage from "./admin/AdminDaftarBusPage"
import AdminCharterPage from "./admin/AdminCharterPage"
import AdminSettingsPage from "./admin/AdminSettingsPage"
import { isAdminLoggedIn } from "./admin/auth"

function ProtectedAdminRoute({ children }: { children: React.ReactNode }) {
  if (!isAdminLoggedIn()) {
    return <AdminLoginPage />
  }
  return <>{children}</>
}

export default function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin")

  return (
    <>
      {/* Navbar/footer tidak muncul di halaman admin */}
      {!isAdminRoute && <Navbar />}

      <div className={isAdminRoute ? "" : "pt-25"}>
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<BerandaPage />} />
          <Route path="/bus" element={<BusPage />} />
          <Route path="/bus/result" element={<BusResultPage />} />
          <Route path="/bus/result/:id" element={<BusDetailPage />} />
          <Route path="/pemesanan-berhasil" element={<OrderSuccessPage />} />

          {/* ADMIN LOGIN */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* ADMIN LAYOUT + CHILD ROUTES */}
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminLayout />
              </ProtectedAdminRoute>
            }
          >
            {/* /admin */}
            <Route index element={<AdminHomePage />} />
            {/* /admin/armada */}
            <Route path="armada" element={<AdminArmadaPage />} />
            {/* /admin/daftar-bus */}
            <Route path="daftar-bus" element={<AdminDaftarBusPage />} />
            {/* /admin/charter */}
            <Route path="charter" element={<AdminCharterPage />} />
            {/* /admin/pengaturan */}
            <Route path="pengaturan" element={<AdminSettingsPage />} />
          </Route>
        </Routes>
      </div>

      {!isAdminRoute && <Footer />}
    </>
  )
}
