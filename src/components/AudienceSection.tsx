import { Briefcase, Package, Truck, Cpu, ShoppingCart } from "lucide-react";

const audienceTypes = [
  {
    icon: Briefcase,
    title: "Empresários do Agro",
    description: "Líderes e proprietários de empresas do setor agrícola"
  },
  {
    icon: Package,
    title: "Diretores e Gestores de Suprimentos",
    description: "Profissionais responsáveis pela cadeia de abastecimento"
  },
  {
    icon: ShoppingCart,
    title: "Representantes e Compradores",
    description: "Especialistas em negociação e aquisição"
  },
  {
    icon: Truck,
    title: "Especialistas em Logística",
    description: "Profissionais de transporte e cadeia de valor"
  },
  {
    icon: Cpu,
    title: "Profissionais de Tecnologia",
    description: "Inovadores e desenvolvedores de soluções para o agro"
  }
];

const AudienceSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase">
            Quem Participa
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Perfil do <span className="text-gradient">Público</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Executivos e líderes do agronegócio reunidos para transformar a cadeia de suprimentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audienceTypes.map((type, index) => (
            <div 
              key={type.title}
              className={`bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group ${
                index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <type.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {type.title}
              </h3>
              <p className="text-muted-foreground">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
