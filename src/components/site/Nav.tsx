import { useEffect, useState } from "react";
import { Linkedin, MessageCircle } from "lucide-react";

const links = [
  { href: "#biografia", label: "Biografia" },
  { href: "#projetos", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#contato", label: "Contato" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="font-display text-xl font-medium tracking-tight text-forest">
          Daniel<span className="text-copper">.</span>Victor
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-copper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/daanielvictor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-forest transition-all hover:-translate-y-0.5 hover:border-copper hover:text-copper"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/5598981899103"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-copper px-4 py-2 text-sm font-medium text-cream shadow-copper transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">Falar comigo</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
