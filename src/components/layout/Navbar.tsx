
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Shield, Lock, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-bank-blue transition-transform hover:scale-[1.02]"
        >
          <Shield className="h-8 w-8" />
          <span className="font-bold text-xl">SecureBankWave</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={isActive("/")}>
              Home
            </NavLink>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-bank-darkGray hover:text-bank-blue transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100">
                <div className="py-1">
                  <Link to="/statements" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account Statement</Link>
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account Summary</Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile Management</Link>
                </div>
              </div>
            </div>
            <NavLink to="/about" isActive={isActive("/about")}>
              About
            </NavLink>
            <NavLink to="/contact" isActive={isActive("/contact")}>
              Contact
            </NavLink>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              to="/login"
              className="inline-flex items-center px-5 py-2 border border-bank-blue text-bank-blue rounded-md text-sm font-medium transition-colors hover:bg-bank-gray"
            >
              <Lock className="mr-1 h-4 w-4" />
              Login
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center px-5 py-2 bg-bank-blue text-white rounded-md text-sm font-medium shadow-button hover:shadow-button-hover transition-all hover:bg-bank-lightBlue"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-bank-blue" />
          ) : (
            <Menu className="h-6 w-6 text-bank-blue" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg p-4 flex flex-col space-y-3 animate-fade-in">
          <NavLink to="/" isMobile isActive={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/statements" isMobile isActive={isActive("/statements")}>
            Account Statement
          </NavLink>
          <NavLink to="/dashboard" isMobile isActive={isActive("/dashboard")}>
            Account Summary
          </NavLink>
          <NavLink to="/profile" isMobile isActive={isActive("/profile")}>
            Profile
          </NavLink>
          <NavLink to="/about" isMobile isActive={isActive("/about")}>
            About
          </NavLink>
          <NavLink to="/contact" isMobile isActive={isActive("/contact")}>
            Contact
          </NavLink>
          <div className="pt-3 grid grid-cols-2 gap-3">
            <Link
              to="/login"
              className="py-2 text-center border border-bank-blue text-bank-blue rounded-md text-sm font-medium transition-colors hover:bg-bank-gray"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="py-2 text-center bg-bank-blue text-white rounded-md text-sm font-medium shadow-button hover:shadow-button-hover transition-all hover:bg-bank-lightBlue"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  isMobile?: boolean;
}

const NavLink = ({ to, children, isActive, isMobile = false }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "transition-colors",
        isMobile ? "block py-2" : "",
        isActive
          ? "text-bank-blue font-semibold"
          : "text-bank-darkGray hover:text-bank-blue"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
