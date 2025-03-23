
import { ArrowRight, Shield, Lock, BarChart, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import BlurCard from "../ui/BlurCard";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bank-blue opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bank-blue opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-bank-gray text-bank-blue font-medium mb-2">
              <Shield className="h-4 w-4 mr-1" />
              <span>Secure & Reliable Banking</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bank-text leading-tight">
              Banking Made <span className="text-bank-blue">Simple</span> and <span className="text-bank-blue">Secure</span>
            </h1>
            
            <p className="text-lg text-bank-darkGray max-w-lg">
              Experience the next generation of online banking with state-of-the-art security and a seamless user interface designed for your convenience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/register"
                className="btn-primary flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/login"
                className="btn-secondary flex items-center justify-center"
              >
                Login to Account
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <BlurCard className="p-6">
                <div className="flex flex-col items-start">
                  <div className="p-3 bg-blue-50 rounded-lg text-bank-blue mb-4">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Secure Banking</h3>
                  <p className="text-bank-darkGray text-sm">
                    Advanced encryption and multi-factor authentication protect your financial data.
                  </p>
                </div>
              </BlurCard>
              
              <BlurCard className="p-6">
                <div className="flex flex-col items-start">
                  <div className="p-3 bg-green-50 rounded-lg text-green-600 mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Financial Insights</h3>
                  <p className="text-bank-darkGray text-sm">
                    Monitor your spending patterns and get real-time financial insights.
                  </p>
                </div>
              </BlurCard>
            </div>
            
            <div className="space-y-6 md:mt-12">
              <BlurCard className="p-6">
                <div className="flex flex-col items-start">
                  <div className="p-3 bg-purple-50 rounded-lg text-purple-600 mb-4">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Easy Payments</h3>
                  <p className="text-bank-darkGray text-sm">
                    Make instant transactions and manage your payments with ease.
                  </p>
                </div>
              </BlurCard>
              
              <BlurCard className="p-6">
                <div className="flex flex-col items-start">
                  <div className="p-3 bg-orange-50 rounded-lg text-orange-600 mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                  <p className="text-bank-darkGray text-sm">
                    Get assistance anytime with our dedicated customer support.
                  </p>
                </div>
              </BlurCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
