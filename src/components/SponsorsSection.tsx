import { Diamond, Trophy, Award, Handshake } from "lucide-react";
import azulpack from "@/assets/sponsors/azulpack.png";
import johnDeere from "@/assets/sponsors/john-deere.png";
import fourgroup from "@/assets/sponsors/fourgroup.png";
import totvs from "@/assets/sponsors/totvs.png";
import sompo from "@/assets/sponsors/sompo.png";
import mahle from "@/assets/sponsors/mahle.png";
import slc from "@/assets/sponsors/slc.png";
import bomFuturo from "@/assets/sponsors/bom-futuro.png";
import bomJesus from "@/assets/sponsors/bom-jesus.png";
import tresCoracoes from "@/assets/sponsors/3coracoes.png";
import c3business from "@/assets/sponsors/c3business.png";

type Sponsor = { src: string; alt: string; scale?: number };

const LOGO_H = "h-16 md:h-20";

const tiers: {
  label: string;
  icon: typeof Diamond;
  iconClass: string;
  sponsors: Sponsor[];
}[] = [
  {
    label: "Cota Diamante",
    icon: Diamond,
    iconClass: "text-sky-300",
    sponsors: [
      { src: azulpack, alt: "Azulpack", scale: 1.5 },
      { src: johnDeere, alt: "John Deere", scale: 1.5 },
    ],
  },
  {
    label: "Cota Ouro",
    icon: Trophy,
    iconClass: "text-amber-400",
    sponsors: [{ src: fourgroup, alt: "FourGroup" }],
  },
  {
    label: "Cota Prata",
    icon: Award,
    iconClass: "text-slate-300",
    sponsors: [
      { src: totvs, alt: "TOTVS" },
      { src: mahle, alt: "Mahle", scale: 1.8 },
      { src: sompo, alt: "Sompo", scale: 1.5 },
    ],
  },
  {
    label: "Apoiadores",
    icon: Handshake,
    iconClass: "text-primary",
    sponsors: [
      { src: slc, alt: "SLC Agrícola" },
      { src: bomFuturo, alt: "Bom Futuro" },
      { src: bomJesus, alt: "Bom Jesus" },
      { src: tresCoracoes, alt: "3 Corações" },
      { src: c3business, alt: "C3business" },
    ],
  },
];

const SponsorsSection = () => {
  return (
    <section className="pb-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Conectando indústria, tecnologia, inovação e os principais players do
          agronegócio nacional.
        </p>

        <div className="space-y-5 max-w-5xl mx-auto">
          {tiers.map(({ label, icon: Icon, iconClass, sponsors }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm px-6 py-8 shadow-card"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Icon className={`w-5 h-5 ${iconClass}`} />
                <span className="font-display font-semibold tracking-wide uppercase text-sm text-foreground">
                  {label}
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                {sponsors.map((s) => (
                  <img
                    key={s.alt}
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    style={s.scale ? { transform: `scale(${s.scale})` } : undefined}
                    className={`${LOGO_H} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Mais empresas em confirmação. Patrocínios limitados.{" "}
          <span className="text-primary font-medium">
            Garanta sua marca no maior evento de Supply Chain do Agro!
          </span>
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;
