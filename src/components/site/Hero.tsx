import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import portrait from "@/assets/daniel-portrait.webp";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Decorative copper blob */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-copper/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-forest/5 blur-3xl" />

      <div className="container relative mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-8">
        {/* Left: text */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-copper"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
            Engenharia · Tecnologia · Processos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-light leading-[1.05] text-foreground text-balance md:text-7xl lg:text-8xl"
          >
            Daniel <em className="font-normal italic text-copper">Victor</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Gestor portuário, especialista em engenharia portuária e estudante de
            engenharia elétrica. Atuo na interseção entre logística, supply chain
            e tecnologia, transformando gargalos operacionais em soluções
            inteligentes que conectam processos, energia e dados de ponta a ponta.
          </motion.p>

          {/* Arrow indicator → bio */}
          <motion.a
            href="#biografia"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group mt-12 inline-flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-forest transition-colors hover:text-copper"
          >
            <span className="h-px w-12 bg-forest transition-all group-hover:w-20 group-hover:bg-copper" />
            Quem sou eu
            <ArrowDown className="h-4 w-4 animate-bounce-arrow" />
          </motion.a>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-copper opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/50 shadow-elegant">
            <img
              src={portrait}
              alt="Daniel Victor — retrato profissional"
              width={1195}
              height={1316}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/70 to-transparent p-6">
              <p className="font-display text-sm italic text-cream">
                "Logística inteligente é fazer cada elo da cadeia conversar, e decidir, em tempo real."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
