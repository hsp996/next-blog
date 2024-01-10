import './globals.css'
import React from 'react'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import ThemeProviders from '@/components/ThemeProviders'
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'bg-white text-black antialiased dark:bg-gray-950 dark:text-white'}>
        <ThemeProviders>
          <SectionContainer>
            <div className={'flex h-screen flex-col justify-between font-sans'}>
              <Header />
              <main className={'mb-auto'}>{children}</main>
            </div>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
