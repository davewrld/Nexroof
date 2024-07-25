import Image from 'next/image'
import { getProducts } from '@/lib/getProducts'

export default async function ProductsPreview() {
    const products = await getProducts()

    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Products Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.slice(0, 4).map((product) => (
                <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}