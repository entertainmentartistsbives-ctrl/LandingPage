import { Link } from "react-router";
import { Linkedin, Facebook, Mail, Instagram } from "lucide-react";
import logo from "../assets/Ahana.jpeg";

export default function LuxuryFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Ahana Aura Logo" className="w-8 h-8 rounded-full object-cover border border-[#C9A14A]/30" />
              <div className="text-2xl font-bold">
                <span className="text-white">Ahana</span>
                <span className="text-[#C9A14A]"> Aura</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI & Business Transformation Advisor helping companies scale revenue and automate operations using intelligent systems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ahana-aura-109528271/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-[#C9A14A]/20 hover:text-[#C9A14A] transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100056046458184"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-[#C9A14A]/20 hover:text-[#C9A14A] transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/auraahana/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-[#C9A14A]/20 hover:text-[#C9A14A] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:advisor@ahanaaura.com"
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-[#C9A14A]/20 hover:text-[#C9A14A] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#C9A14A] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#C9A14A] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-[#C9A14A] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-400 hover:text-[#C9A14A] transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#C9A14A] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:advisor@ahanaaura.com" className="text-gray-400 hover:text-[#C9A14A] transition-colors">
                  advisor@ahanaaura.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/50 text-center text-gray-500">
          <p>&copy; {currentYear} Ahana Aura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
