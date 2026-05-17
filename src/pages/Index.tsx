import { lazy, Suspense } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Biography } from "@/components/site/Biography";

// Seções abaixo da dobra — carregadas sob demanda para acelerar o primeiro paint
const Gallery = lazy(() => import("@/components/site/Gallery").then((m) => ({ default: m.Gallery })));
const PortsMap = lazy(() => import("@/components/site/PortsMap").then((m) => ({ default: m.PortsMap })));
const Projects = lazy(() => import("@/components/site/Projects").then((m) => ({ default: m.Projects })));
const Skills = lazy(() => import("@/components/site/Skills").then((m) => ({ default: m.Skills })));
const Dream = lazy(() => import("@/components/site/Dream").then((m) => ({ default: m.Dream })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));

const SectionFallback = () => <div className="min-h-[60vh]" aria-hidden />;

const Index = () => {
  return (
    <>
      <title>Daniel Victor — Engenharia, Tecnologia & Processos Portuários</title>
      <meta
        name="description"
        content="Portfólio de Daniel Victor: gestor portuário, MBA em Engenharia Portuária e estudante de Engenharia Elétrica. Soluções de tecnologia para operações industriais e portuárias."
      />
      <link rel="canonical" href="/" />

      <main className="min-h-screen bg-background">
        <Nav />
        <Hero />
        <Biography />
        <Suspense fallback={<SectionFallback />}>
          <Gallery />
          <PortsMap />
          <Projects />
          <Skills />
          <Dream />
          <Contact />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
