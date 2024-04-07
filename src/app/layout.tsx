import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Providers } from './providers'
import classNames from 'classnames';
import { Footer } from '@/libs/components/Footer';
import './globals.scss';
import { AppWrapper } from '@/libs/components/AppWrapper';

const monaspaceFont = localFont({
  src: '../assets/fonts/Mona-Sans.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kishan Jadav',
  applicationName: 'Kishan Jadav',
  description: 'hello@kishanjadav.com',
  authors: [{ name: "Kishan Jadav", url: "https://kishanjadav.com" }],
  keywords: ['kishan', 'nareshpal', 'jadav', 'KJ', 'software', 'developer', 'mozambique', 'exames', 'mz', '🇲🇿'],
  category: "Portfolio",
  creator: 'Kishan Jadav',
  publisher: 'Kishan Jadav',
  robots: 'index, follow',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Kishan Jadav',
  },
  twitter: {
    card: "summary",
    creator: "Kishan Jadav",
    description: "hello@kishanjadav.com",
    title: "Kishan Jadav",
    site: "https://kishanjadav.com",
  },
  metadataBase: new URL('https://kishanjadav.com')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-background selection:bg-primary/25'>
      <body className={classNames(monaspaceFont.className)}>
        <Providers>
          <AppWrapper>
            {children}
          </AppWrapper>
        </Providers>
      </body>
    </html>
  )
}
