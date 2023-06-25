import { ReactNode } from 'react'
import './globals.css'
import { Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import Header from './components/header'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Portfolio pessoal',
  description: 'Portifolio de Yuri Monteiro',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} overflow-x-hidden bg-gray-900 font-sans tracking-tight text-gray-100`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
