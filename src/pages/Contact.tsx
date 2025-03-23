
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import BlurCard from "@/components/ui/BlurCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Page Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-bank-blue">Us</span>
            </h1>
            <p className="text-lg text-bank-darkGray">
              Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
            </p>
          </div>
          
          {/* Contact Information & Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <BlurCard className="p-10" variant="gradient">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-xl text-bank-blue mr-4 shadow-sm">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-bank-darkGray">support@securebank.example</p>
                    <p className="text-bank-darkGray">info@securebank.example</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-green-50 rounded-xl text-green-600 mr-4 shadow-sm">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-bank-darkGray">Customer Support: (800) 123-4567</p>
                    <p className="text-bank-darkGray">General Inquiries: (800) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-purple-50 rounded-xl text-purple-600 mr-4 shadow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                    <p className="text-bank-darkGray">
                      123 Financial Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                <p className="text-bank-darkGray">Monday - Friday: 9:00 AM to 5:00 PM</p>
                <p className="text-bank-darkGray">Saturday: 9:00 AM to 1:00 PM</p>
                <p className="text-bank-darkGray">Sunday: Closed</p>
              </div>
            </BlurCard>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-bank-darkGray mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="rounded-xl py-3 px-4"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-bank-darkGray mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@example.com"
                      className="rounded-xl py-3 px-4"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-bank-darkGray mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="rounded-xl py-3 px-4"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-bank-darkGray mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your question or issue in detail..."
                      className="min-h-[180px] rounded-xl py-3 px-4"
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-bank-blue hover:bg-bank-lightBlue text-white py-3 px-4 rounded-xl">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
