import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';

function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Industrial Supply</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over 25 years of experience, we're your trusted partner in industrial hardware and equipment.
            Our commitment to quality and service excellence sets us apart in the industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '25+', label: 'Years Experience' },
            { number: '10,000+', label: 'Products' },
            { number: '5,000+', label: 'Happy Clients' },
            { number: '99%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality',
                description: 'We provide only the highest quality products from trusted manufacturers.',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Your success is our priority. We\'re here to support your business needs.',
              },
              {
                icon: Globe,
                title: 'Sustainability',
                description: 'Committed to environmentally responsible business practices.',
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Constantly evolving to meet the changing needs of our industry.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                position: 'CEO',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
              },
              {
                name: 'Sarah Johnson',
                position: 'Operations Director',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
              },
              {
                name: 'Michael Chen',
                position: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            To provide innovative industrial solutions that empower businesses to achieve their goals,
            while maintaining the highest standards of quality, safety, and customer service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;