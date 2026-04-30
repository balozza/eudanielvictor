import { motion } from "framer-motion";
import projectsBg from "@/assets/projects-bg.jpg";

const projects = [
  {
    n: "01",
    title: "Câmera com IA + alerta via Teams",
    desc:
      "Sistema de visão computacional que monitora operações em tempo real e dispara automaticamente alertas via API do Microsoft Teams ao detectar eventos críticos.",
  },
  {
    n: "02",
    title: "Balança de Expedição em 3D para PCM",
    desc:
      "Visualização tridimensional do fluxo de pesagem, conectada ao PCM para acompanhamento em tempo real e tomada de decisão visual.",
  },
  {
    n: "03",
    title: "Sistema de Expedição de Descarga de Navio",
    desc:
      "Plataforma que orquestra toda a descarga, do berço ao armazém, reduzindo tempos ociosos e aumentando previsibilidade da operação.",
  },
  {
    n: "04",
    title: "Sistema de ETA ON BOARD",
    desc:
      "Monitoramento de chegada estimada de embarcações com integração a múltiplas fontes — antecipa decisões logísticas e otimiza recursos portuários.",
  },
  {
    n: "05",
    title: "TI — SCAN Estoque",
    desc:
      "Solução de inventário com leitura automatizada, eliminando contagens manuais, reduzindo erros e acelerando a conferência física.",
  },
  {
    n: "06",
    title: "Dashboards Automatizados — Almoxarifado",
    desc:
      "BI automatizado para o almoxarifado: indicadores em tempo real, alertas e relatórios autoatualizáveis — fim das planilhas manuais.",
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
            Soluções desenvolvidas e aplicadas em ambiente industrial — focadas em
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
                {/* Image placeholder */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-forest">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-light text-cream/30">
                      {p.n}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 rounded bg-background/80 px-2 py-1 text-center text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                    Imagem em breve
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-copper">
                    Projeto {p.n}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-forest">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
