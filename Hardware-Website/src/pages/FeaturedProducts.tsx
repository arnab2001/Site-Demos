// components/FeaturedProducts.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/productsData';

interface FeaturedProductsProps {
  limit?: number;
}

function FeaturedProducts({ limit }: FeaturedProductsProps) {
  // If a limit is provided, slice the products array to display only that many.
  const featuredProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <span className="text-blue-600 font-semibold">${product.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FeaturedProducts;
