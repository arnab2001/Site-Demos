
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-serif font-bold text-fabric-purple">
              Fabric<span className="text-fabric-magenta">Fusion</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
              Products
            </a>
            <a href="#featured" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
              Featured
            </a>
            <a href="#about" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700" />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-fabric-magenta text-[10px] font-medium text-white flex items-center justify-center">
                0
              </span>
            </Button>
            
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
                Home
              </a>
              <a href="#products" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
                Products
              </a>
              <a href="#featured" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
                Featured
              </a>
              <a href="#about" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-fabric-purple font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
