"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const drones = [
  {
    name: "DJI Mavic 4 Pro Creator",
    image: "/images/fleet-mavic4.jpg",
    specs: [
      "Sensor Hasselblad 4/3 CMOS",
      "Video 8K/30fps e 4K/120fps",
      "Autonomia de 46 minutos",
      "Ideal para aerofilmagem cinematografica",
    ],
  },
  {
    name: "DJI Matrice 4T Thermal",
    image: "/images/fleet-matrice4t.jpg",
    specs: [
      "Camera termica + visual + zoom",
      "Resolucao termica 640x512px",
      "Ideal para inspecao e mapeamento",
      "Autonomia de 42 minutos",
    ],
  },
  {
    name: "DJI Avata 2 FPV",
    image: "/images/fleet-avata2.jpg",
    specs: [
      "Sensor 1/1.3\" CMOS",
      "Video 4K/60fps estabilizado",
      "Voo imersivo em primeira pessoa",
      "Ideal para tomadas dinamicas e indoor",
    ],
  },
  {
    name: "DJI Mini 5 Pro",
    image: "/images/fleet-mini5pro.jpg",
    specs: [
      "Sensor 1\" CMOS",
      "Video 4K/60fps HDR",
      "Apenas 249g",
      "Ideal para operações urbanas e discretas",
    ],
  },
]

export function Fleet() {
  const [current, setCurrent] = useState(0)

  function next() {
    setCurrent((prev) => (prev + 1) % drones.length)
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + drones.length) % drones.length)
  }

  const drone = drones[current]

  return (
    <section id="frota" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-4 md:mb-16">
          <div className="h-px w-16 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Nossa Frota
          </span>
        </div>

        <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
          <span className="text-balance">
            {"Equipamentos de "}
            <span className="text-primary">alta performance</span>
          </span>
        </h2>
        <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:mb-16 md:text-lg">
          Operamos com drones DJI de ultima geracao, selecionados para atender
          cada tipo de demanda com maxima qualidade e seguranca.
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Drone image */}
          <div className="relative mx-auto aspect-[21/9] w-full max-w-4xl overflow-hidden rounded-lg bg-black">
            <Image
              src={drone.image}
              alt={drone.name}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:-left-5 md:h-12 md:w-12"
            aria-label="Drone anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:-right-5 md:h-12 md:w-12"
            aria-label="Proximo drone"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Drone info */}
        <div className="mt-8 text-center md:mt-12">
          <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
            {drone.name}
          </h3>
          <div className="mt-4 flex flex-wrap justify-center gap-3 md:mt-6 md:gap-4">
            {drone.specs.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground md:text-sm"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {drones.map((d, i) => (
            <button
              key={d.name}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ver ${d.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
