import Image from "next/image"
import { Camera, Map, Search, Clapperboard, Building2, Zap } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Aerofilmagem",
    description:
      "Capturas aéreas cinematográficas em 4K para produções audiovisuais, publicidade e conteúdo digital com qualidade broadcast profissional.",
    image: "/images/service-aerofilm.jpg",
    href: null,
  },
  {
    icon: Map,
    title: "Mapeamento 3D e Inspeção de Fachadas",
    description:
      "Geração de ortomosáicos e modelos 3D digitais de prédios e infraestruturas com precisão centimétrica.",
    image: "/images/service-mapping.jpg",
    href: "https://harpex.com.br/mapeamento-fachada",
  },
  {
    icon: Search,
    title: "Inspeção Técnica Industrial",
    description:
      "Inspeção visual e termográfica de infraestruturas como torres, linhas de transmissão, painéis solares e fachadas.",
    image: "/images/service-inspection.jpg",
    href: null,
  },
  {
    icon: Clapperboard,
    title: "Acompanhamento de Obras",
    description:
      "Monitoramento aéreo periódico da obra, com imagens precisas em 3D para acompanhar o progresso, identificar desvios e apoiar decisões.",
    image: "/images/portfolio-1.jpg",
    href: null,
  },
  {
    icon: Building2,
    title: "Imobiliário",
    description:
      "Tours aéreos imersivos e fotos profissionais para empreendimentos, imobiliárias e construtoras que buscam diferenciação.",
    image: "/images/portfolio-4.jpg",
    href: null,
  },
  {
    icon: Zap,
    title: "Eventos ao Vivo",
    description:
      "Cobertura aérea em tempo real de eventos esportivos, corporativos e shows com transmissão ao vivo via streaming.",
    image: "/images/portfolio-3.jpg",
    href: null,
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center md:mb-20">
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <div className="h-px w-12 bg-primary md:w-16" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Nossos Serviços
            </span>
            <div className="h-px w-12 bg-primary md:w-16" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Soluções aéreas <span className="text-primary">completas</span>
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:mt-6 md:text-lg">
            Do conceito à entrega final, oferecemos um portfólio completo de serviços
            aéreos com drones para atender qualquer demanda.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const CardWrapper = service.href ? 'a' : 'div'
            const cardProps = service.href ? { href: service.href, target: "_blank", rel: "noopener noreferrer" } : {}

            return (
              <CardWrapper
                key={service.title}
                {...cardProps}
                className={`group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/50 ${service.href ? 'cursor-pointer' : ''}`}
              >
                <div className="relative h-48 overflow-hidden md:h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 transition-opacity duration-500 group-hover:bg-background/40" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center border border-primary/30 bg-background/80 backdrop-blur-sm">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-display text-lg font-bold text-foreground md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-3">
                    {service.description}
                  </p>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
