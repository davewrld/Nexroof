import Image from "next/image";
import ProductsPreview from '@/components/ProductsPreview'
import Link from "next/link";

export default function Home() {
  return (
  <main>
    <section id="home" className="bg-gray-100 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Nexroof</h1>
      <p  className="text-x1 mb-8">Providing high quality sand-coated roofs for your home or business</p>
      <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">Contact Us</Link>
    </section>
    <ProductsPreview />
  </main>
  );
}
