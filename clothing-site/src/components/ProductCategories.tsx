
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Ethnic",
    image: "https://images.unsplash.com/photo-1731167709718-d980c90f4edc?q=80&w=4078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Traditional patterns and cultural designs"
  },
  {
    name: "Casual",
    image: "https://images.unsplash.com/photo-1686293295546-f07e55681118?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable everyday fabrics"
  },
  {
    name: "Formal",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&auto=format&fit=crop&q=80",
    description: "Elegant fabrics for special occasions"
  },
  {
    name: "Seasonal",
    image: "https://images.unsplash.com/photo-1619032561786-ff6c371e0c74?q=80&w=3923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Perfect for the current season"
  }
];

const ProductCategories = () => {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our diverse range of high-quality fabric categories, each carefully curated for your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600">{category.description}</p>
                <a 
                  href="#" 
                  className="mt-3 inline-block text-fabric-purple font-medium hover:underline"
                >
                  View Collection
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
