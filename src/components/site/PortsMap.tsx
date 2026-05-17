import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import g2 from "@/assets/gallery/gallery-2.jpg";
import g4 from "@/assets/gallery/gallery-4.jpg";
import g8 from "@/assets/gallery/gallery-8.jpg";
import gTcn from "@/assets/gallery/gallery-tcn.jpg";

type Port = {
  id: string;
  name: string;
  state: string;
  coordinates: [number, number]; // [lng, lat]
  anchor?: "start" | "end" | "middle";
  dx?: number;
  dy?: number;
};

const ports: Port[] = [
  { id: "santarem", name: "Porto de Santarém", state: "PA", coordinates: [-54.71, -2.43], anchor: "middle", dx: 0, dy: -14 },
  { id: "belem", name: "Porto de Belém", state: "PA", coordinates: [-48.5, -1.45], anchor: "middle", dx: 0, dy: -14 },
  { id: "ponta-madeira", name: "Ponta da Madeira — Vale", state: "MA", coordinates: [-44.37, -2.57], anchor: "end", dx: -10, dy: -10 },
  { id: "itaqui", name: "Porto do Itaqui", state: "MA", coordinates: [-44.37, -2.7], anchor: "end", dx: -10, dy: 14 },
  { id: "piaui", name: "Porto do Piauí", state: "PI", coordinates: [-41.66, -2.88], anchor: "middle", dx: 0, dy: 18 },
  { id: "pecem", name: "Porto de Pecém", state: "CE", coordinates: [-38.81, -3.55], anchor: "start", dx: 10, dy: -4 },
  { id: "mucuripe", name: "Porto do Mucuripe", state: "CE", coordinates: [-38.48, -3.71], anchor: "start", dx: 10, dy: 16 },
];

const visitedStates: Record<string, { label: string; image: string }> = {
  PA: { label: "Pará", image: gTcn },
  MA: { label: "Maranhão", image: g4 },
  PI: { label: "Piauí", image: g8 },
  CE: { label: "Ceará", image: g2 },
};

const portsByState = ports.reduce<Record<string, Port[]>>((acc, p) => {
  (acc[p.state] ||= []).push(p);
  return acc;
}, {});

export const PortsMap = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const hoveredData = hovered ? visitedStates[hovered] : null;
  const hoveredPorts = hovered ? portsByState[hovered] ?? [] : [];

  return (
    <section id="rota" className="relative bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-copper">
            Rota Portuária
          </p>
          <h2 className="font-display text-4xl font-light text-balance text-foreground md:text-6xl">
            Portos que <em className="italic text-copper">visitei</em> no Brasil.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Passe o cursor sobre os estados destacados para ver os portos visitados.
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-copper/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-cream/40 to-background p-2 shadow-elegant md:p-6"
            onMouseMove={handleMove}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 800, center: [-55, -14] }}
              width={900}
              height={780}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography="/brazil-states.geojson">
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const sigla: string | undefined = geo.properties.sigla;
                    const visited = sigla ? !!visitedStates[sigla] : false;
                    const isHover = sigla === hovered;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => visited && setHovered(sigla!)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                          default: {
                            fill: visited
                              ? "hsl(var(--copper) / 0.18)"
                              : "hsl(var(--forest) / 0.06)",
                            stroke: "hsl(var(--forest) / 0.35)",
                            strokeWidth: 0.5,
                            outline: "none",
                            cursor: visited ? "pointer" : "default",
                            transition: "fill 0.2s",
                          },
                          hover: {
                            fill: visited
                              ? "hsl(var(--copper) / 0.45)"
                              : "hsl(var(--forest) / 0.06)",
                            stroke: "hsl(var(--copper))",
                            strokeWidth: visited ? 1 : 0.5,
                            outline: "none",
                            cursor: visited ? "pointer" : "default",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {ports.slice(0, -1).map((p, i) => (
                <Line
                  key={`line-${p.id}`}
                  from={p.coordinates}
                  to={ports[i + 1].coordinates}
                  stroke="hsl(var(--copper))"
                  strokeWidth={1.2}
                  strokeDasharray="3 3"
                  strokeLinecap="round"
                />
              ))}

              {ports.map((p) => (
                <Marker key={p.id} coordinates={p.coordinates}>
                  <circle r={8} fill="hsl(var(--copper) / 0.15)">
                    <animate attributeName="r" values="5;11;5" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle r={3.5} fill="hsl(var(--copper))" stroke="hsl(var(--cream))" strokeWidth={1.2} />
                  <text
                    textAnchor={p.anchor ?? "middle"}
                    x={p.dx ?? 0}
                    y={p.dy ?? -10}
                    style={{
                      fontFamily: "inherit",
                      fontSize: 9,
                      fontWeight: 600,
                      fill: "hsl(var(--forest))",
                      paintOrder: "stroke",
                      stroke: "hsl(var(--background))",
                      strokeWidth: 2.5,
                      strokeLinejoin: "round",
                      pointerEvents: "none",
                    }}
                  >
                    {p.name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>

            <AnimatePresence>
              {hoveredData && (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, scale: 0.95, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="pointer-events-none absolute z-20 w-64 overflow-hidden rounded-xl border border-copper/40 bg-background/95 shadow-elegant backdrop-blur"
                  style={{
                    left: Math.min(mouse.x + 18, 9999),
                    top: mouse.y + 18,
                    transform:
                      mouse.x > 600 ? "translateX(calc(-100% - 36px))" : undefined,
                  }}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-forest-deep">
                    <img
                      src={hoveredData.image}
                      alt={hoveredData.label}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-copper">
                      {hoveredData.label}
                    </p>
                    <ul className="mt-1.5 space-y-0.5">
                      {hoveredPorts.map((p) => (
                        <li key={p.id} className="font-display text-sm text-forest">
                          {p.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
