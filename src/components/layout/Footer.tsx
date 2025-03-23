
import { Link } from "react-router-dom";
import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-bank-blue" />
              <span className="font-bold text-lg text-bank-blue">SecureBankWave</span>
            </Link>
            <p className="text-bank-darkGray text-sm mt-4 leading-relaxed">
              Providing secure and innovative online banking solutions for all your financial needs.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-bank-text mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-bank-text mb-4">Banking</h3>
            <ul className="space-y-3">
              <FooterLink href="/login">Internet Banking</FooterLink>
              <FooterLink href="/dashboard">Account Summary</FooterLink>
              <FooterLink href="/statements">Account Statement</FooterLink>
              <FooterLink href="/profile">Profile Management</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-bank-text mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-bank-blue mt-0.5" />
                <span className="text-bank-darkGray text-sm">
                  123 Banking Street, Financial District, 
                  City - 560001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-bank-blue" />
                <span className="text-bank-darkGray text-sm">+91 1800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-bank-blue" />
                <span className="text-bank-darkGray text-sm">support@securebank.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SecureBankWave. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-500 hover:text-bank-blue transition-colors">
                Privacy Policy
              </span>
              <span className="text-sm text-gray-500 hover:text-bank-blue transition-colors">
                Terms of Service
              </span>
              <span className="text-sm text-gray-500 hover:text-bank-blue transition-colors">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <Link
        to={href}
        className="text-bank-darkGray text-sm hover:text-bank-blue transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

interface SocialIconProps {
  href: string;
  Icon: React.FC<{ className?: string }>;
}

const SocialIcon = ({ href, Icon }: SocialIconProps) => {
  return (
    <a
      href={href}
      className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-bank-darkGray hover:bg-bank-blue hover:text-white transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
};

export default Footer;
