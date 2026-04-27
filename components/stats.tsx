"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Projetos Realizados" },
  { value: 12000, suffix: "+", label: "Horas de Voo" },
  { value: 150, suffix: "+", label: "Clientes Atendidos" },
  { value: 98, suffix: "%", label: "Taxa de Satisfação" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  const formatted = count >= 1000 ? `${(count / 1000).toFixed(count >= value ? 0 : 1)}k` : count

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-primary md:text-5xl lg:text-7xl">
      {formatted}
      {count >= value && suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section id="numeros" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center md:mb-20">
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <div className="h-px w-12 bg-primary md:w-16" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Em Números
            </span>
            <div className="h-px w-12 bg-primary md:w-16" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">
              Resultados que <span className="text-primary">falam por si</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 border border-border bg-card/50 p-4 text-center backdrop-blur-sm md:gap-4 md:p-8"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="h-px w-8 bg-primary/30 md:w-12" />
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
