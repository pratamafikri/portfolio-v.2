import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LanternPointer from './components/LanternPointer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fikri | Portfolio',
  description: 'Portfolio Website v.2',
  robots: 'noindex, nofollow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <LanternPointer />
        {children}
      </body>
    </html>
  )
}
