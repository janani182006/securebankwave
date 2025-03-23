
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SecurityFeatures from "@/components/home/SecurityFeatures";
import FeatureSection from "@/components/home/FeatureSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <SecurityFeatures />
        <FeatureSection />
        
        {/* Call to action section */}
        <section className="relative py-24 bg-gradient-to-r from-bank-blue to-bank-lightBlue text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to experience modern banking?
              </h2>
              <p className="text-white/90 mb-10 text-lg">
                Join thousands of customers who trust us with their banking needs. Get started in minutes with a seamless onboarding process.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/register"
                  className="bg-white text-bank-blue py-3 px-8 rounded-xl text-base font-medium transition-all shadow-lg hover:shadow-xl hover:bg-gray-100 flex items-center justify-center group"
                >
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/login"
                  className="bg-transparent text-white py-3 px-8 rounded-xl text-base font-medium transition-all border border-white/30 hover:bg-white/10 flex items-center justify-center"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
