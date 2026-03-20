import audienceAgro from "@/assets/audience-agro.jpg";
import audienceSupply from "@/assets/audience-supply.jpg";
import audienceBuyers from "@/assets/audience-buyers.jpg";
import audienceLogistics from "@/assets/audience-logistics.jpg";
import audienceTech from "@/assets/audience-tech.jpg";

const audienceTypes = [
  {
    image: audienceAgro,
    title: "Empresários do Agro",
    description: "Líderes e proprietários de empresas do setor agrícola"
  },
  {
    image: audienceSupply,
    title: "Diretores e Gestores de Suprimentos",
    description: "Profissionais responsáveis pela cadeia de abastecimento"
  },
  {
    image: audienceBuyers,
    title: "Representantes e Compradores",
    description: "Especialistas em negociação e aquisição"
  },
  {
    image: audienceLogistics,
    title: "Especialistas em Logística",
    description: "Profissionais de transporte e cadeia de valor"
  },
  {
    image: audienceTech,
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
              className={`relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group min-h-[220px] ${
                index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <img
                src={type.image}
                alt={type.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
