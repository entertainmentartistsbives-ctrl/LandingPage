import { Outlet } from "react-router";
import Navbar from "./Navbar";
import LuxuryFooter from "./LuxuryFooter";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <LuxuryFooter />
      <ScrollToTop />
    </div>
  );
}