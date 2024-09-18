import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Roofing Company',
  description: 'Quality shingles for your roof',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
