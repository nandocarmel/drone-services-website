"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

export function VideoButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 rounded-full border-2 border-primary bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-95 md:px-10 md:py-5 md:text-base"
        >
          <Play className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" />
          Assistir Residencial Alto Padrão
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
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
    </>
  )
}
