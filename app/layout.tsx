import { Inter } from 'next/font/google'

import './globals.css';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="bg-white py-8 mx-auto px-6 lg:px-8">
              {children}
          </div>
        </main>
      </body>
    </html>
  )
}
