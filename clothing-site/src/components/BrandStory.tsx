
import React from 'react';
import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="text-fabric-magenta font-medium">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Heritage of Quality & Craftsmanship</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1985, Fabric Fusion began as a small family-owned textile shop with a passion for quality fabrics. 
              Three generations later, we've grown into a premier fabric destination while maintaining our commitment to 
              craftsmanship and personal service.
            </p>
            <p className="text-gray-600 mb-6">
              Every fabric in our collection is carefully selected for its quality, sustainability, and design excellence. 
              We work directly with mills and artisans around the world to bring you unique textiles that inspire creativity.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button className="btn-primary">
                Learn More
              </Button>
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                        alt="Team member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="ml-4 text-gray-600">Meet our team</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1502550145-cd245e2ec6eb?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fabric artisan working"
                className="w-full h-[300px] object-cover"
              />
            </div>
            {/* <div className="absolute top-10 -right-5 bottom-10 left-10 border-2 border-fabric-purple rounded-lg z-10"></div> */}
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-fabric-magenta rounded-full opacity-20 z-20"></div>
            <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-fabric-orange rounded-full opacity-20 z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
