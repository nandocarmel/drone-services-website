"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

const VIDEO_ID = "16kIY9pHC-4"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setVideoLoaded(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] items-end justify-center overflow-hidden pb-24 md:items-center md:pb-0">
      <div className="absolute inset-0 bg-background">
        {!videoLoaded && (
          <Image
            src="/images/hero-poster.jpg"
            alt="HARPEX Showreel"
            fill
            priority
            className="object-cover"
            unoptimized
          />
        )}
        {videoLoaded && (
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}?si=rN7QGRCbz0MN9oWz&autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3`}
            title="HARPEX Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-video h-auto w-[300%] max-w-none -translate-x-1/2 -translate-y-[60%] border-0 md:w-[177.78vh] md:-translate-y-[55%]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/90 md:bg-background/60" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent md:h-64" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/60 to-transparent md:from-background/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center md:py-32 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 flex items-center justify-center gap-4 md:mb-8">
            <div className="h-px w-8 bg-primary md:w-12" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary md:text-xs">
              Aerofilmagem Profissional
            </span>
            <div className="h-px w-8 bg-primary md:w-12" />
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="block text-balance">O mundo visto</span>
            <span className="block text-balance">
              de <span className="text-primary">outra perspectiva</span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white md:mt-8 md:text-xl">
            Capturamos imagens aéreas cinematográficas que transformam projetos
            em experiências visuais inesquecíveis.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-12">
            <a
              href="https://wa.me/5511964582788?text=Ol%C3%A1%20tudo%20bem%3F%20Gostaria%20de%20obter%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 border border-[#25D366] bg-[#25D366] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#1da851] hover:border-[#1da851] sm:w-auto"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="flex w-full items-center justify-center gap-3 border border-border px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-primary hover:text-primary sm:w-auto"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8">
        <a
          href="#sobre"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>

      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          HARPEX DRONES
        </span>
      </div>
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          EST. 2019
        </span>
      </div>
    </section>
  )
}
