import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import g1 from "@/assets/gallery/gallery-1.webp";
import g2 from "@/assets/gallery/gallery-2.webp";
import g3 from "@/assets/gallery/gallery-3.webp";
import g4 from "@/assets/gallery/gallery-4.webp";
import g5 from "@/assets/gallery/gallery-5.webp";
import g7 from "@/assets/gallery/gallery-7.webp";
import g8 from "@/assets/gallery/gallery-8.webp";
import g9 from "@/assets/gallery/gallery-9.webp";
import g10 from "@/assets/gallery/gallery-10.webp";
import gTcn from "@/assets/gallery/gallery-tcn.webp";

const photos = [
  { src: g1, caption: "Visita técnica — Lubnor / Petrobras (Fortaleza)" },
  { src: g2, caption: "Porto de Mucuripe — Fortaleza, navio Express France" },
  { src: g3, caption: "Somos Petrobras — visita institucional" },
  { src: g4, caption: "Operação portuária em Itaqui — terminal de granéis" },
  { src: g5, caption: "Operação de Drone para Nuvem de Pontos" },
  { src: g7, caption: "Visita à Expolog" },
  { src: g8, caption: "Conhecendo a infraestrutura portuária" },
  { src: g9, caption: "Aprendizado em campo" },
  { src: g10, caption: "Networking & mentoria" },
  { src: gTcn, caption: "Visita técnica à empresa TCN — Terminal Corredor Norte" },
];

export const Gallery = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="galeria" className="relative bg-cream py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-copper">
            Bastidores
          </p>
          <h2 className="font-display text-4xl font-light text-balance text-foreground md:text-6xl">
            Momentos que <em className="italic text-copper">moldaram</em> minha jornada.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Visitas técnicas, operações em campo e encontros que transformaram teoria em prática.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[autoplay.current]}
            className="relative"
          >
            <CarouselContent>
              {photos.map((p, i) => (
                <CarouselItem key={i} className="md:basis-4/5">
                  <figure className="group relative overflow-hidden rounded-2xl border border-border shadow-elegant">
                    <div className="aspect-[16/10] overflow-hidden bg-forest-deep">
                      <img
                        src={p.src}
                        alt={p.caption}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent p-6 pt-16">
                      <p className="font-display text-sm italic text-cream md:text-base">
                        {p.caption}
                      </p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 bg-background/90 backdrop-blur" />
            <CarouselNext className="right-2 md:-right-12 bg-background/90 backdrop-blur" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
