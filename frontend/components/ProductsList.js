import Image from 'next/image'

const products = [
    { name: 'Classic-Profile', image: '/classic.jpg', description: 'A timeless traditional style roof profile that complements any architectural style.' },
    { name: 'Shingle Profile', image: '/shingle.jpg', description: 'A rugged and textured profile that mimics the look of traditional shingle roofs.' },
    { name: 'Milano Profile', image: '/milano.jpg', description: 'An elegant and sophisticated profile inspired by Mediterranean architecture.' },
    { name: 'Roman Profile', image: '/roman.jpg', description: 'A bold and distinctive profile that adds a touch of grandeur to any structure.' },
]

export default function ProductsList() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {products.map((product) => (
                <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover" />
                    <div className='p-4'>
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
                    </div> 
                </div>
            ))}
        </div>
    )
}