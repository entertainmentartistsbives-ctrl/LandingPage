import { motion } from "motion/react";
import { Award, Target, Lightbulb, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import portrait from "../assets/Ahana.jpeg";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A14A]/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Ahana <span className="text-[#C9A14A]">Aura</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 mb-4">
              AI & Business Transformation Advisor
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-500">
              <span>CEO Advisor</span>
              <span>•</span>
              <span>Innovation Strategist</span>
              <span>•</span>
              <span>Technology Leader</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Image Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 flex justify-center">
          <motion.div {...fadeInUp} className="relative rounded-3xl overflow-hidden max-w-md w-full ring-1 ring-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A14A]/20 to-transparent z-10 pointer-events-none" />
            <ImageWithFallback
              src={portrait}
              alt="Ahana Aura - Professional Portrait"
              className="w-full h-auto aspect-[4/5] object-cover rounded-3xl shadow-2xl shadow-[#C9A14A]/30"
            />
            <div className="absolute -inset-8 bg-gradient-to-r from-[#C9A14A]/20 to-[#D4B872]/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Building the <span className="text-[#C9A14A]">Future</span> of Business
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              With over 14 years of experience at the intersection of artificial intelligence and business strategy, I've dedicated my career to helping organizations unlock their full potential through intelligent automation and transformative innovation.
            </p>
            <p>
              My journey began in the early days of machine learning, where I witnessed firsthand the power of data-driven decision-making. Since then, I've worked with startups scaling from zero to millions in revenue, and established enterprises seeking to modernize their operations and stay competitive in an AI-first world.
            </p>
            <p>
              Today, I partner with visionary CEOs and business leaders who understand that the future belongs to those who can harness the power of AI not just as a tool, but as a fundamental driver of growth, efficiency, and innovation.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "₹3Cr+", label: "Revenue Generated" },
              { number: "19K+", label: "Users Impacted" },
              { number: "50+", label: "Projects Delivered" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-2xl"
              >
                <div className="text-4xl font-bold text-[#C9A14A] mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-[#C9A14A]">Philosophy</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Purpose-Driven Innovation",
                description: "Technology should serve a clear business purpose, not exist for its own sake."
              },
              {
                icon: Award,
                title: "Excellence in Execution",
                description: "Strategy without flawless execution is just wishful thinking."
              },
              {
                icon: Lightbulb,
                title: "Continuous Learning",
                description: "The AI landscape evolves daily. Staying ahead requires constant adaptation."
              },
              {
                icon: TrendingUp,
                title: "Measurable Impact",
                description: "Every initiative must deliver quantifiable results and ROI."
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl hover:border-[#C9A14A]/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <principle.icon className="text-[#C9A14A]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-400 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-[#C9A14A]">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">Key milestones that shaped my approach</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#C9A14A] via-[#C9A14A]/50 to-transparent" />

            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "The Beginning",
                  description: "Started exploring machine learning and its business applications"
                },
                {
                  year: "2015",
                  title: "First Major Success",
                  description: "Helped a startup scale from 0 to ₹1Cr revenue using AI-powered customer insights"
                },
                {
                  year: "2019",
                  title: "Enterprise Transformation",
                  description: "Led digital transformation for Fortune 500 companies, impacting 10K+ employees"
                },
                {
                  year: "2024",
                  title: "AI Revolution",
                  description: "Pioneering generative AI strategies for next-generation business models"
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                    <div className="inline-block md:inline px-4 py-2 bg-[#C9A14A]/10 border border-[#C9A14A]/30 rounded-full text-[#C9A14A] font-bold mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#C9A14A] shadow-lg shadow-[#C9A14A]/50" />
                  </div>

                  <div className={index % 2 === 0 ? "md:col-start-2" : ""}>
                    {/* Empty space for alternating layout */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-[#C9A14A]">Extraordinary</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's start a conversation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
