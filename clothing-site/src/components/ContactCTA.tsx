
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, MessageSquare } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-fabric-purple to-fabric-magenta text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Creations?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Connect with our fabric experts to find the perfect materials for your next project.
            Request samples, get quotes, or schedule a consultation today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <p className="mb-4 text-white/80">Speak directly with our fabric specialists</p>
              <a href="tel:+18005551234" className="font-medium hover:underline">
                (800) 555-1234
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p className="mb-4 text-white/80">Send us your questions or requirements</p>
              <a href="mailto:info@fabricfusion.com" className="font-medium hover:underline">
                info@fabricfusion.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Live Chat</h3>
              <p className="mb-4 text-white/80">Chat with our team in real-time</p>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
                Available 9am-6pm EST
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-fabric-purple hover:bg-white/90" size="lg">
              Request a Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              Order Samples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
