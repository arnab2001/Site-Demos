
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-white">
      <div className="container-custom flex flex-col md:flex-row items-center py-16 md:py-24 lg:py-32">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight">
            Quality Fabrics, <span className="text-fabric-purple">Superior Style</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Discover premium fabrics crafted with excellence for your perfect 
            creations, backed by generations of textile expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary flex items-center" size="lg">
              View Our Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary">
              Request Samples
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative z-10">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://plus.unsplash.com/premium_photo-1701157946903-57c2821d71b7?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Colorful luxury fabrics" 
              className="w-full object-cover h-[400px] md:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-fabric-purple">
              New Collection
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute top-20 right-1/3 w-72 h-72 bg-fabric-purple/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-fabric-magenta/10 rounded-full blur-3xl -z-0"></div>
    </div>
  );
};

export default Hero;
