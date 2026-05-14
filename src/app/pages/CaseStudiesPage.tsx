import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const staticCaseStudies = [
  {
    company: "FinTech Startup",
    industry: "Financial Services",
    challenge: "Low customer acquisition and high CAC",
    solution: "Implemented AI-powered lead scoring and personalized onboarding flows to identify and convert high-value customers",
    results: [
      { metric: "250%", label: "Revenue Growth" },
      { metric: "65%", label: "Lower CAC" },
      { metric: "8K+", label: "New Customers" },
    ],
    impact: "Transformed from struggling startup to market leader with predictable, scalable growth.",
    timeline: "4 months"
  },
  {
    company: "E-commerce Platform",
    industry: "Retail & Commerce",
    challenge: "Inefficient inventory management and high operational costs",
    solution: "Deployed AI-driven demand forecasting and automated fulfillment workflows to optimize stock levels and reduce waste",
    results: [
      { metric: "60%", label: "Cost Reduction" },
      { metric: "45%", label: "Faster Fulfillment" },
      { metric: "₹2Cr", label: "Annual Savings" },
    ],
    impact: "Achieved operational excellence with leaner inventory and happier customers.",
    timeline: "5 months"
  },
  {
    company: "Healthcare SaaS",
    industry: "Healthcare Technology",
    challenge: "Product-market fit issues and stagnant user growth",
    solution: "Redesigned product strategy with AI-enhanced features and streamlined UX based on user behavior analytics",
    results: [
      { metric: "10K+", label: "New Users" },
      { metric: "3.5x", label: "User Engagement" },
      { metric: "85%", label: "Retention Rate" },
    ],
    impact: "Pivoted to product-led growth with strong retention and expansion metrics.",
    timeline: "6 months"
  }
];

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        const { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          const formattedData = data.map(study => ({
            company: study.title,
            industry: study.category,
            challenge: study.challenge,
            solution: study.solution,
            impact: study.impact,
            timeline: study.duration,
            results: [
              { metric: study.result1_value, label: study.result1_label },
              { metric: study.result2_value, label: study.result2_label },
              { metric: study.result3_value, label: study.result3_label }
            ].filter(r => r.metric)
          }));
          setCaseStudies(formattedData);
        } else {
          setCaseStudies(staticCaseStudies);
        }
      } catch (err) {
        console.error("Error fetching case studies:", err);
        setCaseStudies(staticCaseStudies);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCaseStudies();
  }, []);

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
              <span className="text-[#C9A14A] text-sm font-medium">Proven Results</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Success <span className="text-[#C9A14A]">Stories</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Real transformations, measurable impact. See how I've helped businesses across industries achieve breakthrough results with AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl overflow-hidden hover:border-[#C9A14A]/50 transition-all duration-300"
              >
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Company Info & Challenge */}
                    <div className="lg:col-span-1">
                      <div className="inline-block px-3 py-1 bg-[#C9A14A]/10 border border-[#C9A14A]/30 rounded-full text-[#C9A14A] text-sm mb-4">
                        {study.industry}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{study.company}</h3>
                      
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-500 mb-2">THE CHALLENGE</div>
                        <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={16} className="mr-2 text-[#C9A14A]" />
                        {study.timeline}
                      </div>
                    </div>

                    {/* Middle: Solution & Impact */}
                    <div className="lg:col-span-1">
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-500 mb-2">THE SOLUTION</div>
                        <p className="text-gray-400 leading-relaxed">{study.solution}</p>
                      </div>

                      <div className="p-6 bg-black/20 border border-[#C9A14A]/20 rounded-2xl">
                        <div className="text-sm font-semibold text-[#C9A14A] mb-2">IMPACT</div>
                        <p className="text-white font-medium">{study.impact}</p>
                      </div>
                    </div>

                    {/* Right: Results Metrics */}
                    <div className="lg:col-span-1">
                      <div className="text-sm font-semibold text-gray-500 mb-4">KEY RESULTS</div>
                      <div className="space-y-4">
                        {study.results.map((result, i) => (
                          <div
                            key={i}
                            className="p-4 bg-black/30 border border-gray-800/50 rounded-xl hover:border-[#C9A14A]/30 transition-colors"
                          >
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#D4B872] mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-400">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-800/50">
                    <button className="flex items-center text-[#C9A14A] font-semibold group-hover:translate-x-2 transition-transform">
                      <span>View Full Case Study</span>
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/0 via-[#C9A14A]/10 to-[#C9A14A]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Aggregate <span className="text-[#C9A14A]">Impact</span>
            </h2>
            <p className="text-xl text-gray-400">
              Combined results across all client engagements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, value: "₹3Cr+", label: "Total Revenue Generated" },
              { icon: TrendingUp, value: "250%", label: "Average Growth Rate" },
              { icon: Users, value: "19K+", label: "Users Impacted" },
              { icon: Clock, value: "45 Days", label: "Average Implementation" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-[#C9A14A]/50 transition-all duration-300 text-center"
              >
                <stat.icon className="text-[#C9A14A] mb-4 mx-auto group-hover:scale-110 transition-transform" size={40} />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>

                <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/0 via-[#C9A14A]/10 to-[#C9A14A]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your <span className="text-[#C9A14A]">Success Story</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's create measurable impact for your business with AI-powered transformation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Transformation
              <ArrowRight className="ml-2" size={24} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
