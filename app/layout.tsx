import type { Metadata } from 'next'
import { dmSans } from './fonts'

import './global.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Forent',
    default: 'Forent'
  },
  description: 'Convenient platform for rental properties for you! Start exploring and find your ideal rental today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.className} p-12`}>
      <body>{children}</body>
    </html>
  )
}
