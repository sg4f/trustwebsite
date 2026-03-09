export const runtime = 'edge'

import './globals.css'
import type { Metadata } from 'next'
import { clsx } from 'clsx'

export const metadata: Metadata = {
  title: 'SG4F — Play, Learn, Thrive.',
  description: 'SG4F turns community sport into verified outcomes with a visible verification loop.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx('min-h-screen flex flex-col')}>{children}</body>
    </html>
  )
}
