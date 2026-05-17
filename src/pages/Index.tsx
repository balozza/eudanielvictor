import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Biography } from "@/components/site/Biography";
import { Gallery } from "@/components/site/Gallery";
import { PortsMap } from "@/components/site/PortsMap";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Dream } from "@/components/site/Dream";
import { Contact } from "@/components/site/Contact";

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
        <Gallery />
        <PortsMap />
        <Projects />
        <Skills />
        <Dream />
        <Contact />
      </main>
    </>
  );
};

export default Index;
