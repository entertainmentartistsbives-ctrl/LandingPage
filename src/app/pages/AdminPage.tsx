import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "../lib/supabase";
import { LayoutDashboard, PlusCircle, List, LogOut, Save, Image as ImageIcon, Type, FileText, Tag, Clock as ClockIcon, Calendar as CalendarIcon, Lock, ShieldCheck, Briefcase, TrendingUp, Loader2 } from "lucide-react";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "ahanaauraadmin"; 

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<'insights' | 'case-studies'>('insights');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  // Insights Form State
  const [insightData, setInsightData] = useState({
    title: "",
    excerpt: "",
    category: "",
    read_time: "",
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    image: "",
    content: ""
  });

  // Case Studies Form State
  const [caseStudyData, setCaseStudyData] = useState({
    title: "",
    category: "",
    challenge: "",
    solution: "",
    impact: "",
    duration: "",
    result1_value: "",
    result1_label: "",
    result2_value: "",
    result2_label: "",
    result3_value: "",
    result3_label: "",
    image: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
    } else {
      alert("Incorrect Password");
    }
  };

  useEffect(() => {
    if (localStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
  };

  const handleInsightSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const { error } = await supabase.from('insights').insert([insightData]);
      if (error) throw error;
      setStatus({ type: 'success', message: 'Insight published successfully!' });
      setInsightData({ title: "", excerpt: "", category: "", read_time: "", date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), image: "", content: "" });
    } catch (err: any) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaseStudySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const { error } = await supabase.from('case_studies').insert([caseStudyData]);
      if (error) throw error;
      setStatus({ type: 'success', message: 'Case Study published successfully!' });
      setCaseStudyData({ title: "", category: "", challenge: "", solution: "", impact: "", duration: "", result1_value: "", result1_label: "", result2_value: "", result2_label: "", result3_value: "", result3_label: "", image: "" });
    } catch (err: any) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 border border-gray-800 p-10 rounded-3xl w-full max-w-md backdrop-blur-xl">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-[#C9A14A]/20 rounded-2xl flex items-center justify-center">
              <Lock className="text-[#C9A14A]" size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-2">Admin Login</h2>
          <p className="text-gray-500 text-center mb-8 text-sm">Please enter your password to continue</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white focus:outline-none focus:border-[#C9A14A] transition-all"
              placeholder="Enter Password"
            />
            <button type="submit" className="w-full py-4 bg-[#C9A14A] text-black font-bold rounded-2xl hover:bg-[#D4B872] transition-all shadow-lg shadow-[#C9A14A]/20">
              Access Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="text-[#C9A14A]" size={36} />
              Admin <span className="text-[#C9A14A]">Dashboard</span>
            </h1>
            <button onClick={handleLogout} className="text-gray-500 hover:text-red-400 flex items-center gap-2 mt-2 transition-colors text-sm font-medium">
              <LogOut size={16} /> Logout Securely
            </button>
          </div>
          
          <div className="flex bg-white/5 backdrop-blur-sm p-1 rounded-2xl border border-gray-800">
            <button 
              onClick={() => setActiveTab('insights')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'insights' ? 'bg-[#C9A14A] text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <FileText size={20} />
              Insights
            </button>
            <button 
              onClick={() => setActiveTab('case-studies')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'case-studies' ? 'bg-[#C9A14A] text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <Briefcase size={20} />
              Case Studies
            </button>
          </div>
        </div>

        {status && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`mb-8 p-4 rounded-2xl ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
            {status.message}
          </motion.div>
        )}

        {activeTab === 'insights' ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-gray-800/50 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleInsightSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="text-white font-semibold mb-3 block">Article Title</label>
                  <input required value={insightData.title} onChange={e => setInsightData({...insightData, title: e.target.value})} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" placeholder="The Future of AI..." />
                </div>
                <div className="md:col-span-2">
                  <label className="text-white font-semibold mb-3 block">Short Excerpt</label>
                  <textarea required value={insightData.excerpt} onChange={e => setInsightData({...insightData, excerpt: e.target.value})} rows={2} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div>
                  <label className="text-white font-semibold mb-3 block">Category</label>
                  <input required value={insightData.category} onChange={e => setInsightData({...insightData, category: e.target.value})} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div>
                  <label className="text-white font-semibold mb-3 block">Read Time</label>
                  <input required value={insightData.read_time} onChange={e => setInsightData({...insightData, read_time: e.target.value})} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-white font-semibold mb-3 block">Image URL</label>
                  <input required value={insightData.image} onChange={e => setInsightData({...insightData, image: e.target.value})} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-white font-semibold mb-3 block">Full Content</label>
                  <textarea required value={insightData.content} onChange={e => setInsightData({...insightData, content: e.target.value})} rows={10} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="flex items-center gap-3 px-12 py-5 bg-[#C9A14A] text-black font-bold rounded-full ml-auto">
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Save />} Publish Insight
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-gray-800/50 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleCaseStudySubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-white font-semibold mb-3 block">Client Name</label>
                  <input required value={caseStudyData.title} onChange={e => setCaseStudyData({...caseStudyData, title: e.target.value})} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div>
                  <label className="text-white font-semibold mb-3 block">Category</label>
                  <input required value={caseStudyData.category} onChange={e => setCaseStudyData({...caseStudyData, category: e.target.value})} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-white font-semibold mb-3 block">The Challenge</label>
                  <textarea required value={caseStudyData.challenge} onChange={e => setCaseStudyData({...caseStudyData, challenge: e.target.value})} rows={2} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-white font-semibold mb-3 block">The Solution</label>
                  <textarea required value={caseStudyData.solution} onChange={e => setCaseStudyData({...caseStudyData, solution: e.target.value})} rows={2} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-white font-semibold mb-3 block">The Impact</label>
                  <textarea required value={caseStudyData.impact} onChange={e => setCaseStudyData({...caseStudyData, impact: e.target.value})} rows={2} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div>
                  <label className="text-white font-semibold mb-3 block">Duration</label>
                  <input required value={caseStudyData.duration} onChange={e => setCaseStudyData({...caseStudyData, duration: e.target.value})} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                <div>
                  <label className="text-white font-semibold mb-3 block">Background Image URL</label>
                  <input required value={caseStudyData.image} onChange={e => setCaseStudyData({...caseStudyData, image: e.target.value})} className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white" />
                </div>
                
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white/5 rounded-3xl">
                  <div>
                    <label className="text-[#C9A14A] text-xs font-bold block mb-2 uppercase tracking-widest">Result 1 (e.g. 250%)</label>
                    <input required value={caseStudyData.result1_value} onChange={e => setCaseStudyData({...caseStudyData, result1_value: e.target.value})} className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white" />
                    <input required placeholder="Label (e.g. Revenue Growth)" value={caseStudyData.result1_label} onChange={e => setCaseStudyData({...caseStudyData, result1_label: e.target.value})} className="w-full px-4 py-2 bg-transparent text-xs text-gray-500" />
                  </div>
                  <div>
                    <label className="text-[#C9A14A] text-xs font-bold block mb-2 uppercase tracking-widest">Result 2 (e.g. 65%)</label>
                    <input required value={caseStudyData.result2_value} onChange={e => setCaseStudyData({...caseStudyData, result2_value: e.target.value})} className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white" />
                    <input required placeholder="Label (e.g. Lower CAC)" value={caseStudyData.result2_label} onChange={e => setCaseStudyData({...caseStudyData, result2_label: e.target.value})} className="w-full px-4 py-2 bg-transparent text-xs text-gray-500" />
                  </div>
                  <div>
                    <label className="text-[#C9A14A] text-xs font-bold block mb-2 uppercase tracking-widest">Result 3 (e.g. 8K+)</label>
                    <input required value={caseStudyData.result3_value} onChange={e => setCaseStudyData({...caseStudyData, result3_value: e.target.value})} className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white" />
                    <input required placeholder="Label (e.g. New Customers)" value={caseStudyData.result3_label} onChange={e => setCaseStudyData({...caseStudyData, result3_label: e.target.value})} className="w-full px-4 py-2 bg-transparent text-xs text-gray-500" />
                  </div>
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="flex items-center gap-3 px-12 py-5 bg-[#C9A14A] text-black font-bold rounded-full ml-auto">
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Save />} Publish Case Study
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
