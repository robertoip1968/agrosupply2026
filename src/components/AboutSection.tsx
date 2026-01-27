import eventNetworking from "@/assets/event-networking.jpg";
import eventAudience from "@/assets/event-audience.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-primary font-semibold tracking-wide uppercase">
              O Maior Encontro da Cadeia de Suprimentos Agrícola
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              O Agro Supply Summit <span className="text-gradient">2026</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Em 2026, o Agro Supply Summit chega com uma grande novidade: agora são <strong className="text-foreground">dois dias de evento</strong>, ampliando ainda mais o espaço para conexões, debates e trocas estratégicas.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              O encontro reúne os principais executivos e gestores da agroindústria para discutir <strong className="text-foreground">inovações, desafios, tendências e transformações</strong> da cadeia de suprimentos do agro — um setor cada vez mais estratégico, tecnológico e essencial para a competitividade do país.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Painéis estratégicos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-muted-foreground">Networking premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Conteúdo exclusivo</span>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={eventNetworking} 
                alt="Networking no Agro Supply Summit" 
                className="rounded-2xl shadow-card w-full h-64 object-cover"
              />
              <img 
                src={eventAudience} 
                alt="Plateia do Agro Supply Summit" 
                className="rounded-2xl shadow-card w-full h-64 object-cover mt-8"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-primary p-6 rounded-2xl shadow-glow text-center">
              <p className="text-3xl font-display font-bold text-primary-foreground">+230k</p>
              <p className="text-sm text-primary-foreground/80">impactos nas redes sociais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
