import { fetchProductById } from '@/lib/api';

export default async function ProductDetailPage({ params }) {
    const product = await fetchProductById(params.id);
    const { addToCart } = useCart();

    const handleBuy = () => {
        addToCart(product);
        alert(`${product.name} has been added to your cart!`);
    };

    return (
        
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={handleBuy}>Buy</button>
        </div>
    );
}