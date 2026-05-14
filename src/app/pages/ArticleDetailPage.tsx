import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { Calendar, Clock, ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ArticleDetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  useEffect(() => {
    async function fetchArticle() {
      try {
        const { data, error } = await supabase
          .from('insights')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article:", err);
      } finally {
        setIsLoading(false);
      }
    }

    if (id) fetchArticle();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <Loader2 className="w-10 h-10 text-[#C9A14A] animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/insights" className="text-[#C9A14A] font-semibold flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24">
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A14A]/5 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp}>
            <Link to="/insights" className="inline-flex items-center text-[#C9A14A] hover:translate-x-1 transition-transform mb-8 font-medium">
              <ArrowLeft size={18} className="mr-2" />
              Back to Insights
            </Link>
            
            <div className="inline-block px-3 py-1 bg-[#C9A14A]/10 border border-[#C9A14A]/30 rounded-full text-[#C9A14A] text-sm font-medium mb-6">
              {article.category}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 border-b border-gray-800 pb-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2 text-[#C9A14A]" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-[#C9A14A]" />
                {article.read_time}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden aspect-[21/9]"
        >
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6">
        <motion.article 
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-gold max-w-none"
        >
          <div className="text-xl text-gray-300 leading-relaxed font-medium mb-12 italic border-l-4 border-[#C9A14A] pl-6">
            {article.excerpt}
          </div>
          
          <div className="text-gray-400 text-lg leading-relaxed space-y-6 whitespace-pre-wrap">
            {article.content || "The full content of this article is coming soon. Stay tuned for deeper insights into AI and business transformation."}
          </div>
        </motion.article>

        {/* Author Box */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-12 border-t border-gray-800 flex items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#D4B872]" />
          <div>
            <div className="text-white font-bold text-lg">Ahana Aura</div>
            <div className="text-gray-500">AI & Business Transformation Advisor</div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
