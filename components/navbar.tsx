"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Nossa Frota", href: "#frota" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8">
        <a href="#" className="flex items-center group">
          <Image
            src="/images/logo-harpex.png"
            alt="HARPEX"
            width={406}
            height={101}
            sizes="200px"
            className="h-12 w-auto brightness-100 transition-all duration-300 group-hover:brightness-125 md:h-[81px]"
            priority
            loading="eager"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5511964582788?text=Ol%C3%A1%20tudo%20bem%3F%20Gostaria%20de%20obter%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-none border border-[#25D366] bg-[#25D366] px-6 py-2.5 text-sm font-semibold tracking-wider text-white transition-all duration-300 hover:bg-[#1da851] hover:border-[#1da851] lg:block"
        >
          SOLICITAR ORÇAMENTO
        </a>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="py-3 text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511964582788?text=Ol%C3%A1%20tudo%20bem%3F%20Gostaria%20de%20obter%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileOpen(false)}
              className="mt-4 border border-[#25D366] bg-[#25D366] px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-all duration-300 hover:bg-[#1da851] hover:border-[#1da851]"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
