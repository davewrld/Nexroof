import Link from 'next/link';

export default function Home() {
  return (
  <main>
    <h1>Welcome to Our Roofing Company</h1>
    <Link href="/products">View Our Products</Link>
  </main>
  )
}