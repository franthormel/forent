import type { Metadata } from 'next'
import { textFont } from './fonts'

import './global.css'
import NavigationMenu from '@/components/home/NavigationMenu'

export const metadata: Metadata = {
  title: {
    template: '%s | Forent',
    default: 'Rent Property | Forent'
  },
  description: 'Forent is a convenient platform for rental properties for you! Start exploring and find your ideal rental today!',
  referrer: 'no-referrer',
  keywords: ['apartment', 'forent', 'lease', 'property', 'rent',],
  authors: { name: 'Francis Anthony Carmel', url: 'mailto:fcaboyo@gmail.com' },
  creator: 'franthormel',
  publisher: 'franthormel',
  openGraph: {
    title: {
      template: '%s | Forent',
      default: 'Rent Property | Forent'
    },
    type: 'website',
    description: 'Forent is a convenient platform for rental properties for you! Start exploring and find your ideal rental today!',
    locale: 'en_US',
    siteName: 'Forent',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${textFont.className} p-10`}>
      <body className='flex flex-col gap-5'>
        <NavigationMenu />
        {children}
      </body>
    </html>
  )
}
