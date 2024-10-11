import type { Metadata } from 'next'

import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'AB | Mauri',
  description: 'POC AB Mauri',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
