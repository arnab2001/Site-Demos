
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Designer",
    company: "StyleHouse Couture",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The quality of fabrics from Fabric Fusion is unmatched. Their silks have been a game-changer for my latest collection, providing that perfect drape and luster I was looking for.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    company: "Modern Spaces",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "I've been sourcing upholstery fabrics from Fabric Fusion for years. Their selection of durable yet beautiful textiles has helped me create stunning interiors that stand the test of time.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Costume Designer",
    company: "Theatrical Creations",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    quote: "When I need specialty fabrics for productions, Fabric Fusion is my go-to. Their team always helps me find exactly what I need, even for the most challenging historical recreations.",
    rating: 4
  },
  {
    name: "James Wilson",
    role: "Apparel Manufacturer",
    company: "Wilson Garments",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "As a manufacturer, consistency is crucial. Fabric Fusion provides reliable quality across large orders, and their sustainable fabric options have helped us meet our eco-friendly goals.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const showPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const showNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-fabric-magenta font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from designers, makers, and businesses who trust our fabrics for their projects.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:flex space-x-6 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`flex-1 min-w-[300px] transition-opacity duration-300 ${
                  index >= currentIndex && index < currentIndex + 3 ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Mobile view - single testimonial */}
          <div className="md:hidden">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonials[currentIndex].quote}"</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={showPrev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={showNext}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
