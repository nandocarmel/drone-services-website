"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Marcos Oliveira",
    role: "Diretor de Marketing, Construtora Prisma",
    text: "A HARPEX transformou completamente a forma como apresentamos nossos empreendimentos. As imagens aéreas deles são simplesmente cinematográficas. O resultado superou todas as nossas expectativas.",
    rating: 5,
  },
  {
    name: "Carolina Santos",
    role: "Produtora Executiva, Globo Filmes",
    text: "Profissionalismo impecável. A equipe entregou tomadas aéreas que elevaram toda a produção a outro patamar. A qualidade técnica e o olhar artístico são incomparáveis.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Engenheiro Chefe, EDP Energias",
    text: "As inspeções com drone reduziram nossos custos em 60% e aumentaram a segurança da equipe. A precisão dos dados e relatórios entregues é excepcional.",
    rating: 5,
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center md:mb-20">
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <div className="h-px w-12 bg-primary md:w-16" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Depoimentos
            </span>
            <div className="h-px w-12 bg-primary md:w-16" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">
              O que nossos <span className="text-primary">clientes</span> dizem
            </span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="border border-border bg-card/50 p-6 backdrop-blur-sm md:p-16">
            <div className="mb-6 font-display text-6xl leading-none text-primary/20 md:mb-8 md:text-8xl">
              {'"'}
            </div>

            <div className="mb-4 flex gap-1 md:mb-6">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary md:h-5 md:w-5" />
              ))}
            </div>

            <p className="mb-8 text-lg leading-relaxed text-foreground md:mb-10 md:text-2xl">
              {testimonials[active].text}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-base font-bold text-foreground md:text-lg">
                  {testimonials[active].name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {testimonials[active].role}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary md:h-12 md:w-12"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary md:h-12 md:w-12"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3 md:mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 transition-all duration-300 ${
                  i === active ? "w-8 bg-primary" : "w-4 bg-border"
                }`}
                aria-label={`Ver depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
