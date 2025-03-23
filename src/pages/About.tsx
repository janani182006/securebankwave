
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Users, Landmark, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-bank-text mb-6">
                About <span className="text-bank-blue">SecureBankWave</span>
              </h1>
              <p className="text-lg text-bank-darkGray">
                Delivering innovative and secure banking solutions since 2010, we are committed to providing exceptional financial services to our customers.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-bank-text mb-6">Our Mission & Values</h2>
                <p className="text-bank-darkGray mb-6">
                  At SecureBankWave, our mission is to empower our customers with innovative financial solutions that enhance their lives and businesses. We combine cutting-edge technology with personalized service to create a banking experience that is both secure and convenient.
                </p>
                <p className="text-bank-darkGray mb-6">
                  Our core values guide everything we do:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-bank-blue mr-3 mt-1" />
                    <span className="text-bank-darkGray"><strong>Integrity:</strong> We operate with honesty and transparency in all our dealings.</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-bank-blue mr-3 mt-1" />
                    <span className="text-bank-darkGray"><strong>Customer Focus:</strong> We put our customers at the heart of everything we do.</span>
                  </li>
                  <li className="flex items-start">
                    <Landmark className="h-5 w-5 text-bank-blue mr-3 mt-1" />
                    <span className="text-bank-darkGray"><strong>Innovation:</strong> We continuously evolve to meet the changing needs of our customers.</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-bank-blue mr-3 mt-1" />
                    <span className="text-bank-darkGray"><strong>Excellence:</strong> We strive for excellence in all our services and operations.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-bank-text mb-4">Our Story</h3>
                <p className="text-bank-darkGray mb-4">
                  Founded in 2010, SecureBankWave began with a vision to transform the traditional banking experience by leveraging technology to make banking services more accessible, secure, and user-friendly.
                </p>
                <p className="text-bank-darkGray mb-4">
                  Over the years, we've grown from a small fintech startup to a trusted banking partner for thousands of individuals and businesses. Our journey has been marked by continuous innovation, strategic partnerships, and a relentless commitment to customer satisfaction.
                </p>
                <p className="text-bank-darkGray">
                  Today, we continue to pioneer digital banking solutions that set new standards in the industry, always with our customers' needs at the forefront of our efforts.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bank-text mb-4">Our Leadership Team</h2>
              <p className="text-bank-darkGray max-w-2xl mx-auto">
                Meet the experienced professionals who guide our organization with vision, expertise, and a commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  position: "Chief Executive Officer",
                  bio: "With over 20 years of experience in banking and fintech, Sarah leads our company with vision and integrity."
                },
                {
                  name: "Michael Chen",
                  position: "Chief Technology Officer",
                  bio: "Michael drives our technological innovation, ensuring our platform remains at the cutting edge of digital banking."
                },
                {
                  name: "Priya Sharma",
                  position: "Chief Financial Officer",
                  bio: "Priya brings financial expertise and strategic insight to our operations and growth planning."
                },
                {
                  name: "David Williams",
                  position: "Chief Operations Officer",
                  bio: "David ensures our banking operations run smoothly and efficiently, delivering exceptional service to our customers."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-bank-text text-center">{member.name}</h3>
                  <p className="text-bank-blue text-center mb-3">{member.position}</p>
                  <p className="text-bank-darkGray text-center text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
