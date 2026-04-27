import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Bebas_Neue, DM_Sans, DM_Mono } from 'next/font/google'

import './globals.css'
import { MetaPixel } from '@/components/meta-pixel'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })
const _bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas', display: 'swap' })
const _dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const _dmMono = DM_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-dm-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'HARPEX | Aerofilmagem & Serviços com Drones',
  description: 'Capturamos o mundo de uma perspectiva única. Serviços profissionais de aerofilmagem, mapeamento aéreo, inspeção e fotogrametria com drones de última geração.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'HARPEX | Aerofilmagem & Serviços com Drones',
    description: 'Capturamos o mundo de uma perspectiva única. Serviços profissionais de aerofilmagem, mapeamento aéreo, inspeção e fotogrametria com drones de última geração.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HARPEX - Aerofilmagem & Serviços com Drones',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HARPEX | Aerofilmagem & Serviços com Drones',
    description: 'Capturamos o mundo de uma perspectiva única. Serviços profissionais de aerofilmagem, mapeamento aéreo, inspeção e fotogrametria com drones de última geração.',
    images: ['/images/og-image.png'],
  },
  other: {
    'facebook-domain-verification': 'bdffcybo2645d4b4xfv0trmmegktqc',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark" data-scroll-behavior="smooth">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} ${_bebasNeue.variable} ${_dmSans.variable} ${_dmMono.variable} font-sans antialiased grain-overlay`}>
        <MetaPixel />
        {children}
      </body>
    </html>
  )
}
