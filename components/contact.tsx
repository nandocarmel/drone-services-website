"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const nome = (form.querySelector('[placeholder="Seu nome"]') as HTMLInputElement)?.value || ""
    const empresa = (form.querySelector('[placeholder="Sua empresa"]') as HTMLInputElement)?.value || ""
    const email = (form.querySelector('[placeholder="seu@email.com"]') as HTMLInputElement)?.value || ""
    const servico = (form.querySelector('select') as HTMLSelectElement)?.selectedOptions[0]?.text || ""
    const mensagem = (form.querySelector('textarea') as HTMLTextAreaElement)?.value || ""

    const texto = `*Novo contato via site HARPEX*%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*Empresa:* ${encodeURIComponent(empresa)}%0A*Email:* ${encodeURIComponent(email)}%0A*Serviço:* ${encodeURIComponent(servico)}%0A*Mensagem:* ${encodeURIComponent(mensagem)}`

    window.open(`https://wa.me/5511964582788?text=${texto}`, "_blank")

    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contato" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center md:mb-20">
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <div className="h-px w-12 bg-primary md:w-16" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Contato
            </span>
            <div className="h-px w-12 bg-primary md:w-16" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Pronto para <span className="text-primary">decolar</span>?
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:mt-6 md:text-lg">
            Conte-nos sobre seu projeto e receba um orçamento personalizado.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-2 lg:gap-8">
            <div className="border border-border bg-card/50 p-6 backdrop-blur-sm md:p-8">
              <h3 className="mb-4 font-display text-lg font-bold text-foreground md:mb-6 md:text-xl">
                Fale Conosco
              </h3>
              <div className="flex flex-col gap-5 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 bg-primary/5">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Telefone</p>
                    <a
                      href="https://wa.me/5511964582788?text=Ol%C3%A1%20tudo%20bem%3F%20Gostaria%20de%20obter%20um%20or%C3%A7amento."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      (11) 96458-2788
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 bg-primary/5">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="mt-1 text-sm text-muted-foreground">contato@harpex.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 bg-primary/5">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Localização</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      São Paulo, SP — Atendemos todo o Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card/50 p-6 backdrop-blur-sm md:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Certificações
              </p>
              <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
                {["ANAC", "DECEA", "RBAC-E 94", "Seguro RC"].map((cert) => (
                  <span
                    key={cert}
                    className="border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="border border-border bg-card/50 p-6 backdrop-blur-sm md:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                    placeholder="Sua empresa"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Serviço
                  </label>
                  <select className="w-full appearance-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary">
                    <option value="" className="bg-card text-foreground">Selecione um serviço</option>
                    <option value="aerofilmagem" className="bg-card text-foreground">Aerofilmagem</option>
                    <option value="mapeamento" className="bg-card text-foreground">Mapeamento Aéreo</option>
                    <option value="inspecao" className="bg-card text-foreground">Inspeção Técnica</option>
                    <option value="producao" className="bg-card text-foreground">Produção Audiovisual</option>
                    <option value="imobiliario" className="bg-card text-foreground">Imobiliário</option>
                    <option value="eventos" className="bg-card text-foreground">Eventos</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                    placeholder="Descreva seu projeto..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-3 border border-[#25D366] bg-[#25D366] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#1da851] hover:border-[#1da851] md:w-auto"
              >
                {isSubmitted ? (
                  "MENSAGEM ENVIADA!"
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    ENVIAR MENSAGEM
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
