import type { Metadata } from 'next'
import './globals.css'

import Footer from './components/Footer'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Family Tree',
  description: 'A simple family tree UI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}