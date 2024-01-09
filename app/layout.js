import './globals.css'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'bg-white text-black antialiased'}>
        <SectionContainer>
          <Header />
          <main className={'mb-auto'}>{children}</main>
        </SectionContainer>
      </body>
    </html>
  )
}
