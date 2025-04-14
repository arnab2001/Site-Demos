
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    name: "Premium Silk Brocade",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1620832401018-30259b006ffe?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Best Seller",
    discount: true
  },
  {
    name: "Organic Cotton Blend",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1717127251642-869277aa5929?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1694690890465-8641019b47ca?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "New Arrival",
    discount: false
  },
  {
    name: "Handwoven Linen",
    price: 62.25,
    originalPrice: 89.99,
    image: "https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/USQB9W9F8JB9V9JZ6PTG7814S2W107952.png",
    badge: "30% Off",
    discount: true
  },
  {
    name: "Embroidered Wool",
    price: 58.75,
    image: "https://images.unsplash.com/photo-1694690890465-8641019b47ca?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Limited Stock",
    discount: false
  }
];

const FeaturedCollection = () => {
  return (
    <section id="featured" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-fabric-magenta font-medium">Top Picks</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after fabrics, showcasing this season's trends and timeless classics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-fabric-purple text-white">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">${product.price.toFixed(2)}/yd</span>
                  {product.discount && product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Button variant="outline" size="sm" className="text-fabric-purple border-fabric-purple hover:bg-fabric-purple/5">
                    View Details
                  </Button>
                  <Button size="sm" variant="ghost" className="text-fabric-purple hover:bg-fabric-purple/5">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="btn-primary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
