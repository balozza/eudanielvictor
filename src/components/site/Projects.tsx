import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";
import projectsBg from "@/assets/projects-bg.webp";
import pFertgrow from "@/assets/projects/projeto-fertgrow.webp";
import p01 from "@/assets/projects/projeto-01.webp";
import p02 from "@/assets/projects/projeto-02.webp";
import p03 from "@/assets/projects/projeto-03.webp";
import p04 from "@/assets/projects/projeto-04.webp";
import p05 from "@/assets/projects/projeto-05.webp";
import p06 from "@/assets/projects/projeto-06.webp";

const projects = [
  {
    n: "00",
    title: "Portal de Expedição — Fertgrow S.A.",
    desc:
      "Plataforma completa de ponta a ponta para o time de expedição de uma multinacional: acompanha o fertilizante desde a saída do navio, carregamento na transportadora, peso, ticket Guardian, NF-e, entrada e saída na fábrica, com painel de controle, indicadores em tempo real e dashboards por turno e transportadora. Em produção sob certificado SSL.",
    img: pFertgrow,
    featured: true,
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-forest">
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
                  Projeto {p.n}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-medium leading-tight text-forest">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
