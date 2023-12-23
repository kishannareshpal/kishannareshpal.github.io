import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Providers } from './providers'
import classNames from 'classnames';
import './globals.scss'
import { Footer } from '@/libs/components/Footer';

const monaspaceFont = localFont({
  src: '../assets/fonts/Mona-Sans.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kishan Jadav',
  description: 'hello@kishanjadav.com',
  applicationName: 'Kishan',
  authors: [{ name: "Kishan Jadav", url: "https://kishanjadav.com" }],
  category: "Portfolio",
  twitter: {
    card: "summary",
    creator: "Kishan Jadav",
    description: "hello@kishanjadav.com",
    title: "Kishan Jadav",
    site: "https://kishanjadav.com"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(monaspaceFont.className, 'selection:bg-primary/25')}>
        <Providers>
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
