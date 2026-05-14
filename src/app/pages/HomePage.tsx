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
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A14A]/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#C9A14A]/10 border border-[#C9A14A]/30 rounded-full mb-6">
                <span className="text-[#C9A14A] text-sm font-medium">AI & Business Transformation Advisor</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#D4B872]">Smarter</span>, Scalable Business with AI
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Helping companies scale revenue and automate operations using intelligent systems
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Book Advisory Call
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/case-studies"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-full hover:bg-white/10 hover:border-[#C9A14A]/50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden max-w-lg w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A14A]/20 to-transparent z-10" />
                <ImageWithFallback
                  src={portrait}
                  alt="Ahana Aura - CEO"
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-[#C9A14A]/20 object-cover aspect-[4/5]"
                />
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/20 to-[#D4B872]/20 blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Strip */}
      <section className="py-16 bg-black/20 border-y border-gray-800/50">
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
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-[#C9A14A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A]/10"
              >
                <stat.icon className="text-[#C9A14A] mb-4 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Premium <span className="text-[#C9A14A]">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions to transform your business with AI
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
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-[#C9A14A]/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="text-[#C9A14A]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  
                  {/* Glow on hover */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/0 via-[#C9A14A]/10 to-[#C9A14A]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Measurable <span className="text-[#C9A14A]">Impact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-[#C9A14A]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#D4B872]">
                    {item.metric}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/0 via-[#C9A14A]/10 to-[#C9A14A]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-[#C9A14A]">Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-[#C9A14A]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-[#C9A14A]/10 border border-[#C9A14A]/30 rounded-full text-[#C9A14A] text-sm mb-4">
                    {study.company}
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#D4B872] mb-2">
                    {study.metric}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{study.result}</h3>
                  <p className="text-gray-400">{study.description}</p>
                </div>
                
                <div className="flex items-center text-[#C9A14A] group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">Read Case Study</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>

                {/* Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/0 via-[#C9A14A]/10 to-[#C9A14A]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-full hover:bg-white/10 hover:border-[#C9A14A]/50 transition-all duration-300"
            >
              View All Case Studies
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753751375630-73dbb5c62306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHdvcmtzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNzc3NTMyNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace"
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-[#C9A14A]/20"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/20 to-[#D4B872]/20 blur-3xl -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="text-[#C9A14A]">Ahana Aura</span>
              </h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                With over 14 years of experience in AI and business transformation, I've helped companies across industries achieve remarkable growth through intelligent automation and strategic innovation.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                My approach combines cutting-edge technology with proven business strategies to deliver measurable results. From startups to established enterprises, I partner with visionary leaders to build smarter, more scalable businesses.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:-translate-y-1"
              >
                Learn More About Me
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl p-12 md:p-16">
              <BarChart3 className="text-[#C9A14A] mx-auto mb-6" size={48} />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-[#C9A14A]">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI and intelligent automation can accelerate your growth and streamline your operations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:-translate-y-1"
              >
                Book Your Strategy Call
                <ArrowRight className="ml-2" size={24} />
              </Link>
              
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A14A]/10 via-transparent to-[#C9A14A]/10 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
