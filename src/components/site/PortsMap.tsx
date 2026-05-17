import { motion } from "framer-motion";
import { Anchor } from "lucide-react";

type Port = {
  id: string;
  name: string;
  state: string;
  x: number;
  y: number;
  offset?: { dx: number; dy: number; anchor?: "start" | "end" | "middle" };
};

// viewBox 1000 x 600 — recorte do Norte/Nordeste do Brasil
// x = (lng + 56) * 50    |    y = (1 - lat) * 75
const ports: Port[] = [
  { id: "santarem", name: "Porto de Santarém", state: "PA", x: 65, y: 257, offset: { dx: 0, dy: -18, anchor: "middle" } },
  { id: "belem", name: "Porto de Belém", state: "PA", x: 375, y: 184, offset: { dx: 0, dy: -18, anchor: "middle" } },
  { id: "ponta-madeira", name: "Ponta da Madeira — Vale", state: "MA", x: 575, y: 263, offset: { dx: -10, dy: -22, anchor: "end" } },
  { id: "itaqui", name: "Porto do Itaqui", state: "MA", x: 588, y: 278, offset: { dx: 12, dy: 14, anchor: "start" } },
  { id: "piaui", name: "Porto do Piauí", state: "PI", x: 717, y: 291, offset: { dx: 0, dy: 26, anchor: "middle" } },
  { id: "pecem", name: "Porto de Pecém", state: "CE", x: 859, y: 341, offset: { dx: 18, dy: 4, anchor: "start" } },
  { id: "mucuripe", name: "Porto do Mucuripe", state: "CE", x: 876, y: 353, offset: { dx: 18, dy: 22, anchor: "start" } },
];

// Caminho estilizado: linha conectando os portos na ordem da rota
const routePath = ports.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

export const PortsMap = () => {
  return (
    <section id="rota" className="relative bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-copper">
            Rota Portuária
          </p>
          <h2 className="font-display text-4xl font-light text-balance text-foreground md:text-6xl">
            Portos que <em className="italic text-copper">visitei</em> na minha carreira.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Uma jornada técnica pelos principais terminais do Norte e Nordeste do Brasil.
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-copper/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-cream to-background p-4 shadow-elegant md:p-8">
            <svg
              viewBox="0 0 1000 600"
              className="h-auto w-full"
              role="img"
              aria-label="Mapa dos portos visitados no Norte e Nordeste do Brasil"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                </pattern>
                <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--forest) / 0.08)" />
                  <stop offset="100%" stopColor="hsl(var(--forest) / 0.18)" />
                </linearGradient>
                <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--background))" />
                  <stop offset="100%" stopColor="hsl(var(--muted))" />
                </linearGradient>
              </defs>

              {/* Fundo oceano + grid */}
              <rect width="1000" height="600" fill="url(#ocean)" />
              <rect width="1000" height="600" fill="url(#grid)" />

              {/* Litoral / massa de terra estilizada do Norte/Nordeste */}
              <path
                d="
                  M 0 320
                  C 60 230, 140 200, 220 215
                  C 300 230, 340 180, 400 170
                  C 460 165, 520 220, 580 245
                  C 640 265, 700 275, 760 305
                  C 820 330, 870 340, 920 360
                  C 960 375, 985 395, 1000 420
                  L 1000 600 L 0 600 Z
                "
                fill="url(#land)"
                stroke="hsl(var(--forest) / 0.45)"
                strokeWidth="1.5"
              />

              {/* Rio Amazonas estilizado */}
              <path
                d="M 20 280 C 120 290, 240 270, 360 240"
                fill="none"
                stroke="hsl(var(--copper) / 0.25)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Rosa dos ventos */}
              <g transform="translate(60 510)" opacity="0.6">
                <circle r="22" fill="none" stroke="hsl(var(--copper))" strokeWidth="1" />
                <path d="M 0 -22 L 4 0 L 0 22 L -4 0 Z" fill="hsl(var(--copper))" />
                <text y="-30" textAnchor="middle" className="fill-copper" style={{ fontSize: 10, fontWeight: 600 }}>
                  N
                </text>
              </g>

              {/* Rota animada */}
              <motion.path
                d={routePath}
                fill="none"
                stroke="hsl(var(--copper))"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />

              {/* Portos */}
              {ports.map((p, i) => (
                <motion.g
                  key={p.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.18, duration: 0.4, type: "spring" }}
                >
                  {/* Pulso */}
                  <circle cx={p.x} cy={p.y} r="14" fill="hsl(var(--copper) / 0.15)">
                    <animate
                      attributeName="r"
                      values="8;18;8"
                      dur="2.4s"
                      repeatCount="indefinite"
                      begin={`${i * 0.3}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0.5;0;0.5"
                      dur="2.4s"
                      repeatCount="indefinite"
                      begin={`${i * 0.3}s`}
                    />
                  </circle>
                  {/* Marcador */}
                  <circle cx={p.x} cy={p.y} r="6" fill="hsl(var(--copper))" stroke="hsl(var(--cream))" strokeWidth="2" />
                  {/* Label */}
                  <g transform={`translate(${p.x + (p.offset?.dx ?? 0)} ${p.y + (p.offset?.dy ?? -18)})`}>
                    <text
                      textAnchor={p.offset?.anchor ?? "middle"}
                      className="fill-forest"
                      style={{ fontSize: 13, fontWeight: 600 }}
                    >
                      {p.name}
                    </text>
                    <text
                      y="14"
                      textAnchor={p.offset?.anchor ?? "middle"}
                      className="fill-muted-foreground"
                      style={{ fontSize: 10, letterSpacing: 1.5 }}
                    >
                      {p.state}
                    </text>
                  </g>
                </motion.g>
              ))}
            </svg>
          </div>

          {/* Lista de portos */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {ports.map((p) => (
              <li
                key={p.id}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-copper/50 hover:shadow-soft"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-cream">
                  <Anchor className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-medium text-forest">{p.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.state}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};
