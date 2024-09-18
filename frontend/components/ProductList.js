'use client'

import { useState, useEffect } from 'react';
import { fetchProducts } from '@/lib/api';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProductData();
    
}, []);

return (
<ul>
{products.map(product => (
<li key={product.id}>
{product.name} - ${product.price.toFixed(2)}
<button onClick={() => addToCart(product)}>Add to Cart</button>
</li>
))}
</ul>
);
}