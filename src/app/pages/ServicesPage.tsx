import { Link } from "react-router";
import ahanaImage from '../assets/Ahana.jpeg';
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Box, Target, LayoutDashboard, Globe, Zap, Code, ShieldCheck, Briefcase, ChevronRight, Activity, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import { cn } from "../../utils/luxury-utils";

/* Glowing Curved Section Divider */
const CurvedDivider = () => (
  <div className="relative w-full h-[60px] my-16 overflow-visible pointer-events-none z-10">
    <svg className="absolute w-full h-[60px] left-0 top-0 overflow-visible" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,25 C360,50 1080,10 1440,25" stroke="url(#goldGradientLine)" strokeWidth="1.5" opacity="0.6" filter="url(#goldLineGlow)" />
      <path d="M0,25 C360,50 1080,10 1440,25" stroke="url(#goldGradientLine)" strokeWidth="0.5" opacity="0.3" />
      <defs>
        <linearGradient id="goldGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A14A" stopOpacity="0" />
          <stop offset="30%" stopColor="#E0BC74" stopOpacity="1" />
          <stop offset="70%" stopColor="#E0BC74" stopOpacity="1" />
          <stop offset="100%" stopColor="#C9A14A" stopOpacity="0" />
        </linearGradient>
        <filter id="goldLineGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  </div>
);

/* Gold Wave Sweep behind Hero Image */
const HeroGoldSweeps = () => (
  <svg className="absolute right-[-10%] top-[-5%] w-[120%] h-[110%] pointer-events-none z-0 overflow-visible opacity-80" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1000,100 C750,50 480,250 250,550 C80,780 20,880 0,1000" stroke="url(#heroGoldGrad)" strokeWidth="6" opacity="0.45" filter="url(#heroGoldGlow)" />
    <path d="M1000,200 C800,150 550,320 350,620 C180,820 50,920 0,1000" stroke="url(#heroGoldGrad)" strokeWidth="2" opacity="0.3" />
    <path d="M1000,50 C680,150 400,450 150,750 C50,870 0,940 0,1000" stroke="url(#heroGoldGrad)" strokeWidth="1" opacity="0.15" />
    <defs>
      <linearGradient id="heroGoldGrad" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E0BC74" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#C9A14A" stopOpacity="1" />
        <stop offset="100%" stopColor="#E0BC74" stopOpacity="0" />
      </linearGradient>
      <filter id="heroGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="20" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  </svg>
);

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div ref={containerRef} className="relative text-[#F5F5F5] w-full min-h-screen font-sans selection:bg-[#C9A14A] selection:text-[#020202]">
      
      {/* ══════════════════════════════════════
          1️⃣ HERO SECTION (Stunning Gold Swoosh & Portrait)
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Text Column */}
          <motion.div 
            initial="hidden" 
            animate="show" 
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col relative z-20"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
               <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A14A]"></div>
               <span className="text-[#C9A14A] text-xs uppercase tracking-[0.4em] font-semibold">Strategic Advisory</span>
               <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A14A]"></div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-8 font-light text-white tracking-tight">
              Strategic <span className="text-[#E0BC74] font-medium drop-shadow-[0_0_15px_rgba(224,188,116,0.15)]">Product</span> & Business<br/> 
              Systems, Products & <span className="text-[#E0BC74] font-medium italic drop-shadow-[0_0_15px_rgba(224,188,116,0.15)]">Growth</span><br/> 
              Architectures
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-[#B5B5B5] text-lg md:text-xl leading-relaxed mb-12 font-light max-w-xl">
              I help founders, startups, and organizations transform ideas, operations, and business models into scalable products, services, and high-performance growth systems aligned with real market demand.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4.5 rounded-full bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-semibold tracking-[0.15em] uppercase text-xs overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(201,161,74,0.55)] duration-300">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Book Strategic Advisory Session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Image/Wave Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[500px] lg:h-[650px] w-full flex items-center justify-center z-10"
          >
            {/* Elegant glowing background waves behind portrait */}
            <HeroGoldSweeps />

            {/* Premium Framed Portrait */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#111111]/80 backdrop-blur-md border border-[#C9A14A]/20 shadow-2xl group">
               {/* Soft golden inner glow overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#C9A14A]/15 to-transparent opacity-60 group-hover:opacity-20 transition-all duration-700 z-10 pointer-events-none" />
               <motion.img 
                 style={{ y: yBg }}
                 src={ahanaImage} 
                 alt="Ahana Aura" 
                 className="w-full h-[115%] object-cover object-top opacity-90 group-hover:scale-105 transition-all duration-[1.5s]" 
               />
               {/* Elegant Frame Outline */}
               <div className="absolute inset-4 border border-[#C9A14A]/25 rounded-[1.8rem] z-20 pointer-events-none group-hover:inset-3 transition-all duration-700" />
            </div>
          </motion.div>

        </div>
      </section>

      <CurvedDivider />

      {/* ══════════════════════════════════════
          2️⃣ POSITIONING & STRATEGY SECTION
      ══════════════════════════════════════ */}
      <section className="relative w-full py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
           <motion.div
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.2 }}
             variants={staggerContainer}
             className="flex flex-col items-center text-center"
           >
             <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[54px] font-serif text-white font-light tracking-tight leading-tight mb-12">
               Strategic <span className="text-[#E0BC74] font-medium">Product</span> & Business Systems Advisory
             </motion.h2>

             {/* Bullet Points with fine gold dots */}
             <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
               {[
                 "Product Vision", 
                 "Business Architecture", 
                 "Market-Fit Strategy", 
                 "Growth Execution"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm tracking-[0.25em] uppercase text-[#D5D5D5] font-light">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] shadow-[0_0_8px_rgba(201,161,74,0.8)]" />
                   {item}
                 </div>
               ))}
             </motion.div>

             {/* Quote Statement */}
             <motion.div variants={fadeUp} className="max-w-4xl border-l-2 md:border-l-0 md:border-y border-[#C9A14A]/30 py-8 px-8 md:px-16">
               <p className="text-xl md:text-3xl text-[#E5E5E5] font-serif font-light leading-relaxed">
                 My focus is not just technology — <span className="text-[#E0BC74] italic font-normal">It is building the right business structures, workflows, products, and scalable ecosystems that create sustainable growth.</span>
               </p>
             </motion.div>
           </motion.div>

        </div>
      </section>

      <CurvedDivider />

      {/* ══════════════════════════════════════
          3️⃣ CORE STRATEGIC EXPERTISE (Glassmorphic Glow Grid)
      ══════════════════════════════════════ */}
      <section className="relative w-full py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <motion.div
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.15 }}
             variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-serif text-white font-light tracking-tight mb-4">Core Strategic Expertise</h2>
              <span className="text-[#C9A14A] text-xs tracking-[0.35em] uppercase font-semibold">Selected Strategic Work & Solutions</span>
            </motion.div>

            {/* Glassmorphic 3x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  code: "PF",
                  title: "Product & Service Architecture",
                  desc: "Designing scalable products and service ecosystems aligned with market demand and operational viability."
                },
                {
                  code: "SV",
                  title: "Startup Validation & Growth Advisory",
                  desc: "Helping founders validate ideas, identify opportunities, refine positioning, and establish scalable business models."
                },
                {
                  code: "BS",
                  title: "Business Systems & Workflow Design",
                  desc: "Creating operational workflows, marketing systems, sales structures, and functional business processes."
                },
                {
                  code: "MF",
                  title: "Market-Fit & Solution Optimization",
                  desc: "Transforming concepts into market-ready solutions through strategic refinement and ecosystem thinking."
                },
                {
                  code: "DP",
                  title: "Strategic Decision Partnership",
                  desc: "Supporting leadership teams in making scalable, data-driven, and business-focused growth decisions."
                },
                {
                  code: "GP",
                  title: "Strategic Growth Partnership",
                  desc: "Designing scalable demand architectures, multi-location API reach, and sustainable client retention models."
                }
              ].map((item, idx) => (
                <motion.div 
                  variants={fadeUp} 
                  key={idx} 
                  className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#141414]/90 to-[#0A0A0A]/95 backdrop-blur-xl border border-[#C9A14A]/20 p-10 hover:border-[#E0BC74]/60 hover:-translate-y-1 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)]"
                >
                  {/* Subtle internal glowing backdrop reflection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C9A14A]/0 via-[#C9A14A]/[0.02] to-[#C9A14A]/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[100%] rounded-full bg-[#C9A14A]/5 blur-[60px] pointer-events-none" />

                  <div className="flex gap-6 items-start">
                    {/* Badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#C9A14A]/30 bg-black/60 flex items-center justify-center text-xs tracking-wider text-[#E0BC74] font-semibold font-mono shadow-[0_0_15px_rgba(201,161,74,0.15)] group-hover:border-[#E0BC74] group-hover:shadow-[0_0_20px_rgba(224,188,116,0.3)] transition-all duration-500">
                      {item.code}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-4 leading-snug group-hover:text-[#E0BC74] transition-colors duration-300">{item.title}</h3>
                      <p className="text-[#A5A5A5] text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <CurvedDivider />

      {/* ══════════════════════════════════════
          4️⃣ FROM VISION TO SCALABLE EXECUTION (Timeline steps)
      ══════════════════════════════════════ */}
      <section className="relative w-full py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <motion.div
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.15 }}
             variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="text-center mb-32">
              <h2 className="text-4xl md:text-6xl font-serif text-white font-light tracking-tight">From Vision to Scalable Execution</h2>
            </motion.div>

            {/* Horizontal Timeline */}
            <div className="relative">
              
              {/* Arrow Connecting Lines */}
              <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#C9A14A]/20 via-[#E0BC74]/40 to-[#C9A14A]/20"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {[
                  { step: "1", title: "Analyze", desc: "Business Structure, Market Opportunity, Operational gaps" },
                  { step: "2", title: "Architect", desc: "Design scalable products, Services, Systems, and Growth workflows" },
                  { step: "3", title: "Validate", desc: "Refine Through Market-Fit, Operational Feasibility and Positioning" },
                  { step: "4", title: "Scale", desc: "Enable structured execution, Automation, Optimization, and growth" }
                ].map((item, idx) => (
                  <motion.div variants={fadeUp} key={idx} className="flex flex-col items-center text-center group relative">
                    
                    {/* Circle Number Badge */}
                    <div className="relative z-10 w-14 h-14 rounded-full border border-[#C9A14A]/40 bg-black flex items-center justify-center text-lg font-serif text-[#E0BC74] mb-8 shadow-[0_0_20px_rgba(201,161,74,0.15)] group-hover:border-[#E0BC74] group-hover:shadow-[0_0_25px_rgba(224,188,116,0.35)] transition-all duration-500">
                      {item.step}
                    </div>

                    {/* Step Card with bottom gold border glow */}
                    <div className="w-full bg-[#111111]/75 border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden group-hover:border-[#C9A14A]/30 transition-all duration-500 flex-grow min-h-[180px] flex flex-col justify-center">
                      <h4 className="text-xl font-semibold text-white mb-3 tracking-wide">{item.title}</h4>
                      <p className="text-[#A5A5A5] text-sm font-light leading-relaxed">{item.desc}</p>
                      
                      {/* BOTTOM GLOW UNDERLINE */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A14A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CurvedDivider />

      {/* ══════════════════════════════════════
          5️⃣ LET'S BUILD SOMETHING (Rich CTA)
      ══════════════════════════════════════ */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center text-center bg-gradient-to-b from-transparent to-[#070707] overflow-hidden z-10">
        
        {/* Deep ambient backdrop lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-gradient-to-r from-[#C9A14A]/5 to-[#E0BC74]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-4xl px-6 flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-white font-light tracking-tight leading-tight mb-8">
            Let's Build <span className="text-[#E0BC74] font-medium drop-shadow-[0_0_15px_rgba(224,188,116,0.15)]">Something</span> That Actually Scales
          </motion.h2>

          {/* Underline separator */}
          <motion.div variants={fadeUp} className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A14A] to-transparent mb-12"></motion.div>
          
          <motion.p variants={fadeUp} className="text-[#B5B5B5] text-lg md:text-xl font-light mb-16 max-w-2xl leading-relaxed">
            Whether you are validating an idea, optimizing operations, building a scalable product, or restructuring growth systems — the focus is always the same:<br/>
            <span className="inline-block mt-4 text-[#E0BC74] font-medium uppercase tracking-wider text-sm">Build the right solution for the right market with the right structure.</span>
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-bold tracking-[0.2em] uppercase text-xs overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(201,161,74,0.6)] duration-300">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Book Advisory Session <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
