import { Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-r from-[hsl(120,35%,30%)] to-[hsl(100,40%,45%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Agro Supply Summit" className="h-16 md:h-20" />
            <p className="text-sm text-white/70 mt-2">
              O maior evento da cadeia de suprimentos do agro
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/agrosupplysummit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/5565999766669"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/70">
            © 2026 Agro Supply Summit. Todos os direitos reservados. • Cuiabá - MT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
