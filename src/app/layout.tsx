import '@/styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import { clsx } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Food Delivery Form',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <main className={clsx('h-screen w-full', alegreya.variable, pacifico.variable)}>{children}</main>
      </body>
    </html>
  )
}

const alegreya = localFont({
  variable: '--font-alegreya',
  display: 'swap',
  fallback: ['serif'],
  src: [
    { path: '../../public/fonts/Alegreya-VariableFont_wght.woff2', style: 'normal' },
    { path: '../../public/fonts/Alegreya-Italic-VariableFont_wght.woff2', style: 'italic' },
  ],
})

const pacifico = localFont({
  variable: '--font-pacifico',
  display: 'swap',
  fallback: ['cursive'],
  weight: '400',
  style: 'normal',
  src: '../../public/fonts/Pacifico-Regular.woff2',
})
