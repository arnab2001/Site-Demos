import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, PenTool as Tool, Hammer, HardHat, Building2, Truck, Clock, Shield, Phone, Star } from 'lucide-react';
import FeaturedProducts from './FeaturedProducts';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Your Trusted Partner for Industrial Hardware & Supplies
            </h1>
            <p className="text-xl mb-8">
              Quality tools and equipment for professionals who demand the best.
            </p>
            <Link 
              to="/products" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              View Products <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <FeaturedProducts limit={4} />
          <div className="text-center mt-8">
            <Link 
              to="/products" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Products <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Tool, title: 'Tools', desc: 'Professional-grade hand & power tools' },
              { icon: Hammer, title: 'Fasteners', desc: 'Bolts, nuts, screws & more' },
              { icon: HardHat, title: 'Safety Gear', desc: 'Personal protective equipment' },
              { icon: Building2, title: 'Construction', desc: 'Building materials & supplies' },
            ].map((category, index) => (
              <Link 
                to="/products" 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <category.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Industrial Supply</h2>
              <p className="text-gray-600 mb-6">
                With over 25 years of experience, we're your trusted partner in industrial hardware and equipment.
                Our commitment to quality and service excellence sets us apart in the industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-600 font-semibold mt-8 hover:text-blue-700"
              >
                Learn More About Us <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                alt="Industrial Warehouse" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Fast Shipping', desc: 'Next-day delivery available' },
              { icon: Shield, title: 'Quality Assured', desc: 'All products certified' },
              { icon: Clock, title: '24/7 Support', desc: 'Always here to help' },
              { icon: Tool, title: 'Huge Selection', desc: '10,000+ products' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Anderson',
                company: 'Anderson Construction Co.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
                text: 'Industrial Supply has been our go-to partner for all construction equipment needs. Their quality and service are unmatched in the industry.',
              },
              {
                name: 'Sarah Martinez',
                company: 'Martinez Manufacturing',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
                text: 'The technical support and quick delivery times have helped us maintain our production schedules without any delays.',
              },
              {
                name: 'Michael Chang',
                company: 'Chang Industries',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
                text: 'Their inventory management solutions have streamlined our operations and reduced costs significantly.',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Testimonials <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Custom Solutions or Bulk Pricing?
          </h2>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
          >
            Contact Us <Phone className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
