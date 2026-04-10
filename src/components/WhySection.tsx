import { Check, TrendingUp, Leaf, Cpu, Network, Award } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Evento Consolidado",
    description: "Hub de inteligência e relacionamento da cadeia de suprimentos no país"
  },
  {
    icon: TrendingUp,
    title: "Safra 25/26 Promissora",
    description: "Projeções positivas com crescimento de +8,5%"
  },
  {
    icon: Cpu,
    title: "Foco em Tecnologia",
    description: "O agro investindo mais em rastreabilidade e integração"
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Demanda crescente por eficiência e práticas sustentáveis"
  },
  {
    icon: Network,
    title: "Networking Estratégico",
    description: "Conexões com os principais líderes do setor"
  }
];

const WhySection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase">
              Oportunidade Única
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Por que sua marca não pode <span className="text-gradient">ficar de fora</span> em 2026
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div 
                key={reason.title}
                className="flex gap-4 p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center shadow-glow">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              O Agro Supply Summit 2026 será ainda maior, mais estratégico e mais conectado
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Aos movimentos do agro brasileiro. Garanta sua presença neste evento que está transformando a cadeia de suprimentos do país.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.sympla.com.br/evento/agro-supply-summit-2026/3377465" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-background/90 transition-colors">
                <Check className="w-5 h-5" />
                Quero Participar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
