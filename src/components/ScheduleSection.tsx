import { Calendar, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Item = {
  time: string;
  title: string;
  description?: string;
  highlights?: string[];
  speakers?: string[];
  type?: "keynote" | "panel" | "break" | "networking" | "open";
};

const day1: Item[] = [
  {
    time: "08:00 – 09:00",
    title: "Credenciamento + Welcome Coffee",
    type: "networking",
    highlights: [
      "Ambiente já preparado para networking inicial",
      "Ativação de patrocinadores (stands)",
    ],
  },
  {
    time: "09:00 – 09:30",
    title: "Abertura Institucional",
    type: "open",
    description: "“O futuro da cadeia de suprimentos do agro”",
    speakers: ["José Vengrus (Zezão)"],
  },
  {
    time: "09:30 – 10:30",
    title:
      "PALESTRA 1 — ATIVACIONAL: Decisões que moldam o futuro: carreira, liderança e pressão por resultado no novo agro",
    type: "keynote",
    speakers: ["Elaine Fernandes"],
  },
  {
    time: "10:30 – 12:00",
    title:
      "PAINEL 1 — O agro sob pressão: custo, risco e competitividade na nova cadeia global",
    type: "panel",
    highlights: [
      "Macrotendências (mercado, geopolítica, supply global)",
      "Pressão por eficiência e sustentabilidade",
    ],
    speakers: [
      "Flavio Hirata — Defensivos Agrícolas",
      "Claudio Dorneles",
      "Santiago Franco",
      "Mediador",
    ],
  },
  { time: "12:00 – 13:30", title: "Almoço", type: "break" },
  {
    time: "13:30 – 15:00",
    title:
      "PAINEL 2 — Risco & Compliance na cadeia: Compliance que gera resultado, da obrigação regulatória à estratégia de negócio",
    type: "panel",
    highlights: [
      "Homologação de fornecedores (tendências)",
      "Compliance como estratégia",
      "Due diligence no agro",
    ],
    speakers: [
      "Tatiane Brose — SLC",
      "Camila Mendes Ramos — Amaggi",
      "Participante 03",
      "Mediador: José Herculano Santos",
    ],
  },
  {
    time: "15:00 – 15:30",
    title: "PALESTRA 2 — Engenharia Automotiva",
    type: "keynote",
    speakers: [
      "Everton Lopes — Associação Brasileira de Engenharia Automotiva",
    ],
  },
  {
    time: "15:30 – 16:00",
    title: "Coffee + Networking + Visita aos Stands",
    type: "break",
  },
  {
    time: "16:00 – 17:00",
    title:
      "PAINEL — Talks de Patrocinadores (Cotas Ouro/Diamante): Soluções que estão transformando a cadeia na prática",
    type: "panel",
    highlights: [
      "3 a 4 talks rápidos (10–15 min cada)",
      "Conteúdo aplicado (cases / soluções)",
    ],
    speakers: [
      "Azupack",
      "FourGroup — Gustavo Steglich",
      "John Deere — Rafael Marques",
    ],
  },
  {
    time: "17:00 – 18:00",
    title: "Happy Hour + Networking Open Bar",
    type: "networking",
  },
];

const day2: Item[] = [
  { time: "08:00 – 09:00", title: "Welcome Coffee + Networking", type: "networking" },
  {
    time: "09:00 – 10:00",
    title:
      "PALESTRA 3 — Compras estratégicas sob pressão: KPIs, concentração de fornecedores e gestão de risco",
    type: "keynote",
    highlights: [
      "KPIs além de savings",
      "Risco de single source",
      "Estratégia de fornecedores",
    ],
    speakers: ["Mauro Saldanha"],
  },
  { time: "10:00 – 10:30", title: "Coffee Break", type: "break" },
  {
    time: "10:30 – 11:00",
    title:
      "PALESTRA 4 — O Novo Profissional de Compras: competências, mentalidade e tomada de decisão nas grandes empresas",
    type: "keynote",
    speakers: ["Victor Sakitani"],
  },
  {
    time: "11:00 – 12:00",
    title: "PAINEL — Debate Executivo",
    type: "panel",
    speakers: [
      "Mediador: Jules Ignácio",
      "Léo Maggi",
      "Guilherme Scheffer",
      "Kleverson Scheffer",
      "Rafael Bortolli",
    ],
  },
  { time: "12:00 – 13:30", title: "Almoço + Networking", type: "break" },
  {
    time: "13:30 – 15:30",
    title:
      "PAINEL — Tecnologia & Futuro da Cadeia: Supply Chain 4.0 no agro — rastreabilidade, dados e decisões em tempo real",
    type: "panel",
    highlights: [
      "Rastreabilidade ponta a ponta",
      "Digitalização da cadeia",
      "IA e dados aplicados ao supply",
    ],
    speakers: [
      "Mediador: Nahzir",
      "Guilherme Argenta",
      "Joaquim Jonkel — Totvs",
      "Prof. Paulo Roberto — FDC",
    ],
  },
  { time: "15:30 – 16:00", title: "Coffee + Networking", type: "break" },
  {
    time: "16:00 – 17:30",
    title:
      "PALESTRA FINAL — Agro 2030: quem vai liderar a próxima geração da cadeia de suprimentos?",
    type: "keynote",
    highlights: ["Provocações estratégicas", "Visão 2030"],
    speakers: ["Rodrigo Bonato"],
  },
  {
    time: "17:30 – 18:00",
    title: "Happy Hour + Networking Open Bar",
    type: "networking",
  },
];

const typeLabel: Record<NonNullable<Item["type"]>, string> = {
  keynote: "Palestra",
  panel: "Painel",
  break: "Intervalo",
  networking: "Networking",
  open: "Abertura",
};

const ScheduleList = ({ items }: { items: Item[] }) => (
  <div className="relative">
    <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-border" />
    <ul className="space-y-6">
      {items.map((item, idx) => (
        <li key={idx} className="relative pl-8 md:pl-12">
          <span className="absolute left-0 top-2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-primary shadow-glow" />
          <div className="bg-background border border-border rounded-2xl p-5 md:p-6 hover:border-primary/50 transition-colors">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
                <Clock className="w-4 h-4" />
                {item.time}
              </span>
              {item.type && (
                <span className="text-xs uppercase tracking-wide bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {typeLabel[item.type]}
                </span>
              )}
            </div>
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-muted-foreground mt-2 italic">{item.description}</p>
            )}
            {item.highlights && (
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            {item.speakers && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.speakers.map((s) => (
                  <span
                    key={s}
                    className="text-xs md:text-sm bg-card border border-border rounded-full px-3 py-1 text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const ScheduleSection = () => {
  return (
    <section id="programacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase">
              Programação
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Dois dias de <span className="text-gradient">conteúdo estratégico</span>
            </h2>
            <p className="text-muted-foreground mt-4 inline-flex items-center gap-2 justify-center">
              <Calendar className="w-4 h-4 text-primary" />
              02 e 03 de Junho de 2026 — Cenárium Rural — Cuiabá/MT
            </p>
          </div>

          <Tabs defaultValue="dia1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-auto">
              <TabsTrigger value="dia1" className="py-3 flex-col gap-1">
                <span className="font-display font-bold">Dia 1 — 02/06</span>
                <span className="text-xs opacity-80">Visão Estratégica + Governança</span>
              </TabsTrigger>
              <TabsTrigger value="dia2" className="py-3 flex-col gap-1">
                <span className="font-display font-bold">Dia 2 — 03/06</span>
                <span className="text-xs opacity-80">Eficiência, Logística e Tecnologia</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dia1">
              <ScheduleList items={day1} />
            </TabsContent>
            <TabsContent value="dia2">
              <ScheduleList items={day2} />
            </TabsContent>
          </Tabs>

          <p className="text-xs text-muted-foreground/70 text-center mt-8">
            * Programação preliminar, sujeita a alterações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;