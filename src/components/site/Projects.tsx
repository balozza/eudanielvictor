import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projectsBg from "@/assets/projects-bg.webp";
import fertgrowLogin from "@/assets/projects/fertgrow-login.webp";
import fertgrowPainel from "@/assets/projects/fertgrow-painel.webp";
import fertgrowAutorizacao from "@/assets/projects/fertgrow-autorizacao.webp";
import fertgrowDescarga from "@/assets/projects/fertgrow-descarga.webp";
import fertgrowProcessados from "@/assets/projects/fertgrow-processados.webp";
import p01 from "@/assets/projects/projeto-01.webp";
import p02 from "@/assets/projects/projeto-02.webp";
import p03 from "@/assets/projects/projeto-03.webp";
import p04 from "@/assets/projects/projeto-04.webp";
import p05 from "@/assets/projects/projeto-05.webp";
import p06 from "@/assets/projects/projeto-06.webp";

type Project = {
  n: string;
  title: string;
  desc: string;
  img: string;
  featured?: boolean;
  gallery?: { src: string; caption: string }[];
};

const projects: Project[] = [
  {
    n: "00",
    title: "Portal de Expedição — Fertgrow S.A.",
    desc:
      "Plataforma completa de ponta a ponta para o time de expedição de uma multinacional: acompanha o fertilizante desde a saída do navio, carregamento na transportadora, peso, ticket Guardian, NF-e, entrada e saída na fábrica, com painel de controle, indicadores em tempo real e dashboards por turno e transportadora. Em produção sob certificado SSL.",
    img: fertgrowPainel,
    featured: true,
    gallery: [
      { src: fertgrowLogin, caption: "Tela de Login — acesso restrito por credenciais corporativas" },
      { src: fertgrowPainel, caption: "Painel de Controle — indicadores em tempo real e desempenho por transportadora" },
      { src: fertgrowAutorizacao, caption: "Autorização de Descarga — veículos agendados aguardando liberação" },
      { src: fertgrowDescarga, caption: "Veículos em Descarga — atualização automática a cada 1 minuto" },
      { src: fertgrowProcessados, caption: "Veículos Processados — entrada, saída e peso registrados na balança" },
    ],
  },
  {
    n: "01",
    title: "Câmera com IA + alerta via Teams",
    desc:
      "Sistema de visão computacional que monitora operações em tempo real e dispara automaticamente alertas via API do Microsoft Teams ao detectar eventos críticos.",
    img: p01,
  },
  {
    n: "02",
    title: "Balança de Expedição em 3D para PCM",
    desc:
      "Visualização tridimensional do equipamento de pesagem, com indicadores de manutenção em tempo real para apoiar o PCM na tomada de decisão visual.",
    img: p02,
  },
  {
    n: "03",
    title: "Sistema de Expedição de Descarga de Navio",
    desc:
      "Plataforma que orquestra toda a descarga, do berço ao armazém, reduzindo tempos ociosos e aumentando a previsibilidade da operação portuária.",
    img: p03,
  },
  {
    n: "04",
    title: "Sistema de ETA ON BOARD",
    desc:
      "Monitoramento de chegada estimada de embarcações com integração a múltiplas fontes, antecipando decisões logísticas e otimizando recursos portuários.",
    img: p04,
  },
  {
    n: "05",
    title: "TI, SCAN Estoque",
    desc:
      "Solução de inventário com leitura automatizada por código de barras, eliminando contagens manuais, reduzindo erros e acelerando a conferência física.",
    img: p05,
  },
  {
    n: "06",
    title: "Dashboards Automatizados, Almoxarifado",
    desc:
      "BI automatizado para análise de SAs e almoxarifado: indicadores em tempo real, gráficos interativos e relatórios autoatualizáveis. Fim das planilhas manuais.",
    img: p06,
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="relative overflow-hidden bg-secondary py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${projectsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-copper">
            Portfólio
          </p>
          <h2 className="font-display text-4xl font-light text-balance text-foreground md:text-6xl">
            Projetos que <em className="italic text-copper">resolveram</em> problemas reais.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Soluções desenvolvidas e aplicadas em ambiente industrial e portuário, focadas em
            reduzir gargalos, automatizar repetições e ampliar a inteligência operacional.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant ${
                p.featured
                  ? "border-copper/60 ring-2 ring-copper/40 md:col-span-2"
                  : "border-border"
              }`}
            >
              {p.featured && (
                <span className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-copper px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-background shadow-elegant">
                  <Star className="h-3 w-3 fill-current" />
                  Projeto destaque
                </span>
              )}
              <div className={`relative overflow-hidden bg-gradient-forest ${p.featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-copper backdrop-blur">
                  {p.featured ? "Em produção · SSL" : `Projeto ${p.n}`}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-medium leading-tight text-forest">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                {p.featured && (
                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-3 py-1 font-medium text-forest">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Certificado SSL
                    </span>
                    <span className="rounded-full bg-copper/10 px-3 py-1 font-medium text-copper">
                      Multinacional
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 font-medium text-muted-foreground">
                      Em produção
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
