import { motion } from "framer-motion";

const chapters = [
  {
    year: "1999",
    title: "Origem",
    body:
      "Nasci em São Luís do Maranhão. Desde pequeno, fascinado por programação, processos e energia, sempre quis entender como tudo funcionava por trás.",
  },
  {
    year: "2009",
    title: "O primeiro computador",
    body:
      "Aos 10 anos ganhei meu primeiro PC. Comecei em fóruns gringos estudando programação e lógica, o início de tudo.",
  },
  {
    year: "2012",
    title: "Programando e ganhando dinheiro",
    body:
      "Aos 12 anos criei meu primeiro servidor de Conquer Online, fenômeno nas lan houses da época. Vendia servidores via Hamachi, hospedagens de Habbo e sites em Dreamweaver. Foi quando descobri que dava para viver da programação.",
  },
  {
    year: "2019",
    title: "Provedora de internet",
    body:
      "Ajudei a fundar uma provedora local em Paço do Lumiar, começando via rádio e evoluindo para fibra óptica. Aprendi profundamente sobre roteadores, servidores, redes e infraestrutura, tudo na prática.",
  },
  {
    year: "2020",
    title: "Pandemia e recomeço",
    body:
      "Precisei interromper temporariamente a graduação em Tecnologia da Informação e busquei oportunidades alternativas de trabalho para manter minha trajetória em movimento. Superado o período pandêmico, retomei os estudos com uma rotina de alta disciplina, conciliando deslocamentos diários, leitura constante e aulas até o fim da noite, transformando consistência em resultado.",
  },
  {
    year: "2022",
    title: "Gestão Portuária",
    body:
      "Moro numa cidade portuária, precisava conhecer esse universo. Ingressei em Gestão Portuária, viajei para o Porto de Fortaleza, conheci a Lubnor da Petrobras e mentores como Alfredo Alle.",
  },
  {
    year: "2025",
    title: "Primeira graduação concluída",
    body:
      "Conclui minha primeira graduação em Gestão Portuária, um momento marcante e de grandes emoções. Um abraço especial aos meus colegas de turma: vocês foram essenciais nessa jornada.",
  },
  {
    year: "2026",
    title: "MBA em Engenharia Portuária",
    body:
      "Finalizei meu MBA em Engenharia Portuária, consolidando conhecimentos técnicos e estratégicos para atuar em projetos de maior complexidade no setor.",
  },
  {
    year: "Hoje",
    title: "Fertgrow & Engenharia Elétrica",
    body:
      "Atualmente na Fertgrow, criando soluções inovadoras para reduzir gargalos operacionais e sistêmicos com tecnologia. Em paralelo, curso Engenharia Elétrica. Também reportei, com responsabilidade, uma falha de banco de dados ao Porto do Itaqui, solucionada com sucesso. Grande abraço ao time!",
  },
];

export const Biography = () => {
  return (
    <section id="biografia" className="relative bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-copper">
            Biografia
          </p>
          <h2 className="font-display text-4xl font-light text-balance text-foreground md:text-6xl">
            Uma trajetória feita de <em className="italic text-copper">curiosidade</em> e disciplina.
          </h2>
        </div>

        <div className="relative mx-auto mt-24 max-w-4xl">
          {/* timeline line */}
          <div className="absolute left-8 top-0 h-full w-px bg-border md:left-1/2" />

          <div className="space-y-16">
            {chapters.map((c, i) => (
              <motion.div
                key={c.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid grid-cols-[64px_1fr] gap-6 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <span className="font-display text-3xl font-light text-copper md:text-5xl">
                    {c.year}
                  </span>
                </div>
                <div className={`${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                  {/* dot */}
                  <span className="absolute left-8 top-3 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-copper md:left-1/2" />
                  <h3 className="font-display text-2xl font-medium text-forest">
                    {c.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
