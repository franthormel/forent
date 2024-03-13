import type { Metadata } from 'next'
import { textFont } from './fonts'

import Header from '@/components/header'
import HeaderLink from '@/components/header-link'
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
            <HeaderLink value='Create Listing' link='/listings/create/' />
            <HeaderLink value='Sign In' link='/api/auth/signin' />
          </div>
        </div>
        {children}
        <div className='mt-20 flex border-t-2 border-gray-200 p-20'>
          <div className='grid auto-cols-max grid-flow-col content-center gap-x-20'>
            <Header value='About' />
            <Header value='Privacy' />
            <Header value='Accessibility' />
            <Header value='Sitemap' />
          </div>
        </div>
      </body>
    </html>
  )
}
