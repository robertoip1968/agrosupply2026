import { Users, Calendar, Newspaper } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2",
    label: "Dias de Evento",
    description: "Mais tempo para conexões"
  },
  {
    icon: Newspaper,
    value: "230k+",
    label: "Impactos",
    description: "Nas redes sociais"
  },
  {
    icon: Calendar,
    value: "2ª",
    label: "Edição",
    description: "Evento consolidado"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase">
            Presença confirmada
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Empresas e marcas que acreditam no <span className="text-gradient">Agro Supply Summit 2026</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-4xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-foreground font-semibold">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
