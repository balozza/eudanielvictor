import { motion } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="bg-background py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-copper">
            Vamos conversar
          </p>
          <h2 className="font-display text-4xl font-light text-balance md:text-6xl">
            Aberto a <em className="italic text-copper">novas conexões</em> e oportunidades.
          </h2>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/daanielvictor/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 font-medium text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-elegant"
            >
              <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
              LinkedIn
            </a>
            <a
              href="https://wa.me/5598981899103"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-copper px-8 py-4 font-medium text-cream shadow-copper transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              WhatsApp
            </a>
          </div>

          <p className="mt-16 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Daniel Victor · São Luís, Maranhão
          </p>
        </motion.div>
      </div>
    </section>
  );
};
