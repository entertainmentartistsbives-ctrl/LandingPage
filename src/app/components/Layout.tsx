import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./Navbar";
import LuxuryFooter from "./LuxuryFooter";
import ScrollToTop from "./ScrollToTop";
import Chatbot from "./Chatbot";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <LuxuryFooter />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
}