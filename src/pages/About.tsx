
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Users, Landmark, Clock } from "lucide-react";
import BlurCard from "@/components/ui/BlurCard";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-36 pb-20 bg-gradient-to-br from-bank-gray to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-bank-blue">SecureBank</span>
              </h1>
              <p className="text-lg text-bank-darkGray">
                Delivering innovative and secure banking solutions since 2010, we are committed to providing exceptional financial services to our customers.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Mission & Values</h2>
                <p className="text-bank-darkGray text-lg mb-8">
                  At SecureBank, our mission is to empower our customers with innovative financial solutions that enhance their lives and businesses. We combine cutting-edge technology with personalized service to create a banking experience that is both secure and convenient.
                </p>
                <p className="text-bank-darkGray mb-8">
                  Our core values guide everything we do:
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="p-2 bg-blue-50 rounded-lg text-bank-blue mr-4 mt-1 shadow-sm">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-bank-text">Integrity:</span>
                      <p className="text-bank-darkGray">We operate with honesty and transparency in all our dealings.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-2 bg-green-50 rounded-lg text-green-600 mr-4 mt-1 shadow-sm">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-bank-text">Customer Focus:</span>
                      <p className="text-bank-darkGray">We put our customers at the heart of everything we do.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600 mr-4 mt-1 shadow-sm">
                      <Landmark className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-bank-text">Innovation:</span>
                      <p className="text-bank-darkGray">We continuously evolve to meet the changing needs of our customers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-2 bg-orange-50 rounded-lg text-orange-600 mr-4 mt-1 shadow-sm">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-bank-text">Excellence:</span>
                      <p className="text-bank-darkGray">We strive for excellence in all our services and operations.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <BlurCard className="p-10" variant="gradient">
                <h3 className="text-2xl font-bold mb-6">Our Story</h3>
                <p className="text-bank-darkGray mb-5">
                  Founded in 2010, SecureBank began with a vision to transform the traditional banking experience by leveraging technology to make banking services more accessible, secure, and user-friendly.
                </p>
                <p className="text-bank-darkGray mb-5">
                  Over the years, we've grown from a small fintech startup to a trusted banking partner for thousands of individuals and businesses. Our journey has been marked by continuous innovation, strategic partnerships, and a relentless commitment to customer satisfaction.
                </p>
                <p className="text-bank-darkGray">
                  Today, we continue to pioneer digital banking solutions that set new standards in the industry, always with our customers' needs at the forefront of our efforts.
                </p>
              </BlurCard>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-bank-gray to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
              <p className="text-bank-darkGray max-w-2xl mx-auto text-lg">
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
                <BlurCard key={index} className="p-8" variant="gradient">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-bank-blue/10 rounded-full mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-bank-blue">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-bank-blue font-medium mb-4">{member.position}</p>
                    <p className="text-bank-darkGray">{member.bio}</p>
                  </div>
                </BlurCard>
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
