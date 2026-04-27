"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

const projects = [
  {
    title: "Litoral Catarinense",
    category: "Aerofilmagem",
    image: "/images/portfolio-coastline.jpg",
    size: "large",
  },
  {
    title: "Torre Eólica Nordeste",
    category: "Inspeção Técnica",
    image: "/images/service-inspection.jpg",
    size: "small",
  },
  {
    title: "Residencial Alto Padrão",
    category: "Imobiliário",
    image: "/images/portfolio-4.jpg",
    size: "small",
  },
  {
    title: "Floresta Amazônica",
    category: "Mapeamento Aéreo",
    image: "/images/portfolio-2.jpg",
    size: "large",
  },
  {
    title: "Edifício Comercial SP",
    category: "Produção Audiovisual",
    image: "/images/portfolio-1.jpg",
    size: "small",
  },
  {
    title: "Festival de Música",
    category: "Eventos ao Vivo",
    image: "/images/portfolio-3.jpg",
    size: "small",
  },
]

function PortfolioCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className={`group relative overflow-hidden border border-border ${
        project.size === "large" ? "sm:row-span-2 aspect-[3/4]" : "aspect-[4/3]"
      }`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-background/20 transition-all duration-500 group-hover:bg-background/60" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-100 md:opacity-0 transition-all duration-500 group-hover:opacity-100 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {project.category}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold text-foreground md:text-2xl lg:text-3xl">
          {project.title}
        </h3>
      </div>
    </div>
  )
}

export function Portfolio() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="portfolio" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center md:mb-20">
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <div className="h-px w-12 bg-primary md:w-16" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Portfólio
            </span>
            <div className="h-px w-12 bg-primary md:w-16" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Projetos que <span className="text-primary">inspiram</span>
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:mt-6 md:text-lg">
            Cada projeto conta uma história. Explore as possibilidades de captação e veja como
            podemos transformar sua visão em realidade aérea.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Coluna esquerda item 1: Litoral Catarinense (large) */}
          <PortfolioCard project={projects[0]} />

          {/* Coluna direita item 1: Torre Eolica (small) */}
          <PortfolioCard project={projects[1]} />

          {/* Coluna direita item 2: Residencial Alto Padrao (small) */}
          <PortfolioCard project={projects[2]} />

          {/* Botao Assistir - abaixo do card Residencial Alto Padrao */}
          <div className="flex items-center justify-center sm:col-start-2">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="flex w-full items-center justify-center gap-3 border-2 border-primary bg-transparent px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-95"
            >
              <Play className="h-5 w-5" fill="currentColor" />
              Assistir
            </button>
          </div>

          {/* Coluna esquerda item 2: Floresta Amazonica (large) */}
          <PortfolioCard project={projects[3]} />

          {/* Coluna direita item 3: Edificio Comercial (small) */}
          <PortfolioCard project={projects[4]} />

          {/* Coluna direita item 4: Festival de Musica (small) */}
          <PortfolioCard project={projects[5]} />
        </div>
      </div>

      {/* Modal de Video */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
            aria-label="Fechar video"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/qKFT4VA7elU?si=hf_3Q_9cxfzTP1uw&autoplay=1"
              title="Residencial Alto Padrão"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full rounded-lg"
              style={{ border: 0 }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
