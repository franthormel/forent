import type { Metadata } from 'next'
import { textFont } from './fonts'

import ButtonIconMenu from '@/components/button-icons/menu'
import Footer from '@/components/footer'
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
            {/* TODO: Show sidemenu when clicked */}
            <ButtonIconMenu size={48} />
          </div>
          <div className='hidden auto-cols-max grid-flow-col content-center gap-x-20 lg:grid'>
            <HeaderLink value='Create Listing'
              href='/listings/create/'
              dataCy='header-create-listing'
              dataCyHeaderLink='header-link-create-listing'
            />
            <HeaderAuth />
          </div>
        </div>
        {/* Content */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
