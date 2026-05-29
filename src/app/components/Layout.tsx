import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./Navbar";
import LuxuryFooter from "./LuxuryFooter";
import ScrollToTop from "./ScrollToTop";
import Chatbot from "./Chatbot";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#020202] text-[#F5F5F5] relative font-sans selection:bg-[#C9A14A]/30 selection:text-[#C9A14A]">
      
      {/* Elegant Global Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#C9A14A]/10 to-transparent blur-[150px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#E0BC74]/10 to-transparent blur-[150px]"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[80vw] h-[40vw] rounded-full bg-[#C9A14A]/5 blur-[180px]"></div>
      </div>

      <ScrollRestoration />
      
      {/* Content wrapper with z-index to sit above the fixed background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <LuxuryFooter />
      </div>

      <div className="relative z-50">
        <ScrollToTop />
        <Chatbot />
      </div>
    </div>
  );
}