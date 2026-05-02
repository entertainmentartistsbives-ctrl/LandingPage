import { motion } from "motion/react";
import { Link } from "react-router";
import { 
  Search, 
  Compass, 
  Code, 
  TrendingUp, 
  Check,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ServicesPage() {
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-[#C9A14A]/10 border border-[#C9A14A]/30 rounded-full mb-6">
              <span className="text-[#C9A14A] text-sm font-medium">Premium Advisory Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI Transformation <span className="text-[#C9A14A]">Program</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              A comprehensive approach to scaling your business with intelligent automation and strategic innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-[#C9A14A]">Transformation</span> Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven 4-step methodology to deliver measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Lines (desktop only) */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A14A]/30 to-transparent" />

            {[
              {
                icon: Search,
                step: "01",
                title: "Analyze",
                description: "Deep dive into your business processes, identify bottlenecks, and uncover opportunities for AI integration.",
                deliverables: ["Business audit", "Opportunity mapping", "ROI projections"]
              },
              {
                icon: Compass,
                step: "02",
                title: "Design",
                description: "Create a customized transformation roadmap aligned with your business goals and technical capabilities.",
                deliverables: ["Strategic roadmap", "System architecture", "Implementation plan"]
              },
              {
                icon: Code,
                step: "03",
                title: "Build",
                description: "Develop and deploy AI-powered solutions with rapid prototyping and iterative refinement.",
                deliverables: ["AI systems", "Automation workflows", "Integration testing"]
              },
              {
                icon: TrendingUp,
                step: "04",
                title: "Scale",
                description: "Optimize performance, train your team, and establish processes for continuous improvement.",
                deliverables: ["Team training", "Performance optimization", "Growth metrics"]
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-[#C9A14A]/50 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#D4B872] flex items-center justify-center text-black font-bold shadow-lg shadow-[#C9A14A]/30">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="text-[#C9A14A]" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{step.description}</p>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-[#C9A14A] mb-2">Deliverables:</div>
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500">
                        <Check size={16} className="text-[#C9A14A] mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/0 via-[#C9A14A]/10 to-[#C9A14A]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="text-[#C9A14A]">Offer</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Automation Systems",
                tagline: "Intelligent efficiency at scale",
                features: [
                  "Custom AI model development",
                  "Process automation workflows",
                  "Predictive analytics implementation",
                  "Natural language processing",
                  "Computer vision solutions",
                  "Decision support systems"
                ]
              },
              {
                title: "Business Transformation",
                tagline: "Strategic evolution for growth",
                features: [
                  "Digital strategy consulting",
                  "Operations optimization",
                  "Change management",
                  "Technology stack modernization",
                  "Data infrastructure setup",
                  "Performance measurement frameworks"
                ]
              },
              {
                title: "SaaS Platform Development",
                tagline: "Build products people love",
                features: [
                  "Product strategy & roadmap",
                  "Full-stack development",
                  "Cloud architecture design",
                  "API & integration development",
                  "User experience optimization",
                  "Scalability & security"
                ]
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-[#C9A14A]/50 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[#C9A14A] font-medium">{service.tagline}</p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check size={20} className="text-[#C9A14A] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800/50">
                  <Link
                    to="/contact"
                    className="flex items-center text-[#C9A14A] font-semibold group-hover:translate-x-2 transition-transform"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>

                {/* Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/0 via-[#C9A14A]/10 to-[#C9A14A]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Investment <span className="text-[#C9A14A]">Options</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible engagement models designed for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Strategy Session",
                price: "₹50K",
                period: "one-time",
                description: "Perfect for businesses exploring AI opportunities",
                features: [
                  "2-hour consultation",
                  "Business audit & analysis",
                  "Opportunity identification",
                  "Custom roadmap",
                  "Priority recommendations",
                  "30-day email support"
                ],
                cta: "Book Session"
              },
              {
                name: "Transformation Program",
                price: "₹5L+",
                period: "per project",
                description: "Comprehensive AI implementation and business transformation",
                features: [
                  "Full 4-step process",
                  "Custom AI solutions",
                  "Team training",
                  "3-6 month timeline",
                  "Ongoing optimization",
                  "Dedicated support",
                  "ROI guarantee"
                ],
                cta: "Get Started",
                featured: true
              },
              {
                name: "Retained Advisory",
                price: "Custom",
                period: "monthly",
                description: "Ongoing strategic guidance for sustained growth",
                features: [
                  "Monthly strategy sessions",
                  "Priority access",
                  "Continuous optimization",
                  "Performance monitoring",
                  "Team training sessions",
                  "Technology assessment",
                  "Executive reporting"
                ],
                cta: "Discuss Options"
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? "border-[#C9A14A] shadow-xl shadow-[#C9A14A]/20 scale-105"
                    : "border-gray-800/50 hover:border-[#C9A14A]/50"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black text-sm font-bold rounded-full flex items-center">
                      <Sparkles size={14} className="mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#C9A14A]">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/ {plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check size={20} className="text-[#C9A14A] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-full font-semibold text-center transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black hover:shadow-lg hover:shadow-[#C9A14A]/50 hover:-translate-y-1"
                      : "bg-white/5 text-white border border-gray-700 hover:bg-white/10 hover:border-[#C9A14A]/50"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <p className="text-gray-500">
              All engagements are customized to your specific needs. Pricing varies based on scope and complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-[#C9A14A]">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your business goals and create a transformation plan tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:-translate-y-1"
            >
              Book Strategy Call
              <ArrowRight className="ml-2" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
