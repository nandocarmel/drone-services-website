const items = [
  "AEROFILMAGEM",
  "MAPEAMENTO AÉREO",
  "INSPEÇÃO TÉCNICA",
  "FOTOGRAMETRIA",
  "EVENTOS",
  "IMOBILIÁRIO",
  "PUBLICIDADE",
  "CINEMA",
]

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden border-y border-border bg-secondary/50 py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {item}
            </span>
            <span className="text-primary">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
