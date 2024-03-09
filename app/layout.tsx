import type { Metadata } from 'next'
import { textFont } from './fonts'

import Header from '@/components/header'
import HeaderLogo from '@/components/header-logo'
import './global.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Forent',
    default: 'Rent Property | Forent'
  },
  description: 'Forent is a convenient platform for rental properties for you! Start exploring and find your ideal rental today!',
  referrer: 'no-referrer',
  keywords: ['apartment', 'forent', 'lease', 'property', 'rent',],
  authors: { name: 'franthormel', url: 'mailto:fcaboyo@gmail.com' },
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
    <html lang="en" className={`${textFont.className}`}>
      <body>
        <div className='flex justify-between p-20'>
          <HeaderLogo />
          <div className='grid auto-cols-max grid-flow-col content-center gap-x-20'>
            {/* TODO: Create HeaderLink */}
            <Header value='Create Listing' />
            {/* TODO: Use HeaderLink */}
            <Header value='Sign In' />
          </div>
        </div>
        {children}
        <div className='flex p-20 border-t-2 border-gray-200'>
          <div className='grid auto-cols-max grid-flow-col content-center gap-x-20'>
            {/* TODO: Use HeaderLink */}
            <Header value='About' />
            {/* TODO: Use HeaderLink */}
            <Header value='Privacy' />
            {/* TODO: Use HeaderLink */}
            <Header value='Accessibility' />
            {/* TODO: Use HeaderLink */}
            <Header value='Sitemap' />
          </div>
        </div>
      </body>
    </html>
  )
}
