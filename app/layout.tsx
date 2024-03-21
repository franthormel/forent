import type { Metadata } from 'next'
import { textFont } from './fonts'

import ButtonIconMenu from '@/components/button-icons/menu'
import Header from '@/components/header'
import HeaderAuth from '@/components/header/auth'
import HeaderLink from '@/components/header/link'
import HeaderLogo from '@/components/header/logo'
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
        {/* Header */}
        <div className='flex justify-between p-20'>
          {/* Header Logo */}
          <HeaderLogo />
          {/* Header Action(s) */}
          <div className='lg:hidden'>
            <ButtonIconMenu size={48} />
          </div>
          <div className='hidden auto-cols-max grid-flow-col content-center gap-x-20 lg:grid'>
            <HeaderLink value='Create Listing'
              href='/listings/create/'
              dataCyHeader='header-create-listing'
              dataCyHeaderLink='header-link-create-listing'
            />
            <HeaderAuth />
          </div>
        </div>
        {/* Content */}
        {children}
        {/* Footer */}
        <div className='mt-20 flex border-t-2 border-gray-200 p-20'>
          <div className='grid auto-cols-max grid-flow-col content-center gap-x-20'>
            <Header value='About' dataCyHeader='header-about' />
            <Header value='Privacy' dataCyHeader='header-privacy' />
            <Header value='Accessibility' dataCyHeader='header-a11y' />
            <Header value='Sitemap' dataCyHeader='header-sitemap' />
          </div>
        </div>
      </body>
    </html>
  )
}
