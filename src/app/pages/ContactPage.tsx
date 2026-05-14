import { motion } from "motion/react";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    problem: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", company: "", revenue: "", problem: "" });
      }, 5000);
    } catch (err: any) {
      console.error("Email send error:", err);
      setError("Something went wrong. Please try again or email us directly at advisor@ahanaaura.com");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              <span className="text-[#C9A14A] text-sm font-medium">Let's Connect</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Start Your <span className="text-[#C9A14A]">Transformation</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Schedule a strategy call to discuss how AI can transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeInUp} className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get in <span className="text-[#C9A14A]">Touch</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Ready to transform your business with AI? Fill out the form and I'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#C9A14A]" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Email</div>
                    <a href="mailto:advisor@ahanaaura.com" className="text-gray-400 hover:text-[#C9A14A] transition-colors">
                      advisor@ahanaaura.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#C9A14A]" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Phone</div>
                    <a href="tel:+917204468429" className="text-gray-400 hover:text-[#C9A14A] transition-colors">
                      +91 72044 68429
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#C9A14A]" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Location</div>
                    <p className="text-gray-400">
                      Bengaluru, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800/50">
                <p className="text-sm text-gray-500">
                  <strong className="text-white">Response Time:</strong> Typically within 24 hours
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 md:p-12">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A]/20 focus:shadow-lg focus:shadow-[#C9A14A]/10 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A]/20 focus:shadow-lg focus:shadow-[#C9A14A]/10 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-white font-semibold mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A]/20 focus:shadow-lg focus:shadow-[#C9A14A]/10 transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Revenue Range */}
                    <div>
                      <label htmlFor="revenue" className="block text-white font-semibold mb-2">
                        Annual Revenue Range *
                      </label>
                      <select
                        id="revenue"
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white focus:outline-none focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A]/20 focus:shadow-lg focus:shadow-[#C9A14A]/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0B0B0B]">Select range</option>
                        <option value="<1cr" className="bg-[#0B0B0B]">Less than ₹1 Cr</option>
                        <option value="1-5cr" className="bg-[#0B0B0B]">₹1-5 Cr</option>
                        <option value="5-10cr" className="bg-[#0B0B0B]">₹5-10 Cr</option>
                        <option value="10-25cr" className="bg-[#0B0B0B]">₹10-25 Cr</option>
                        <option value="25cr+" className="bg-[#0B0B0B]">₹25 Cr+</option>
                      </select>
                    </div>

                    {/* Business Problem */}
                    <div>
                      <label htmlFor="problem" className="block text-white font-semibold mb-2">
                        What business challenge can I help you solve? *
                      </label>
                      <textarea
                        id="problem"
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-6 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A]/20 focus:shadow-lg focus:shadow-[#C9A14A]/10 transition-all resize-none"
                        placeholder="Tell me about your current challenges and what you're hoping to achieve..."
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
                        <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full px-8 py-5 bg-gradient-to-r from-[#C9A14A] to-[#D4B872] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#C9A14A]/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Book Strategy Call</span>
                          <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to receive communications from Ahana Aura.
                    </p>
                  </form>
                ) : (
                  <div className="py-16 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    >
                      <CheckCircle className="text-[#C9A14A] mx-auto mb-6" size={64} />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Thank You!
                    </h3>
                    <p className="text-xl text-gray-400 mb-2">
                      Your message has been received.
                    </p>
                    <p className="text-gray-500">
                      I'll get back to you within 24 hours to schedule our strategy call.
                    </p>
                  </div>
                )}

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A14A]/10 via-transparent to-[#C9A14A]/10 blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info */}
      <section className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What to <span className="text-[#C9A14A]">Expect</span>
            </h2>
            <p className="text-gray-400">
              Here's what happens after you reach out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Initial Response",
                description: "I'll review your submission and respond within 24 hours to schedule our strategy call."
              },
              {
                step: "02",
                title: "Strategy Session",
                description: "We'll have a 30-60 minute call to discuss your business, challenges, and opportunities."
              },
              {
                step: "03",
                title: "Custom Proposal",
                description: "Based on our discussion, I'll create a tailored transformation plan and proposal."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#D4B872] flex items-center justify-center text-black font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
