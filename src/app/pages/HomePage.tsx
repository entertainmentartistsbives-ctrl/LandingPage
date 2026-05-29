import { Link } from "react-router";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Users, 
  Award,
  Sparkles,
  Brain,
  Rocket,
  BarChart3
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import portrait from "../assets/Ahana.jpeg";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="relative text-gray-200 min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Abstract glowing shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C9A14A]/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4B872]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A14A]/10 border border-[#C9A14A]/20 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#C9A14A] animate-pulse" />
                <span className="text-[#E5C05C] text-xs font-semibold uppercase tracking-widest">AI & Business Transformation</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
                Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] via-[#FFD770] to-[#FFF0B3] drop-shadow-lg">Smarter</span>,<br/> Scalable Business
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light leading-relaxed max-w-lg">
                Helping companies scale revenue and automate operations using intelligent systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  to="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(201,161,74,0.4)] duration-300 inline-flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    Book Advisory Call
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/case-studies"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-[#C9A14A]/50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative rounded-[2rem] overflow-hidden max-w-lg w-full group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <ImageWithFallback
                  src={portrait}
                  alt="Ahana Aura - CEO"
                  className="w-full h-auto object-cover aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                {/* Premium frame border */}
                <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-20 pointer-events-none" />
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#C9A14A]/30 to-transparent blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Strip */}
      <section className="py-16 relative z-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, label: "Revenue Built", value: "₹3Cr+" },
              { icon: Zap, label: "Efficiency Boost", value: "40%" },
              { icon: Award, label: "Experience", value: "14+ Years" },
              { icon: Users, label: "Users Impacted", value: "19K+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/5 transition-colors duration-500"
              >
                <stat.icon className="text-[#C9A14A] mb-5 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-sm font-semibold tracking-widest text-[#C9A14A] uppercase mb-4">Core Offerings</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] to-[#FFF0B3]">Services</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive solutions to transform your business with AI and intelligent automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Automation Systems",
                description: "Build intelligent systems that automate repetitive tasks and enhance decision-making capabilities.",
                image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc3NzUzMjQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Sparkles,
                title: "Business Transformation",
                description: "Strategic guidance to modernize operations, optimize processes, and accelerate growth.",
                image: "https://images.unsplash.com/photo-1590103514226-48facf4657fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYW5zZm9ybWF0aW9uJTIwY29uc3VsdGluZ3xlbnwxfHx8fDE3Nzc1MzI0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Rocket,
                title: "SaaS Platform Development",
                description: "Design and build scalable software platforms that deliver value to your customers.",
                image: "https://images.unsplash.com/photo-1632835221568-8f6e715f7c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYWFTJTIwcGxhdGZvcm0lMjBkZXZlbG9wbWVudCUyMHRlYW18ZW58MXx8fHwxNzc3NTMyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-10 hover:border-[#C9A14A]/40 transition-all duration-500 overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/5 flex items-center justify-center mb-8 border border-[#C9A14A]/20 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="text-[#C9A14A]" size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-32 relative z-10 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-sm font-semibold tracking-widest text-[#C9A14A] uppercase mb-4">Results</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
              Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] to-[#FFF0B3]">Impact</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Real results that drive business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { metric: "3.5x", label: "Average Revenue Growth", description: "Clients see significant revenue increases within 12 months" },
              { metric: "60%", label: "Cost Reduction", description: "Through intelligent automation and process optimization" },
              { metric: "45 Days", label: "Average Implementation", description: "Fast deployment with measurable results" },
              { metric: "98%", label: "Client Satisfaction", description: "Consistently exceeding expectations and delivering value" },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-10 hover:border-[#C9A14A]/30 hover:bg-white/[0.04] transition-all duration-500 group"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] to-[#FFF0B3] drop-shadow-md">
                    {item.metric}
                  </div>
                  <div className="flex-1 mt-2 sm:mt-0">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.label}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-sm font-semibold tracking-widest text-[#C9A14A] uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] to-[#FFF0B3]">Stories</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                company: "FinTech Startup",
                result: "+250% Revenue Growth",
                description: "AI-powered customer acquisition system",
                metric: "250%"
              },
              {
                company: "E-commerce Platform",
                result: "60% Cost Reduction",
                description: "Automated inventory and fulfillment",
                metric: "60%"
              },
              {
                company: "Healthcare SaaS",
                result: "10K+ New Users",
                description: "Product transformation and scaling",
                metric: "10K+"
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-10 hover:border-[#C9A14A]/40 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer flex flex-col justify-between h-full"
              >
                <div className="mb-8">
                  <div className="inline-block px-4 py-1.5 bg-[#C9A14A]/10 border border-[#C9A14A]/20 rounded-full text-[#E5C05C] text-xs font-semibold uppercase tracking-wider mb-6">
                    {study.company}
                  </div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] to-[#FFF0B3] mb-4">
                    {study.metric}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{study.result}</h3>
                  <p className="text-gray-400 font-light">{study.description}</p>
                </div>
                
                <div className="flex items-center text-[#C9A14A] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Read Case Study</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-[#C9A14A]/50 transition-all duration-300"
            >
              View All Case Studies
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 relative z-10 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative rounded-[2rem] overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753751375630-73dbb5c62306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHdvcmtzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNzc3NTMyNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace"
                  className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 aspect-square"
                />
                <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-20 pointer-events-none" />
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/20 to-[#D4B872]/10 blur-3xl -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-sm font-semibold tracking-widest text-[#C9A14A] uppercase mb-4">The Architect</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-white">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] to-[#FFF0B3]">Ahana Aura</span>
              </h3>
              <p className="text-xl text-gray-400 mb-6 font-light leading-relaxed">
                With over 14 years of experience in AI and business transformation, I've helped companies across industries achieve remarkable growth through intelligent automation and strategic innovation.
              </p>
              <p className="text-lg text-gray-500 mb-10 font-light leading-relaxed">
                My approach combines cutting-edge technology with proven business strategies to deliver measurable results. From startups to established enterprises, I partner with visionary leaders to build smarter, more scalable businesses.
              </p>
              <Link
                to="/about"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(201,161,74,0.3)] duration-300"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Learn More About Me
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="relative bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 md:p-20 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#C9A14A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <BarChart3 className="text-[#C9A14A] mx-auto mb-8" size={48} strokeWidth={1.5} />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C05C] to-[#FFF0B3]">Transform</span> <br className="hidden md:block"/> Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Let's discuss how AI and intelligent automation can accelerate your growth and streamline your operations.
              </p>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black text-lg font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(201,161,74,0.4)] duration-300"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Book Your Strategy Call
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
