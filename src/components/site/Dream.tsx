import { motion } from "framer-motion";
import { Mountain } from "lucide-react";

export const Dream = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-forest py-32 text-cream">
      <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-copper/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-96 w-96 rounded-full bg-copper/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Mountain className="mx-auto h-10 w-10 text-copper-soft" strokeWidth={1.2} />
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-copper-soft">
            Meu sonho
          </p>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight text-balance md:text-6xl">
            Ser <em className="italic text-copper-soft">CEO</em> de uma grande
            companhia multinacional.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-cream/80">
            No futuro, quero liderar uma grande companhia multinacional, unindo
            minhas experiências de mercado e de vida em decisões que envolvem
            negócios e operações de ponta a ponta. Também sonho em fazer um
            intercâmbio na Itália.
          </p>
          <p className="mt-6 font-display text-xl italic text-copper-soft">
            "A sorte é o que acontece quando a preparação encontra a oportunidade."
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cream/60">
            — Sêneca
          </p>
        </motion.div>
      </div>
    </section>
  );
};
