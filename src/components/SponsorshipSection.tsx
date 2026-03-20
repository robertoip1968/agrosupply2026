import { Check, Star, Award, Crown, Gem } from "lucide-react";

const plans = [
  {
    name: "Bronze",
    price: "R$ 50.000",
    icon: Award,
    color: "from-amber-600 to-amber-800",
    features: [
      "Logomarca em comunicações oficiais",
      "Material no kit dos participantes",
      "10 convites VIP",
      "Visibilidade institucional básica"
    ]
  },
  {
    name: "Prata",
    price: "R$ 80.000",
    icon: Star,
    color: "from-slate-400 to-slate-600",
    features: [
      "Stand 3x3 em área de circulação",
      "20 convites VIP",
      "Vídeo institucional nas telas",
      "Participação em podcast",
      "Item no kit + logomarca"
    ]
  },
  {
    name: "Ouro",
    price: "R$ 130.000",
    icon: Crown,
    color: "from-yellow-400 to-yellow-600",
    popular: true,
    features: [
      "Stand 5x5 em área nobre",
      "35 convites VIP",
      "Participação ativa na programação",
      "Podcast, kit, vídeo + painel",
      "Logomarca em todos os pontos",
      "Visibilidade ampliada"
    ]
  },
  {
    name: "Diamante",
    price: "R$ 250.000",
    icon: Gem,
    color: "from-cyan-400 to-blue-600",
    features: [
      "Exclusividade de segmento",
      "Stand 8x8 em área nobre",
      "50 convites VIP",
      "Participação nos principais conteúdos",
      "Maior exposição e protagonismo"
    ]
  }
];

const SponsorshipSection = () => {
  return (
    <section id="patrocinio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase">
            Seja Patrocinador
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Opções de <span className="text-gradient">Investimento</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Todas as cotas contemplam Coffee, Almoço Temático e Happy Hour Open Bar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-card rounded-3xl p-6 border transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-primary shadow-glow' : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  MAIS POPULAR
                </span>
              )}
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                <plan.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-primary mb-6">
                {plan.price}
              </p>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/5565999712066" 
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${
                  plan.popular 
                    ? 'bg-gradient-primary text-primary-foreground hover:opacity-90' 
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}>
                Solicitar Proposta
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
