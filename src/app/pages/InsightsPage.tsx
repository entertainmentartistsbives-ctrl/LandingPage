import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const staticInsights = [
  {
    id: "static-1",
    title: "The Future of AI in Business: What CEOs Need to Know in 2026",
    excerpt: "As AI continues to evolve at breakneck speed, business leaders must understand the strategic implications and opportunities that lie ahead.",
    category: "AI Strategy",
    read_time: "8 min read",
    date: "Apr 15, 2026",
    image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGZ1dHVyZSUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc3NzUzMjc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "static-2",
    title: "From Manual to Automated: A Blueprint for Business Transformation",
    excerpt: "Learn the proven framework for identifying automation opportunities and implementing systems that deliver real ROI.",
    category: "Automation",
    read_time: "6 min read",
    date: "Apr 8, 2026",
    image: "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3Nzc1MzI3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "static-3",
    title: "Data-Driven Decision Making: Building Your Analytics Foundation",
    excerpt: "Why most companies fail at data analytics and how to build a foundation that actually drives business value.",
    category: "Data Analytics",
    read_time: "7 min read",
    date: "Mar 28, 2026",
    image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3NzUzMjc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "static-4",
    title: "The ROI of AI: Measuring What Matters in Transformation Projects",
    excerpt: "A comprehensive guide to setting KPIs, tracking progress, and demonstrating the business impact of AI initiatives.",
    category: "Business Impact",
    read_time: "9 min read",
    date: "Mar 18, 2026",
    image: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3NzUzMjc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "static-5",
    title: "Leadership in the AI Era: Skills CEOs Must Develop",
    excerpt: "The changing role of business leaders and the critical capabilities needed to thrive in an AI-powered world.",
    category: "Leadership",
    read_time: "5 min read",
    date: "Mar 5, 2026",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwYnVzaW5lc3MlMjBleGVjdXRpdmV8ZW58MXx8fHwxNzc3NTMyNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "static-6",
    title: "Building SaaS Products That Scale: Technical and Strategic Insights",
    excerpt: "Essential architecture decisions, growth strategies, and product development principles for sustainable SaaS success.",
    category: "SaaS Development",
    read_time: "10 min read",
    date: "Feb 22, 2026",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc3NzQ5NzkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

export default function InsightsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const [insights, setInsights] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInsights() {
      try {
        const { data, error } = await supabase
          .from('insights')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setInsights(data);
        } else {
          setInsights(staticInsights);
        }
      } catch (err) {
        console.error("Error fetching insights:", err);
        setInsights(staticInsights);
      } finally {
        setIsLoading(false);
      }
    }

    fetchInsights();
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
              <span className="text-[#C9A14A] text-sm font-medium">Thought Leadership</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Insights & <span className="text-[#C9A14A]">Perspectives</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Strategic insights on AI, business transformation, and building the future of work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {!isLoading && insights.length > 0 && (
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl overflow-hidden hover:border-[#C9A14A]/50 transition-all duration-300 group">
                <div className="relative h-[400px] lg:h-full overflow-hidden">
                  <ImageWithFallback
                    src={insights[0].image}
                    alt={insights[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-8 lg:p-12">
                  <div className="inline-block px-3 py-1 bg-[#C9A14A]/10 border border-[#C9A14A]/30 rounded-full text-[#C9A14A] text-sm mb-4">
                    Featured • {insights[0].category}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#C9A14A] transition-colors">
                    {insights[0].title}
                  </h2>

                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {insights[0].excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-[#C9A14A]" />
                      {insights[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-[#C9A14A]" />
                      {insights[0].read_time}
                    </div>
                  </div>

                  <Link 
                    to={`/insights/${insights[0].id}`}
                    className="flex items-center text-[#C9A14A] font-semibold group-hover:translate-x-2 transition-transform"
                  >
                    Read Article
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Insights Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Latest <span className="text-[#C9A14A]">Articles</span>
            </h2>
            <p className="text-gray-400">Explore more insights and perspectives</p>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-[#C9A14A] animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.slice(1).map((article, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl overflow-hidden hover:border-[#C9A14A]/50 transition-all duration-300 cursor-pointer"
                >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-[#C9A14A]/90 backdrop-blur-sm rounded-full text-black text-xs font-semibold">
                      {article.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#C9A14A] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1.5 text-[#C9A14A]" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1.5 text-[#C9A14A]" />
                      {article.read_time}
                    </div>
                  </div>

                  <div className="flex items-center text-[#C9A14A] text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    <Link to={`/insights/${article.id}`}>Read More</Link>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A14A]/0 via-[#C9A14A]/10 to-[#C9A14A]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Weekly <span className="text-[#C9A14A]">Insights</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join 5,000+ business leaders receiving strategic insights on AI, automation, and business transformation every week.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A]/20 transition-all"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap">
                  Subscribe
                </button>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                No spam. Unsubscribe anytime.
              </p>

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A14A]/10 via-transparent to-[#C9A14A]/10 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
