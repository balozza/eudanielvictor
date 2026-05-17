import { motion } from "framer-motion";

const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-copper">{children}</span>
);

const paragraphs = [
  <>
    Me chamo <span className="font-medium text-forest">Daniel Victor</span>, sou profissional da área portuária, com formação em{" "}
    <HL>Gestão Portuária</HL>, <HL>MBA em Engenharia Portuária</HL> e estudante de{" "}
    <HL>Engenharia Elétrica</HL>.
  </>,
  <>
    Tenho interesse e atuação voltados para <HL>Inovação</HL>, <HL>Automação</HL>,{" "}
    <HL>Tecnologia</HL>, <HL>Inteligência Artificial</HL> e otimização de processos, buscando integrar
    soluções técnicas e estratégicas aos desafios operacionais e logísticos.
  </>,
  <>
    Atualmente atuo na <HL>Fertgrow</HL>, responsável por <HL>inovação de sistemas</HL>,{" "}
    <HL>otimização de processos</HL> e melhoria contínua — levando tecnologia para dentro da
    operação, executando, testando e entregando resultados mensuráveis. Também desenvolvo{" "}
    <HL>código-fonte para sistemas ERP</HL>, conectando regra de negócio, dados e automação.
  </>,
  <>
    Ao longo da minha trajetória, venho desenvolvendo conhecimentos em operações portuárias,
    planejamento, análise de processos, sistemas tecnológicos e <HL>transformação digital</HL>{" "}
    aplicada à indústria e à logística.
  </>,
  <>
    Acredito que a evolução dos setores portuário, industrial e logístico está diretamente ligada ao
    uso inteligente da <HL>Tecnologia</HL>, da <HL>Engenharia</HL> e da <HL>Automação</HL> para
    aumentar eficiência, segurança e desempenho operacional.
  </>,
  <>
    Meu objetivo é contribuir com projetos que unam <HL>Engenharia</HL>, <HL>Tecnologia</HL> e{" "}
    <HL>Inovação</HL> para gerar soluções modernas, sustentáveis e de alto impacto.
  </>,
];

const pillars = [
  { k: "01", t: "Engenharia Portuária", d: "Operações, planejamento e infraestrutura." },
  { k: "02", t: "Inovação & ERP", d: "Desenvolvimento, integração e automação de sistemas." },
  { k: "03", t: "Logística & Supply Chain", d: "Eficiência operacional ponta a ponta." },
  { k: "04", t: "IA & Transformação Digital", d: "Dados e inteligência aplicados ao negócio." },
];

const currentRole = {
  company: "Fertgrow",
  role: "Inovação de Sistemas & Otimização de Processos",
  bullets: [
    "Adoção de tecnologia aplicada à operação",
    "Desenvolvimento de código-fonte para ERP",
    "Execução, testes e entrega de resultados",
  ],
};

export const Biography = () => {
  return (
    <section id="biografia" className="relative bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-copper">
            Biografia
          </p>
          <h2 className="font-display text-4xl font-light text-balance text-foreground md:text-6xl">
            Perfil <em className="italic text-copper">técnico</em> e estratégico.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Tecnologia, Engenharia e Inovação aplicadas ao setor portuário e industrial.
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-copper/60" />
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed text-muted-foreground ${
                  i === 0 ? "text-lg md:text-xl text-foreground/90" : "text-base md:text-lg"
                }`}
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Pillars */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="rounded-2xl border border-border bg-card/60 p-8 shadow-soft backdrop-blur">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-copper">
                Áreas de atuação
              </p>
              <ul className="space-y-5">
                {pillars.map((p) => (
                  <li key={p.k} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="font-display text-sm text-copper/80">{p.k}</span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-forest">{p.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-copper/30 bg-gradient-to-br from-forest to-forest-deep p-8 text-background shadow-elegant">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-copper-soft">
                  Atualmente
                </p>
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium">{currentRole.company}</h3>
              <p className="mt-1 text-sm text-background/70">{currentRole.role}</p>
              <ul className="mt-5 space-y-2">
                {currentRole.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-background/85">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
