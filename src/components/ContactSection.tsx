import { Phone, Instagram, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase">
              Vamos Conversar
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Tarso Quadros
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+5565999712066" 
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-semibold text-foreground">(65) 9 9971-2066</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://instagram.com/agrosupplysummit" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Instagram</p>
                      <p className="font-semibold text-foreground">@agrosupplysummit</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Local do Evento</p>
                      <p className="font-semibold text-foreground">Cenárium Rural - Cuiabá - MT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <a 
                href="https://wa.me/5565999712066" 
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar via WhatsApp
                </Button>
              </a>
            </div>

            {/* Brand Display */}
            <div className="bg-background rounded-2xl p-8 border border-border flex flex-col items-center justify-center text-center">
              <div className="mb-6">
                <h3 className="font-display text-4xl font-bold text-foreground mb-2">
                  AGRO<span className="text-gradient">SUPPLY</span>
                </h3>
                <p className="font-display text-2xl font-bold text-foreground">SUMMIT</p>
              </div>
              
              <div className="w-24 h-1 bg-gradient-primary rounded-full mb-6" />
              
              <p className="text-muted-foreground mb-6">
                02 e 03 de Junho de 2026 • Cenárium Rural - Cuiabá - MT
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {['Networking', 'Inovação', 'Decisão'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
