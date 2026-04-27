"use client"

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, X, ChevronDown, Phone, ArrowLeft, MessageCircle, Menu } from "lucide-react"

const whatsappLink = "https://wa.me/5511964582788?text=Ol%C3%A1%20tudo%20bem%3F%20Gostaria%20de%20obter%20um%20or%C3%A7amento."

// Funcao para enviar evento Lead via Meta CAPI
async function sendLeadEvent() {
  // Dispara evento no Pixel (client-side)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead')
  }

  // Envia evento via Conversions API (server-side)
  try {
    await fetch('/api/meta-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: 'Lead',
        event_source_url: window.location.href,
        user_data: {
          client_user_agent: navigator.userAgent,
        },
      }),
    })
  } catch (error) {
    console.error('[Meta CAPI] Error sending Lead event:', error)
  }
}

export default function MapeamentoFachadaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#080A0E] text-[#F0EDE8]">
      {/* 1. NAV FIXO */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,10,14,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Image
            src="/images/logo-harpex.png"
            alt="HARPEX"
            width={198}
            height={66}
            className="h-[52px] w-auto md:h-[62px]"
            priority
          />

          {/* Menu de navegação */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#inspecao-obrigatoria"
              className="font-sans text-sm text-[#8A8F9E] hover:text-[#C8A84B] transition-colors"
            >
              Inspeção é obrigatória?
            </a>
            <a
              href="#mapeamento-3d"
              className="font-sans text-sm text-[#8A8F9E] hover:text-[#C8A84B] transition-colors"
            >
              O que é o Mapeamento 3D?
            </a>
            <a
              href="#como-funciona"
              className="font-sans text-sm text-[#8A8F9E] hover:text-[#C8A84B] transition-colors"
            >
              Como funciona?
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#8A8F9E] hover:text-[#C8A84B] transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={sendLeadEvent}
              className="flex items-center gap-2 bg-[#25D366] text-black px-5 py-2.5 font-sans font-semibold text-sm hover:bg-[#1da851] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Me Chame Aqui</span>
              <span className="sm:hidden">Me Chame Aqui</span>
            </a>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[rgba(8,10,14,0.95)] border-t border-[rgba(255,255,255,0.08)]">
            <div className="px-4 py-4 flex flex-col gap-4">
              <a
                href="#inspecao-obrigatoria"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base text-[#F0EDE8] hover:text-[#C8A84B] transition-colors py-2"
              >
                Inspeção é obrigatória?
              </a>
              <a
                href="#mapeamento-3d"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base text-[#F0EDE8] hover:text-[#C8A84B] transition-colors py-2"
              >
                O que é o Mapeamento 3D?
              </a>
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base text-[#C8A84B] transition-colors py-2"
              >
                Como funciona?
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO */}
      <section className="relative min-h-[auto] md:min-h-screen flex items-center pt-20 bg-[#0D1018]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,168,75,0.1)_0%,transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Coluna de texto */}
            <div>
              {/* Badge pulsante */}
              <div className="inline-flex items-center gap-2 bg-[rgba(232,64,64,0.15)] border border-[rgba(232,64,64,0.4)] px-4 py-2 rounded-full mb-8 animate-pulse-red">
                <span className="h-2 w-2 bg-[#E84040] rounded-full" />
                <span className="font-sans text-sm text-[#E84040] font-medium">
                  AGORA É LEI - Inspeção Predial Obrigatória em São Paulo
                </span>
              </div>

              {/* Título H1 */}
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
                Sua fachada vista em <span className="text-[#C8A84B]">3D</span>.<br />
                Sem andaime.
              </h1>

              {/* Subtítulo */}
              <p className="font-sans text-lg md:text-xl text-[#8A8F9E] mb-8 leading-relaxed">
                Mapeamos cada centímetro da sua fachada com drone profissional,
                entregamos modelo 3D interativo e laudo técnico com ART - em até 7 dias úteis.
                Seguro, preciso e aceito por engenheiros, síndicos e prefeitura.
              </p>

              {/* Pills de benefícios */}
              <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                {[
                  "Sem andaime ou rapel",
                  "Precisão milimétrica",
                  "Laudo técnico com ART",
                  "Entrega em 7 dias úteis",
                ].map((benefit) => (
                  <span
                    key={benefit}
                    className="flex items-center gap-1 md:gap-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] px-2 md:px-4 py-1.5 md:py-2 rounded-full font-sans text-xs md:text-sm"
                  >
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-[#2ECC71] flex-shrink-0" />
                    <span className="truncate">{benefit}</span>
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={sendLeadEvent}
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-black px-8 py-4 font-sans font-bold text-base hover:bg-[#1da851] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Me Chame aqui
                </a>
                <a
                  href="#como-funciona"
                  className="flex items-center justify-center gap-2 border border-[rgba(255,255,255,0.15)] px-8 py-4 font-sans font-medium text-base hover:border-[#C8A84B] hover:text-[#C8A84B] transition-colors"
                >
                  Como funciona
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Coluna da imagem */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
                <Image
                  src="/images/hero-mapeamento-3d.jpg"
                  alt="Mapeamento 3D de Fachada com Drone"
                  width={500}
                  height={700}
                  className="w-full h-auto max-h-[400px] lg:max-h-[600px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TICKER ANIMADO */}
      <div className="bg-[#C8A84B] py-3 overflow-hidden">
        <div className="animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-block font-sans font-bold text-[#080A0E] text-sm tracking-wider">
              MAPEAMENTO 3D ◆ INSPEÇÃO DE FACHADA ◆ SEM ANDAIME ◆ LAUDO COM ART ◆ DRONE PROFISSIONAL ◆ SÃO PAULO E REGIÃO ◆ {" "}
            </span>
          ))}
        </div>
      </div>

      {/* 4. AGORA É LEI */}
      <section id="inspecao-obrigatoria" className="bg-[#131720] py-20 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          {/* Bloco de impacto */}
          <div className="bg-[rgba(200,26,26,0.06)] border border-[rgba(200,26,26,0.25)] rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* SVG Placa */}
              <div className="flex-shrink-0 animate-glow-red">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="55" stroke="#E84040" strokeWidth="6" fill="none" />
                  <line x1="25" y1="95" x2="95" y2="25" stroke="#F0EDE8" strokeWidth="6" />
                  <text x="60" y="30" textAnchor="middle" fill="#E84040" fontSize="10" fontFamily="DM Mono" fontWeight="bold">AGORA É LEI</text>
                </svg>
              </div>
              {/* Conteúdo */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block bg-[rgba(232,64,64,0.2)] text-[#E84040] font-sans text-xs uppercase tracking-wider px-3 py-1 rounded mb-4">
                  ⚠ ATENÇÃO - OBRIGAÇÃO LEGAL
                </span>
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                  A inspeção de fachadas é <span className="text-[#FF4444]">obrigatória!</span>
                </h2>
                <p className="font-sans text-[#8A8F9E] mb-4">
                  Leis municipais exigem vistoria periódica em prédios.
                </p>
                <p className="font-sans text-[#8A8F9E] text-sm mb-6">
                  Em São Paulo, edifícios com mais de 5 pavimentos ou área construída superior a 750m² devem realizar inspeção periódica de fachadas conforme legislação municipal e NBR 16.747.
                </p>

              </div>
            </div>
          </div>

          {/* Grid 2x2 */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Riscos para quem não faz", content: "Multas pesadas, processos judiciais, responsabilidade civil e criminal em caso de acidentes.", isRed: true },
              { title: "O que a lei exige", content: "Laudo técnico com ART ou RRT, seguindo a NBR 16.747 para inspeção de edificações.", isRed: false },
              { title: "Responsabilidade do síndico", content: "O síndico responde civil e criminalmente por omissão na manutenção predial.", isRed: true },
              { title: "São Paulo exige há anos", content: "A fiscalização está cada vez mais rigorosa. Não espere ser notificado.", isRed: false },
            ].map((card) => (
              <div
                key={card.title}
                className={`p-6 rounded-xl border ${card.isRed
                  ? "bg-[rgba(232,64,64,0.08)] border-[rgba(232,64,64,0.2)]"
                  : "bg-[#1A2030] border-[rgba(255,255,255,0.08)]"
                  }`}
              >
                <h3 className={`font-display font-bold text-2xl mb-3 ${card.isRed ? "text-[#E84040]" : "text-[#F0EDE8]"}`}>
                  {card.title}
                </h3>
                <p className="font-sans text-[#8A8F9E] text-sm leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>

          {/* Alerta Síndico */}
          <div className="mt-12 bg-[rgba(200,168,75,0.08)] border border-[rgba(200,168,75,0.25)] rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Texto */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#C8A84B] mb-6">
                  Atenção síndico. Sua fachada pode gerar:
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Multas de até R$ 50 mil por falta de inspeção",
                    "Risco de queda de revestimentos",
                    "Responsabilização judicial do síndico",
                    "Custos até 3x maiores sem prevenção",
                    "Desvalorização e insatisfação dos moradores",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-[#F0EDE8]">
                      <Check className="h-5 w-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-[#C8A84B] text-sm font-medium">
                  A Lei Municipal exige inspeção periódica (NBR 13752 / NR 5674)
                </p>
              </div>
              {/* Imagem */}
              <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
                <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
                  <Image
                    src="/images/fachada-deteriorada.jpg"
                    alt="Fachada de prédio com revestimento deteriorado"
                    width={320}
                    height={320}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROBLEMA vs SOLUÇÃO */}
      <section className="bg-[#080A0E] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12">
            O método antigo é <span className="text-[#8A8F9E]">ineficiente</span>.
          </h2>

          {/* Desktop: Imagens comparativas lado a lado */}
          <div className="hidden md:grid md:grid-cols-2 gap-4 mb-12">
            {/* Inspeção Tradicional */}
            <div className="relative rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
              <div className="absolute top-0 left-0 right-0 bg-[rgba(232,64,64,0.9)] py-3 px-4 z-10">
                <p className="font-display font-bold text-lg text-white text-center">Inspeção tradicional com risco</p>
              </div>
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/inspecao-tradicional.jpg"
                  alt="Inspeção tradicional de fachada com trabalhador em balancim - método com risco"
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Inspeção com Drone */}
            <div className="relative rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
              <div className="absolute top-0 left-0 right-0 bg-[rgba(46,204,113,0.9)] py-3 px-4 z-10">
                <p className="font-display font-bold text-lg text-white text-center">Inspeção com Drone sem risco</p>
              </div>
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/inspecao-drone.jpg"
                  alt="Inspeção de fachada com drone - método seguro sem risco"
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Cards lado a lado */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* Card Tradicional */}
            <div className="bg-[#131720] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl text-[#8A8F9E] mb-6">Inspeção Tradicional (andaime/rapel)</h3>
              <ul className="space-y-4">
                {[
                  "Custo de R$ 15.000 a R$ 40.000 ou mais",
                  "Processo lento: 1 a 3 semanas de obra",
                  "Alto risco de acidentes de trabalho",
                  "Cobertura parcial - só onde o balancim alcança",
                  "Barulho, sujeira e bloqueio das calçadas",
                  "Relatório subjetivo, sem medições precisas",
                  "Sem registro rastreável com coordenadas GPS"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-[#8A8F9E]">
                    <X className="h-5 w-5 text-[#E84040] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Harpex */}
            <div className="bg-[#1A2030] border-2 border-[#C8A84B] rounded-xl p-8">
              <div className="flex justify-center mb-4">
                <span className="bg-[#C8A84B] text-[#080A0E] font-sans font-bold text-xs px-3 py-1 rounded">
                  SOLUÇÃO HARPEX
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#C8A84B] mb-6">Mapeamento 3D com Drone - Harpex</h3>
              <ul className="space-y-4">
                {[
                  "Mais econômico que o método tradicional",
                  "Entrega do laudo em até 7 dias úteis",
                  "Zero risco - operação 100% remota",
                  "100% da fachada mapeada, sem exceção",
                  "Limpo, silencioso, sem transtorno para moradores",
                  "Modelo 3D + medições milimétricas automatizadas",
                  "Cada imagem com data, hora e coordenadas GPS"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-[#F0EDE8]">
                    <Check className="h-5 w-5 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile: Imagem + Card empilhados */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Inspeção Tradicional - Imagem + Card */}
            <div>
              <div className="relative rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)] mb-4">
                <div className="absolute top-0 left-0 right-0 bg-[rgba(232,64,64,0.9)] py-3 px-4 z-10">
                  <p className="font-display font-bold text-sm text-white text-center">Inspeção tradicional com risco</p>
                </div>
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/inspecao-tradicional.jpg"
                    alt="Inspeção tradicional de fachada com trabalhador em balancim - método com risco"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#131720] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <h3 className="font-display font-bold text-xl text-[#8A8F9E] mb-4">Inspeção Tradicional (andaime/rapel)</h3>
                <ul className="space-y-3">
                  {[
                    "Custo de R$ 15.000 a R$ 40.000 ou mais",
                    "Processo lento: 1 a 3 semanas de obra",
                    "Alto risco de acidentes de trabalho",
                    "Cobertura parcial - só onde o balancim alcança",
                    "Barulho, sujeira e bloqueio das calçadas",
                    "Relatório subjetivo, sem medições precisas",
                    "Sem registro rastreável com coordenadas GPS"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-[#8A8F9E]">
                      <X className="h-5 w-5 text-[#E84040] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inspeção com Drone - Imagem + Card */}
            <div>
              <div className="relative rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)] mb-4">
                <div className="absolute top-0 left-0 right-0 bg-[rgba(46,204,113,0.9)] py-3 px-4 z-10">
                  <p className="font-display font-bold text-sm text-white text-center">Inspeção com Drone sem risco</p>
                </div>
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/inspecao-drone.jpg"
                    alt="Inspeção de fachada com drone - método seguro sem risco"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#1A2030] border-2 border-[#C8A84B] rounded-xl p-6">
                <div className="flex justify-center mb-3">
                  <span className="bg-[#C8A84B] text-[#080A0E] font-sans font-bold text-xs px-3 py-1 rounded">
                    SOLUÇÃO HARPEX
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#C8A84B] mb-4">Mapeamento 3D com Drone - Harpex</h3>
                <ul className="space-y-3">
                  {[
                    "Mais econômico que o método tradicional",
                    "Entrega do laudo em até 7 dias úteis",
                    "Zero risco - operação 100% remota",
                    "100% da fachada mapeada, sem exceção",
                    "Limpo, silencioso, sem transtorno para moradores",
                    "Modelo 3D + medições milimétricas automatizadas",
                    "Cada imagem com data, hora e coordenadas GPS"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-[#F0EDE8]">
                      <Check className="h-5 w-5 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. O QUE É O MAPEAMENTO 3D */}
      <section id="mapeamento-3d" className="bg-[#131720] py-20 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-6">
            O que é o Mapeamento 3D de Fachada?
          </h2>
          <p className="font-sans text-[#8A8F9E] text-center max-w-3xl mx-auto mb-12">
            Utilizamos drones profissionais para capturar centenas de fotos de alta resolução.
            Essas imagens são processadas por software de fotogrametria, gerando um modelo 3D
            navegável da fachada com precisão milimétrica.
          </p>

          {/* Imagem do software de reconstrução 3D */}
          <div className="mb-12 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
            <Image
              src="/images/fachada-3d.jpg"
              alt="Software DroneDeploy mostrando reconstrução 3D de fachada com análise de desvio de superfície e mapa de calor"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Modelo 3D Navegável", desc: "Visualize toda a fachada em um ambiente 3D interativo, com zoom e rotação." },
              { num: "02", title: "Relatório Técnico com ART", desc: "Laudo completo assinado por engenheiro credenciado no CREA-SP." },
              { num: "03", title: "Rastreabilidade Total", desc: "Cada imagem possui data, hora e coordenadas GPS precisas." },
              { num: "04", title: "Medições Automáticas", desc: "Calcule distâncias, áreas e volumes diretamente no modelo 3D." },
              { num: "05", title: "Marcação de Patologias", desc: "Trincas, infiltrações e descolamentos identificados." },
              { num: "06", title: "Nuvem de Pontos 3D", desc: "Dados precisos para análises técnicas avançadas e projetos." },
            ].map((item) => (
              <div key={item.num} className="bg-[#1A2030] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 relative overflow-hidden">
                <span className="absolute -top-4 -right-2 font-display font-bold text-8xl text-[rgba(200,168,75,0.1)]">
                  {item.num}
                </span>
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-xl text-[#C8A84B] mb-2">{item.title}</h3>
                  <p className="font-sans text-[#8A8F9E] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TABELA COMPARATIVA */}
      <section className="bg-[#080A0E] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12">
            Veja a diferença lado a lado.
          </h2>

          <div className="w-full">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.15)]">
                  <th className="font-display font-bold text-sm md:text-xl text-left py-3 px-2 md:px-4 w-[22%] md:w-auto">Critério</th>
                  <th className="font-display font-bold text-sm md:text-xl text-left py-3 px-2 md:px-4 text-[#8A8F9E] w-[39%] md:w-auto">Método Tradicional</th>
                  <th className="font-display font-bold text-sm md:text-xl text-left py-3 px-2 md:px-4 text-[#C8A84B] w-[39%] md:w-auto">Harpex - Mapeamento 3D</th>
                </tr>
              </thead>
              <tbody className="font-sans text-xs md:text-sm">
                {[
                  { criterio: "Segurança", trad: "Alto risco de acidentes", harpex: "Zero risco - 100% remoto" },
                  { criterio: "Prazo", trad: "1 a 3 semanas", harpex: "Captura em horas + laudo em 7 dias" },
                  { criterio: "Custo", trad: "R$ 15.000 a R$ 40.000+", harpex: "Método mais econômico e preciso" },
                  { criterio: "Cobertura", trad: "Parcial - limitada", harpex: "100% da fachada mapeada" },
                  { criterio: "Precisão", trad: "Subjetiva - depende do inspetor", harpex: "Milimétrica - gerada por software" },
                  { criterio: "Transtorno", trad: "Barulho, sujeira, bloqueio", harpex: "Limpo, silencioso, sem interrupção" },
                  { criterio: "Relatório", trad: "Fotos sem rastreabilidade", harpex: "Modelo 3D + ART + GPS" },
                  { criterio: "Validade", trad: "Sem padrão definido", harpex: "Aceito por prefeitura e CREA" },
                ].map((row) => (
                  <tr key={row.criterio} className="border-b border-[rgba(255,255,255,0.08)]">
                    <td className="py-3 px-2 md:px-4 font-medium text-[#F0EDE8]">{row.criterio}</td>
                    <td className="py-3 px-2 md:px-4 text-[#E84040]">{row.trad}</td>
                    <td className="py-3 px-2 md:px-4 text-[#2ECC71]">{row.harpex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. COMO FUNCIONA */}
      <section id="como-funciona" className="bg-[#131720] py-20 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12">
            Como funciona na prática?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { num: "01", icon: "💬", title: "Contato e Orçamento", desc: "Fale conosco pelo WhatsApp e receba um orçamento personalizado em até 24 horas." },
              { num: "02", icon: "📅", title: "Agendamento", desc: "Escolha a melhor data para o voo. Sem interrupção nas atividades do condomínio." },
              { num: "03", icon: "🚁", title: "Voo Técnico", desc: "Piloto certificado ANAC executa o plano de voo, capturando centenas de fotos." },
              { num: "04", icon: "⚙️", title: "Processamento 3D", desc: "As imagens são processadas por software de fotogrametria gerando o modelo 3D." },
              { num: "05", icon: "📄", title: "Laudo Técnico com ART", desc: "Engenheiro parceiro credenciado no CREA-SP elabora o laudo completo." },
              { num: "06", icon: "✅", title: "Entrega e Suporte", desc: "Receba o modelo 3D, laudo e suporte para apresentação em assembleia." },
            ].map((step) => (
              <div key={step.num} className="bg-[#1A2030] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 relative overflow-hidden">
                <span className="absolute -top-4 -right-2 font-display font-bold text-8xl text-[rgba(200,168,75,0.1)]">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <span className="text-3xl mb-4 block">{step.icon}</span>
                  <h3 className="font-display font-bold text-xl text-[#F0EDE8] mb-2">{step.title}</h3>
                  <p className="font-sans text-[#8A8F9E] text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={sendLeadEvent}
              className="inline-flex items-center gap-2 bg-[#25D366] text-black px-8 py-4 font-sans font-bold text-base hover:bg-[#1da851] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Me Chame Aqui
            </a>
          </div>
        </div>
      </section>

      {/* 9. O QUE VOCÊ RECEBE */}
      <section className="bg-[#080A0E] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12">
            O que você recebe?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Modelo 3D Interativo Navegável",
              "ART Assinada",
              "Relatório com marcações de patologias",
              "Medidas e coordenadas",
              "Suporte na Apresentação",
              "Laudo em até 7 dias úteis",
            ].map((item) => (
              <div key={item} className="bg-[#131720] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(200,168,75,0.15)] border border-[#C8A84B] flex items-center justify-center">
                  <Check className="h-4 w-4 text-[#C8A84B]" />
                </div>
                <span className="font-sans text-[#F0EDE8] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSOS PROFISSIONAIS */}
      <section className="bg-[#131720] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12">
            Nossos Profissionais
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fernando - Piloto de Drone */}
            <div className="bg-[#1A2030] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/piloto-drone.jpg"
                  alt="Fernando Fonseca - Operador de Drone"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-[#F0EDE8] mb-1">Fernando Fonseca</h3>
                <p className="font-sans text-[#C8A84B] text-sm font-medium mb-4">Operador Drone RPA - Certificado ANAC</p>
                <p className="font-sans text-[#8A8F9E] text-sm leading-relaxed">
                  No ar desde 2017, Fernando acumula quase uma década operando drones profissionais em ambientes urbanos.
                  Trabalhou para empresas como Schlumberger e Odebrecht. Piloto certificado pela ANAC com formação técnica contínua,
                  é responsável por cada voo de mapeamento da Harpex - garantindo cobertura total da fachada, sobreposição precisa
                  de imagens e segurança absoluta para moradores e transeuntes.
                </p>
              </div>
            </div>

            {/* Otacílio - Engenheiro */}
            <div className="bg-[#1A2030] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/engenheiro-tecnico.jpg"
                  alt="Otacílio Leôncio da Silva Jr. - Engenheiro Civil"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-[#F0EDE8] mb-1">Otacílio Leôncio da Silva Jr.</h3>
                <p className="font-sans text-[#C8A84B] text-sm font-medium mb-4">Engenheiro Civil</p>
                <p className="font-sans text-[#8A8F9E] text-sm leading-relaxed">
                  O laudo de inspeção de fachadas da Harpex é elaborado pelo Eng. Civil Otacílio Leôncio - mestre em Engenharia Civil pela UERJ,
                  especialista em Estruturas de Concreto, Gestão de Projetos e professor universitário de Qualidade em Obras e Segurança do Trabalho.
                  Com mais de 40 anos de formação e prática em engenharia civil, ele assina cada ART com a responsabilidade técnica que seu condomínio exige.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PARA QUEM É */}
      <section className="bg-[#0D1018] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12">
            Para quem é este serviço?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏢", title: "Síndicos e Administradoras", desc: "Cumpra a lei, evite multas e proteja os moradores." },
              { icon: "👷", title: "Engenheiros e Arquitetos", desc: "Dados precisos para laudos técnicos e projetos de restauro." },
              { icon: "🏗️", title: "Construtoras e Incorporadoras", desc: "Documente a qualidade da fachada na entrega do empreendimento." },
              { icon: "🔧", title: "Empresas de Manutenção Predial", desc: "Diagnóstico completo antes de orçar serviços de reparo." },
              { icon: "⚖️", title: "Peritos e Seguradoras", desc: "Documentação rastreável e precisa para perícias técnicas." },
              { icon: "🏬", title: "Gestores de Imóveis Comerciais", desc: "Shoppings, hotéis, galpões e edificações de grande porte." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#1A2030] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 transition-all duration-300 hover:border-[#C8A84B] cursor-default"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-display font-bold text-xl text-[#F0EDE8] mb-2">{item.title}</h3>
                <p className="font-sans text-[#8A8F9E] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-[#080A0E] py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12">
            Ficou com dúvidas?
          </h2>

          <div className="space-y-4">
            {[
              { q: "A inspeção de fachada é realmente obrigatória em São Paulo?", a: "Sim. A legislação municipal de São Paulo, aliada à NBR 16.747, exige inspeção periódica de fachadas em prédios com mais de 5 pavimentos ou área construída superior a 750m². O não cumprimento pode gerar multas de até R$ 50.000 e responsabilidade civil e criminal do síndico." },
              { q: "O laudo da Harpex é aceito pela prefeitura, CREA e engenheiros?", a: "Sim. Nosso laudo técnico inclui ART (Anotação de Responsabilidade Técnica) assinada por engenheiro credenciado no CREA-SP, atendendo todas as exigências legais." },
              { q: "Quanto tempo leva o processo completo?", a: "A captura com drone leva de 2 a 6 horas, dependendo do tamanho do edifício. O processamento e elaboração do laudo técnico são entregues em até 7 dias úteis." },
              { q: "O mapeamento é seguro para os moradores?", a: "Sim, 100% seguro. A operação é totalmente remota, sem contato físico com o edifício. Nossos pilotos são certificados pela ANAC e seguimos todos os protocolos de segurança." },
              { q: "Qual o custo em comparação ao método tradicional?", a: "O mapeamento 3D com drone pode ser até 70% mais econômico que métodos tradicionais com andaime ou rapel. Solicite um orçamento personalizado para sua edificação." },
              { q: "O relatório serve para apresentar na assembleia?", a: "Sim. O modelo 3D interativo facilita muito a apresentação aos condôminos, permitindo visualizar claramente os pontos que necessitam de manutenção e justificando os investimentos necessários." },
              { q: "Vocês atendem em quais regiões?", a: "Nossa base é em São Paulo. Atendemos toda a Grande São Paulo e interior do estado. Para outras regiões, consulte disponibilidade pelo WhatsApp." },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#131720] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-sans font-medium text-[#F0EDE8] pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#C8A84B] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="font-sans text-[#8A8F9E] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA FINAL + FOOTER */}
      <section className="bg-[#131720] py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,168,75,0.1)_0%,transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="font-sans text-[#C8A84B] uppercase tracking-[0.2em] text-sm mb-4">
            Próximo passo
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
            Sua fachada merece um diagnóstico preciso.
          </h2>
          <p className="font-sans text-[#8A8F9E] text-lg mb-8">
            Solicite um orçamento gratuito agora.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={sendLeadEvent}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 font-sans font-bold text-lg hover:bg-[#1da851] transition-colors mb-10"
          >
            <MessageCircle className="h-6 w-6" />
            Solicitar Orçamento Gratuito pelo WhatsApp
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              "Orçamento sem compromisso",
              "Prazo garantido",
              "Laudo com ART incluso",
              "Pilotos certificados ANAC"
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 font-sans text-[#8A8F9E]">
                <Check className="h-4 w-4 text-[#2ECC71]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080A0E] border-t border-[rgba(255,255,255,0.08)] py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <Image
              src="/images/logo-harpex.png"
              alt="HARPEX"
              width={140}
              height={56}
              className="h-12 w-auto"
            />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
              <Link
                href="/"
                className="flex items-center gap-2 font-sans text-[#8A8F9E] hover:text-[#C8A84B] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para harpex.com.br
              </Link>
              <p className="font-sans text-[#8A8F9E] text-sm text-center">
                © 2026 HARPEX Drones · São Paulo, SP · ANAC · DEC · CEAR · BAC-E 94 · Seguro RC
              </p>
              <div className="flex items-center gap-4 font-sans text-sm">
                <Link href="#" className="text-[#8A8F9E] hover:text-[#C8A84B] transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="#" className="text-[#8A8F9E] hover:text-[#C8A84B] transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
