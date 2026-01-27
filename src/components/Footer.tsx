import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-foreground">
              AGRO<span className="text-gradient">SUPPLY</span> SUMMIT
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              O maior evento da cadeia de suprimentos do agro
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/agrosupplysummit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/5565999766669"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Agro Supply Summit. Todos os direitos reservados. • Cuiabá - MT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
