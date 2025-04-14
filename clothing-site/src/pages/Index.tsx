
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import FeaturedCollection from '@/components/FeaturedCollection';
import BrandStory from '@/components/BrandStory';
import QualityAssurance from '@/components/QualityAssurance';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedCollection />
        <BrandStory />
        <QualityAssurance />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
