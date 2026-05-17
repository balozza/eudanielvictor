import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

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

export const PortsMap = () => {
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
            Uma jornada técnica pelos principais terminais do Norte e Nordeste.
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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-cream/40 to-background p-2 shadow-elegant md:p-6">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 800, center: [-55, -14] }}
              width={900}
              height={780}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography="/brazil-states.geojson">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: "hsl(var(--forest) / 0.08)",
                          stroke: "hsl(var(--forest) / 0.35)",
                          strokeWidth: 0.5,
                          outline: "none",
                        },
                        hover: {
                          fill: "hsl(var(--forest) / 0.14)",
                          stroke: "hsl(var(--forest) / 0.5)",
                          strokeWidth: 0.6,
                          outline: "none",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Rota conectando os portos */}
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

              {/* Marcadores */}
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
                    }}
                  >
                    {p.name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
