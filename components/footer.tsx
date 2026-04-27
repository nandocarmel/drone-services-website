import { Instagram, Youtube, Linkedin } from "lucide-react"
import Image from "next/image"

const footerLinks = [
  {
    title: "Serviços",
    links: [
      { label: "Aerofilmagem", href: "#servicos" },
      { label: "Mapeamento Aéreo", href: "https://harpex.com.br/mapeamento-fachada" },
      { label: "Inspeção Técnica", href: "#servicos" },
      { label: "Produção Audiovisual", href: "#servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Certificações", href: "#contato" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "(11) 96458-2788", href: "https://wa.me/5511964582788?text=Ol%C3%A1%20tudo%20bem%3F%20Gostaria%20de%20obter%20um%20or%C3%A7amento." },
      { label: "contato@harpex.com.br", href: "mailto:contato@harpex.com.br" },
      { label: "São Paulo, SP", href: "#contato" },
    ],
  },
]

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="sm:col-span-2">
            <div className="flex items-center">
              <Image
                src="/images/logo-harpex.png"
                alt="HARPEX"
                width={338}
                height={85}
                sizes="200px"
                className="h-12 w-auto md:h-[73px]"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Capturamos o mundo de uma perspectiva única. Tecnologia de ponta
              e expertise cinematográfica em cada voo.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:mt-16 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {'© 2026 HARPEX. Todos os direitos reservados.'}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
