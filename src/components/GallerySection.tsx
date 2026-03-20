import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import moment4 from "@/assets/moment-4.jpg";

const testimonials = [
  {
    image: moment1,
    name: "Leonardo Rossato",
    role: "Diretor Administrativo e de Serviços Compartilhados — Bom Futuro",
    quote: "O grande valor desse evento está na troca de experiências entre empresas, profissionais e lideranças. É uma oportunidade de aprender com a prática, conhecer novas tecnologias, desenvolver equipes e fortalecer relacionamentos que fazem diferença no dia a dia."
  },
  {
    image: moment2,
    name: "José Vengrus Filho (Zezão)",
    role: "Diretor de Mecanização Agrícola — Bom Futuro",
    quote: "Estar em um encontro como esse é fundamental para trocar experiências e discutir estratégias que tornem a cadeia de suprimentos mais competitiva e sustentável. Quando a agroindústria compartilha práticas, integra conhecimento e aproxima diferentes áreas da operação, todo o setor ganha em eficiência e evolução."
  },
  {
    image: moment3,
    name: "Rodrigo Iglesias",
    role: "Chefe de Pós-Venda e Suporte ao Cliente — John Deere",
    quote: "Foi um prazer participar do painel e contribuir para uma discussão tão relevante para o agronegócio. Encontros como esse fortalecem a troca de experiências, aproximam empresas e ajudam a construir soluções mais eficientes para toda a cadeia de suprimentos."
  },
  {
    image: moment4,
    name: "Michel Inácio Amorim Muniz",
    role: "Diretor Executivo — Instituto Farmun",
    quote: "Esse encontro nasceu da necessidade de reunir, em um mesmo ambiente, profissionais que vivem os desafios da cadeia de suprimentos do agro. A ideia foi criar um espaço de troca real, de conexão e de construção conjunta de soluções para fortalecer o setor."
  }
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase">
            Momentos Marcantes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Alguns <span className="text-gradient">Depoimentos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center gap-4 p-6 pb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {t.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
