import React from 'react';
import { Wrench, TruckIcon, ClipboardCheck, HeadphonesIcon, Package, PenTool as Tool } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Tool,
      title: 'Equipment Rental',
      description: 'Short and long-term rental options for industrial equipment and tools.',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repair',
      description: 'Professional maintenance and repair services for industrial equipment.',
    },
    {
      icon: TruckIcon,
      title: 'Delivery Services',
      description: 'Fast and reliable delivery to your workplace or construction site.',
    },
    {
      icon: ClipboardCheck,
      title: 'Custom Orders',
      description: 'Specialized ordering service for bulk purchases and custom requirements.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Support',
      description: '24/7 technical support for all purchased equipment and tools.',
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Comprehensive inventory management solutions for businesses.',
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive industrial solutions to support your business needs.
            From equipment rental to technical support, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="mb-6">
            Contact our team to discuss your specific requirements and how we can help.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;