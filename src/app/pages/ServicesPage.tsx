import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const intersections = [
  { label: "Product Vision",       sub: "Defining what to build and why it matters" },
  { label: "Business Architecture", sub: "Structuring how the business operates and scales" },
  { label: "Market-Fit Strategy",  sub: "Aligning solutions with validated demand" },
  { label: "Operational Systems",  sub: "Building processes that run without friction" },
  { label: "Growth Execution",     sub: "Turning strategy into measurable outcomes" },
];

const expertise = [
  {
    index: "01",
    title: "Product & Service Architecture",
    body: "Designing scalable products and service ecosystems aligned with market demand and operational viability.",
  },
  {
    index: "02",
    title: "Startup Validation & Growth Advisory",
    body: "Helping founders validate ideas, identify opportunities, refine positioning, and establish scalable business models.",
  },
  {
    index: "03",
    title: "Business Systems & Workflow Design",
    body: "Creating operational workflows, marketing systems, sales structures, and functional business processes.",
  },
  {
    index: "04",
    title: "Market-Fit & Solution Optimization",
    body: "Transforming concepts into market-ready solutions through strategic refinement and ecosystem thinking.",
  },
  {
    index: "05",
    title: "Strategic Decision Partnership",
    body: "Supporting leadership teams in making scalable, data-driven, and business-focused growth decisions.",
  },
];

export default function ServicesPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="bg-transparent text-white w-full">

      {/* ══════════════════════════════════════
          HERO — Split canvas
      ══════════════════════════════════════ */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[58%_42%] pt-20">

        {/* LEFT — Content */}
        <div className="relative flex flex-col justify-center px-8 md:px-16 pt-12 pb-24 overflow-hidden">
          {/* grid lines */}
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(201,161,74,1) 59px,rgba(201,161,74,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(201,161,74,1) 59px,rgba(201,161,74,1) 60px)" }} />

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-11">
              <div className="w-8 h-px bg-[#C9A14A]" />
              <span className="text-[10px] tracking-[0.45em] uppercase text-[#C9A14A] font-medium">
                CEO-Level Strategic Advisory
              </span>
            </div>

            <h1
              className="font-bold leading-[1.03] mb-9 text-white"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.2rem)" }}
            >
              Building
              <br />
              Market-Ready
              <br />
              Business Systems,
              <br />
              <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#D4B872] not-italic">Products &amp; Growth</em>
              <br />
              Architectures
            </h1>

            <p className="text-gray-400 leading-[1.85] font-light mb-11" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", maxWidth: "38rem" }}>
              I help founders, startups, and organizations transform ideas, operations, and
              business models into scalable products, services, and high-performance growth
              systems aligned with real market demand.
            </p>

            {/* CTA block */}
            <div className="flex flex-col gap-4">
              <Link to="/contact" className="group self-start flex items-center gap-3 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-semibold px-10 py-[18px] text-[11px] tracking-[0.18em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,161,74,0.4)] rounded-full hover:-translate-y-1">
                Book Strategic Advisory Session
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-2 pl-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] animate-pulse" />
                <span className="text-[10px] text-gray-500 tracking-[0.12em] uppercase font-medium">
                  Accepting limited strategic engagements
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Geometric system visual */}
        <div className="hidden lg:flex relative flex-col justify-center items-center border-l border-gray-800/50 bg-white/[0.02] backdrop-blur-sm overflow-hidden px-10 py-32">
          {/* Amber radial */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(201,161,74,0.15) 0%, transparent 65%)" }} />

          {/* The 5-node system diagram */}
          <div className="relative w-full max-w-md flex flex-col gap-0 ml-8">
            {intersections.map((item, i) => (
              <div key={item.label} className="relative flex items-start gap-8 group py-8">
                {/* Vertical connector line */}
                {i < intersections.length - 1 && (
                  <div className="absolute left-[15px] top-[40px] w-[2px] bg-gray-800" style={{ height: "100%" }} />
                )}
                {/* Node dot */}
                <div className="relative z-10 mt-1 flex-shrink-0 w-8 h-8 border border-[#C9A14A]/40 flex items-center justify-center bg-black group-hover:border-[#C9A14A] group-hover:shadow-[0_0_15px_rgba(201,161,74,0.4)] transition-all duration-300 rounded-sm">
                  <div className="w-3 h-3 bg-[#C9A14A]/40 group-hover:bg-[#C9A14A] transition-colors duration-300 rounded-sm" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors duration-200 leading-snug mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A14A]/50 font-medium">
              5 Integrated Disciplines
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 1 — POSITIONING
      ══════════════════════════════════════ */}
      <section className="border-t border-gray-800/50 bg-black/20">
        <div className="px-8 md:px-16 pt-24 pb-16 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#C9A14A]" />
                <span className="text-[10px] tracking-[0.45em] uppercase text-[#C9A14A] font-medium">
                  Positioning
                </span>
              </div>
              <h2 className="font-bold leading-tight text-white" style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}>
                Strategic Product &amp; Business
                <br />
                <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#D4B872] not-italic">Systems Advisory</em>
              </h2>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm md:text-right">
              I work at the intersection of five disciplines — each one essential, all of them integrated.
            </p>
          </div>
        </div>

        <div className="border-b border-gray-800/50">
          {intersections.map((item, i) => (
            <div
              key={item.label}
              className="group relative flex items-center px-8 md:px-16 border-b border-gray-800/50 last:border-b-0 overflow-hidden transition-colors duration-300 hover:bg-white/[0.02] cursor-default"
            >
              <span
                className="absolute right-8 md:right-16 text-[8rem] md:text-[10rem] font-bold leading-none text-white/[0.02] select-none pointer-events-none transition-all duration-500 group-hover:text-white/[0.04]"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex items-center gap-8 md:gap-16 py-8 md:py-10 w-full max-w-7xl mx-auto">
                <span className="text-[10px] text-[#C9A14A]/50 flex-shrink-0 w-6 font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A]/30 flex-shrink-0 group-hover:bg-[#C9A14A] transition-colors duration-300" />
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-10">
                  <h3
                    className="font-bold text-gray-300 group-hover:text-white transition-colors duration-200"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 1.75rem)" }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-gray-500 text-sm font-light md:text-right max-w-xs group-hover:text-gray-400 transition-colors duration-200">
                    {item.sub}
                  </p>
                </div>
                <ArrowRight size={15} className="flex-shrink-0 text-transparent group-hover:text-[#C9A14A]/80 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="px-8 md:px-16 py-20 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="border-l-2 border-[#C9A14A] pl-8">
              <p className="text-gray-300 leading-relaxed font-light" style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}>
                My focus is not just technology — it is building the right business structures,
                workflows, products, and scalable ecosystems that create sustainable growth.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link to="/contact" className="group self-start lg:self-auto flex items-center gap-3 border border-[#C9A14A]/50 text-[#C9A14A] px-9 py-4 text-[11px] tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#C9A14A]/10 rounded-full">
                Book Strategic Advisory Session
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="text-[10px] text-gray-500 tracking-[0.1em] uppercase lg:text-right font-medium">
                No commitment required — start with one conversation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — CORE EXPERTISE
      ══════════════════════════════════════ */}
      <section className="bg-transparent border-t border-gray-800/50">
        <div className="px-8 md:px-16 pt-24 pb-14 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#C9A14A]" />
                <span className="text-[10px] tracking-[0.45em] uppercase text-[#C9A14A] font-medium">
                  Core Advisor Areas
                </span>
              </div>
              <h2 className="font-bold leading-tight text-white" style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}>
                Core Strategic
                <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#D4B872] not-italic"> Expertise</em>
              </h2>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xs">
              Five integrated advisory domains — each one compounding into the next.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800/50 border-b border-gray-800/50">
            {expertise.slice(0, 2).map((item, i) => (
              <ExpertiseCard key={item.index} item={item} i={i} active={activeCard === i} onEnter={() => setActiveCard(i)} onLeave={() => setActiveCard(null)} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800/50 border-b border-gray-800/50">
            {expertise.slice(2, 4).map((item, i) => (
              <ExpertiseCard key={item.index} item={item} i={i + 2} active={activeCard === i + 2} onEnter={() => setActiveCard(i + 2)} onLeave={() => setActiveCard(null)} />
            ))}
          </div>
          <div className="border-b border-gray-800/50 bg-gray-800/50">
            <ExpertiseCard item={expertise[4]} i={4} active={activeCard === 4} onEnter={() => setActiveCard(4)} onLeave={() => setActiveCard(null)} fullWidth />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A150C] to-[#0D0A06] border-y border-[#C9A14A]/20 px-8 md:px-16 py-16 relative overflow-hidden">
          <div className="absolute -inset-1/2 bg-[radial-gradient(ellipse_at_center,rgba(201,161,74,0.15)_0%,transparent_50%)] blur-2xl" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A14A] mb-3 font-medium">
                Ready to build?
              </p>
              <h3 className="font-bold text-white leading-snug" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}>
                Let's map your business &amp; growth strategy —<br className="hidden md:block" />
                <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#D4B872] not-italic"> in one focused session.</em>
              </h3>
            </div>
            <div className="flex flex-col gap-3 md:items-end flex-shrink-0">
              <Link to="/contact" className="group flex items-center gap-3 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black px-10 py-4 text-[11px] tracking-[0.18em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,161,74,0.4)] rounded-full font-semibold hover:-translate-y-1">
                Book Strategic Advisory Session
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <span className="text-[10px] text-gray-500 tracking-[0.1em] uppercase font-medium">
                60 min · Strategic clarity guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ExpertiseCard({
  item,
  active,
  onEnter,
  onLeave,
  fullWidth = false,
}: {
  item: { index: string; title: string; body: string };
  i: number;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`relative bg-[#0B0B0B] flex flex-col gap-7 p-10 md:p-12 cursor-default overflow-hidden transition-colors duration-300 hover:bg-white/[0.02] group ${fullWidth ? "md:flex-row md:items-start md:gap-20" : ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#C9A14A] transition-all duration-500"
        style={{ width: active ? "100%" : "2.5rem" }}
      />

      <div className={fullWidth ? "flex-shrink-0" : ""}>
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] text-[#C9A14A]/60 font-medium">
            {item.index}
          </span>
          <span className="text-7xl font-bold text-white/[0.03] leading-none select-none transition-colors duration-300 group-hover:text-white/[0.05]">
            {item.index}
          </span>
        </div>
        <h3
          className="font-bold leading-snug transition-colors duration-200"
          style={{
            fontSize: fullWidth ? "clamp(1.4rem, 2vw, 1.9rem)" : "clamp(1.1rem, 1.5vw, 1.4rem)",
            color: active ? "#C9A14A" : "#FFFFFF",
          }}
        >
          {item.title}
        </h3>
      </div>

      <div className={`flex flex-col gap-4 ${fullWidth ? "flex-1 pt-1" : ""}`}>
        <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors" style={{ fontSize: fullWidth ? "1rem" : "0.875rem" }}>
          {item.body}
        </p>
        <div className="flex items-center gap-2 text-[10px] text-[#C9A14A] tracking-[0.12em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium mt-auto">
          Explore this area <ArrowRight size={10} />
        </div>
      </div>
    </div>
  );
}
