import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, Truck, Shield } from 'lucide-react';

// Import products data from Products.tsx
const products = [
  {
    id: 1,
    name: 'Professional Power Drill',
    category: 'Power Tools',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80',
    description: 'Heavy-duty professional grade power drill with variable speed control.',
    specs: [
      'Variable speed: 0-3000 RPM',
      'Chuck size: 13mm',
      'Power: 800W',
      'Weight: 2.4kg',
      'Includes carrying case'
    ]
  },
  {
    id: 2,
    name: 'Safety Helmet',
    category: 'Safety Equipment',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1578255321055-97314904c659?auto=format&fit=crop&q=80',
    description: 'OSHA-approved safety helmet with adjustable fit system.',
    specs: [
      'ANSI Z89.1-2014 certified',
      'Impact resistant',
      'UV protection',
      'Adjustable sizing: 6.5-8',
      'Available in multiple colors'
    ]
  },
  {
    id: 3,
    name: 'Premium Socket Set',
    category: 'Hand Tools',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1580402427914-a6cc60d7d44f?auto=format&fit=crop&q=80',
    description: '72-piece professional socket set with ratchet handles.',
    specs: [
      '72 pieces total',
      'Chrome vanadium steel',
      'Sizes: 1/4", 3/8", 1/2"',
      'Quick release mechanism',
      'Lifetime warranty'
    ]
  },
  {
    id: 4,
    name: 'Industrial Air Compressor',
    category: 'Equipment',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1616626625495-62641c17a61d?auto=format&fit=crop&q=80',
    description: '60-gallon vertical air compressor for industrial use.',
    specs: [
      'Tank size: 60 gallons',
      'Max PSI: 175',
      'Motor: 3.7 HP',
      'Voltage: 240V',
      'Two-stage pump'
    ]
  },
  {
    id: 5,
    name: 'Welding Machine',
    category: 'Equipment',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
    description: 'Professional MIG welder with digital display.',
    specs: [
      'Output range: 30-140A',
      'Duty cycle: 60% @ 90A',
      'Wire feed: 50-500 IPM',
      'Digital controls',
      'Thermal protection'
    ]
  },
  {
    id: 6,
    name: 'Premium Tool Belt',
    category: 'Safety Equipment',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80',
    description: 'Heavy-duty leather tool belt with multiple pockets.',
    specs: [
      'Genuine leather construction',
      '10 pockets and holders',
      'Padded comfort belt',
      'Fits waist size: 32-48"',
      'Steel buckle'
    ]
  }
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/products" className="text-blue-600 hover:underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          to="/products"
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 font-bold mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Specifications */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Specifications</h2>
            <ul className="space-y-2">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Truck className="text-blue-600" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-blue-600" />
              <span>Warranty</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700">
            <ShoppingCart className="w-5 h-5" />
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;