import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import moment4 from "@/assets/moment-4.jpg";
import eventPanel from "@/assets/event-panel.jpg";

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

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <img 
            src={moment1} 
            alt="Momento 1" 
            className="w-full h-48 md:h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
          <img 
            src={moment2} 
            alt="Momento 2" 
            className="w-full h-48 md:h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
          <img 
            src={moment3} 
            alt="Momento 3" 
            className="w-full h-48 md:h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
          <img 
            src={moment4} 
            alt="Momento 4" 
            className="w-full h-48 md:h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Featured Panel */}
        <div className="relative rounded-3xl overflow-hidden">
          <img 
            src={eventPanel} 
            alt="Painel do evento" 
            className="w-full h-80 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Networking • Inovação • Decisão
            </p>
            <p className="text-muted-foreground mt-2">
              O hub de inteligência e relacionamento da cadeia de suprimentos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
