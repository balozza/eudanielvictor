import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import imgSantarem from "@/assets/ports/santarem.webp";
import imgBelem from "@/assets/ports/belem.webp";
import imgPontaMadeira from "@/assets/ports/ponta-madeira.webp";
import imgItaqui from "@/assets/ports/itaqui.webp";
import imgPiaui from "@/assets/ports/piaui.webp";
import imgPecem from "@/assets/ports/pecem.webp";
import imgMucuripe from "@/assets/ports/mucuripe.webp";

type Port = {
  id: string;
  name: string;
  state: string;
  city: string;
  image: string;
  coordinates: [number, number]; // [lng, lat]
  anchor?: "start" | "end" | "middle";
  dx?: number;
  dy?: number;
};

const ports: Port[] = [
  { id: "santarem", name: "Porto de Santarém", state: "PA", city: "Santarém", image: imgSantarem, coordinates: [-54.71, -2.43], anchor: "middle", dx: 0, dy: -14 },
  { id: "belem", name: "Porto de Belém", state: "PA", city: "Belém", image: imgBelem, coordinates: [-48.5, -1.45], anchor: "middle", dx: 0, dy: -14 },
  { id: "ponta-madeira", name: "Ponta da Madeira — Vale", state: "MA", city: "São Luís", image: imgPontaMadeira, coordinates: [-44.37, -2.57], anchor: "end", dx: -10, dy: -10 },
  { id: "itaqui", name: "Porto do Itaqui", state: "MA", city: "São Luís", image: imgItaqui, coordinates: [-44.37, -2.7], anchor: "end", dx: -10, dy: 14 },
  { id: "piaui", name: "Porto do Piauí", state: "PI", city: "Luís Correia", image: imgPiaui, coordinates: [-41.66, -2.88], anchor: "middle", dx: 0, dy: 18 },
  { id: "pecem", name: "Porto de Pecém", state: "CE", city: "São Gonçalo do Amarante", image: imgPecem, coordinates: [-38.81, -3.55], anchor: "start", dx: 10, dy: -4 },
  { id: "mucuripe", name: "Porto do Mucuripe", state: "CE", city: "Fortaleza", image: imgMucuripe, coordinates: [-38.48, -3.71], anchor: "start", dx: 10, dy: 16 },
];

const visitedStates = new Set(ports.map((p) => p.state));

export const PortsMap = () => {
  const [hovered, setHovered] = useState<Port | null>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

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
            Passe o cursor sobre cada marcador para ver a foto oficial do porto.
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
            onMouseLeave={() => setHovered(null)}
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
                    const visited = sigla ? visitedStates.has(sigla) : false;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: visited
                              ? "hsl(var(--copper) / 0.18)"
                              : "hsl(var(--forest) / 0.06)",
                            stroke: "hsl(var(--forest) / 0.35)",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          hover: {
                            fill: visited
                              ? "hsl(var(--copper) / 0.28)"
                              : "hsl(var(--forest) / 0.06)",
                            stroke: "hsl(var(--forest) / 0.45)",
                            strokeWidth: 0.5,
                            outline: "none",
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
                  {/* hit-target maior + handlers */}
                  <circle
                    r={14}
                    fill="transparent"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(p)}
                  />
                  <circle
                    r={hovered?.id === p.id ? 5 : 3.5}
                    fill="hsl(var(--copper))"
                    stroke="hsl(var(--cream))"
                    strokeWidth={1.4}
                    style={{ pointerEvents: "none", transition: "r 0.2s" }}
                  />
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
              {hovered && (
                <motion.div
                  key={hovered.id}
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
                      src={hovered.image}
                      alt={hovered.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-copper">
                      {hovered.city} — {hovered.state}
                    </p>
                    <p className="mt-1 font-display text-sm text-forest">{hovered.name}</p>
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
