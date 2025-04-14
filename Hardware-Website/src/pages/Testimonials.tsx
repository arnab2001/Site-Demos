import React from 'react';
import { Star, Quote } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Anderson',
      company: 'Anderson Construction Co.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      text: 'Industrial Supply has been our go-to partner for all construction equipment needs. Their quality and service are unmatched in the industry.',
      rating: 5,
    },
    {
      name: 'Sarah Martinez',
      company: 'Martinez Manufacturing',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      text: 'The technical support and quick delivery times have helped us maintain our production schedules without any delays.',
      rating: 5,
    },
    {
      name: 'Michael Chang',
      company: 'Chang Industries',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      text: 'Their inventory management solutions have streamlined our operations and reduced costs significantly.',
      rating: 5,
    },
    {
      name: 'Emily Wilson',
      company: 'Wilson Engineering',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
      text: 'The quality of their products and professional service keep us coming back. A trusted partner in our success.',
      rating: 5,
    },
    {
      name: 'David Brown',
      company: 'Brown & Associates',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
      text: "Exceptional customer service and product knowledge. They've helped us find the right solutions for complex projects.",
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      company: 'Thompson Builders',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      text: 'Their commitment to safety and quality is evident in every interaction. A valuable partner for our construction needs.',
      rating: 5,
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their
            experience working with Industrial Supply.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
              
              {/* Customer Info */}
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

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="mb-6">
            Join our satisfied customers and discover why we're the trusted choice for industrial supplies.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;