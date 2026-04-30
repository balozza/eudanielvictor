import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Dados & BI",
    items: ["Excel Avançado", "Power Automate", "Tableau", "Metabase", "Grafana", "SQL"],
  },
  {
    label: "Programação",
    items: ["Python", "C++", "C#", "ADVPL", "Linguagem R"],
  },
  {
    label: "Sistemas Corporativos",
    items: ["SAP", "TOTVS", "Service Desk", "Sistemas Embarcados", "IA Geral"],
  },
  {
    label: "Gestão & Processos",
    items: ["Lean Seis Sigma", "Kaizen", "5S", "Green Belt"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-copper">
            Hard Skills
          </p>
          <h2 className="font-display text-4xl font-light text-balance text-foreground md:text-6xl">
            Ferramentas que uso no <em className="italic text-copper">dia a dia</em>.
          </h2>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-copper">
                {g.label}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-forest transition-colors hover:border-copper hover:text-copper"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
