import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/Header'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'AB | Mauri',
  description: 'POC AB Mauri',
}
import { Toaster } from '@/components/ui/sonner'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">
        <Header />
        <div className="flex">
          <NavBar />
          <main className="relative top-16 h-[calc(100vh-4rem)] w-full flex-1 overflow-auto px-8 py-14 pb-16 shadow-inner shadow-secondary-foreground/10 sm:px-14">
            <div className="max-w-screen-3xl space-y-6">{children}</div>
          </main>
        </div>
        <Toaster richColors />
      </body>
    </html>
  )
}
