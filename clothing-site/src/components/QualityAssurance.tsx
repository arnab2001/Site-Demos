
import React from 'react';
import { Check } from "lucide-react";

const certifications = [
  {
    name: "GOTS Certified",
    description: "Global Organic Textile Standard certification for organic fabrics"
  },
  {
    name: "ISO 9001",
    description: "International standard for quality management systems"
  },
  {
    name: "OEKO-TEX®",
    description: "Tested for harmful substances and environmentally friendly production"
  },
  {
    name: "Fair Trade Certified",
    description: "Supporting fair wages and safe working conditions"
  }
];

const QualityAssurance = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-fabric-magenta font-medium">Our Standards</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Assurance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the highest quality fabrics that meet rigorous standards for sustainability, durability, and ethical production.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-fabric-purple/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-fabric-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-fabric-purple/10 rounded-full mb-4">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" 
                  alt="Quality Assurance Icon"
                  className="w-12 h-12" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Quality Promise</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Every fabric in our collection undergoes rigorous testing to ensure it meets our exacting standards. 
                From fiber quality to color fastness, we verify that each textile performs beautifully in its intended application.
              </p>
              <p className="text-gray-600">
                We stand behind every yard of fabric we sell with our satisfaction guarantee. If you're not completely 
                satisfied with your purchase, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
