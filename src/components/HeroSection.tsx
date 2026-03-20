import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Users } from "lucide-react";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/teleG4NgSjQ?autoplay=1&mute=1&loop=1&playlist=teleG4NgSjQ&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw] pointer-events-none"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Agro Supply Summit"
        />
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm tracking-wide">
            2ª EDIÇÃO • DOIS DIAS DE EVENTO
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">AGRO</span>
          <span className="text-gradient"> SUPPLY</span>
          <br />
          <span className="text-foreground">SUMMIT</span>
          <span className="text-accent"> 2026</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          O maior evento da cadeia de suprimentos da agroindústria do Brasil, no estado onde o agro acontece.
        </p>

        {/* Event Info Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-border">
            <CalendarDays className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Data</p>
              <p className="font-semibold text-foreground">02 e 03 de Junho, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-border">
            <MapPin className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Local</p>
              <p className="font-semibold text-foreground">Cenárium Rural - Cuiabá - MT</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-border">
            <Users className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Formato</p>
              <p className="font-semibold text-foreground">Dois Dias</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow transition-all duration-300 hover:scale-105">
            Garantir Minha Vaga
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 transition-all duration-300">
            Ser Patrocinador
          </Button>
        </div>

        {/* Keywords */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {['NETWORKING', 'INOVAÇÃO', 'DECISÃO', 'ESTRATÉGIA'].map((keyword) => (
            <span key={keyword} className="text-sm font-medium tracking-[0.3em] text-muted-foreground">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
