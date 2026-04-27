import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4 md:mb-16">
          <div className="h-px w-16 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Sobre Nós
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="/images/about-team.jpg"
                alt="Equipe HARPEX em set de filmagem profissional"
                width={1200}
                height={675}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-lg object-cover object-top"
              />
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">
                Dedicados à excelência em{" "}
                <span className="text-primary">imagens aéreas</span>
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-6 lg:gap-8">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              A HARPEX nasceu da paixão por capturar o mundo de uma perspectiva
              que poucos conseguem ver. Combinamos tecnologia de ponta com expertise
              cinematográfica para entregar imagens que contam histórias poderosas.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Com anos de experiência em aerofilmagem, nossa equipe entende que
              cada projeto exige uma abordagem única. Do planejamento ao produto
              final, garantimos resultados que superam expectativas.
            </p>

            <div className="mt-2 grid grid-cols-2 gap-4 md:gap-6">
              {[
                { number: "01", text: "Equipamentos de última geração" },
                { number: "02", text: "Pilotos certificados pela ANAC" },
                { number: "03", text: "Pós-produção cinematográfica" },
                { number: "04", text: "Cobertura em todo o Brasil" },
              ].map((item) => (
                <div key={item.number} className="flex gap-3 md:gap-4">
                  <span className="font-display text-xl font-bold text-primary md:text-2xl">
                    {item.number}
                  </span>
                  <span className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
