
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import { Eye, EyeOff, CheckCircle, Shield, User, Mail, Phone, Lock } from "lucide-react";
import { toast } from "sonner";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.mobile) {
        toast.error("Please fill in all fields");
        return;
      }
      
      // Basic validation
      if (!formData.email.includes("@")) {
        toast.error("Please enter a valid email address");
        return;
      }
      
      if (formData.mobile.length < 10) {
        toast.error("Please enter a valid mobile number");
        return;
      }
      
      setStep(2);
    } else if (step === 2) {
      if (!formData.password || !formData.confirmPassword) {
        toast.error("Please fill in all fields");
        return;
      }
      
      if (formData.password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
      
      if (!agreed) {
        toast.error("Please agree to the terms and conditions");
        return;
      }
      
      // Simulate registration success
      toast.loading("Creating your account...");
      
      setTimeout(() => {
        toast.dismiss();
        setStep(3);
      }, 2000);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-bank-gray rounded-full">
                <Shield className="h-8 w-8 text-bank-blue" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-bank-text">Create Your Account</h1>
            <p className="text-bank-darkGray mt-2">
              Join us for secure and efficient banking
            </p>
          </div>
          
          {step < 3 && (
            <div className="flex mb-8 items-center justify-center">
              <Step number={1} active={step >= 1} completed={step > 1} title="Personal Details" />
              <StepConnector active={step > 1} />
              <Step number={2} active={step >= 2} completed={step > 2} title="Security Setup" />
            </div>
          )}
          
          <BlurCard className="p-8">
            {step === 1 && (
              <form onSubmit={handleNextStep} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-bank-text mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="input-field pl-10"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bank-text mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field pl-10"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-bank-text mb-1">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="input-field pl-10"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex justify-center mt-6"
                >
                  Next Step
                </button>
              </form>
            )}
            
            {step === 2 && (
              <form onSubmit={handleNextStep} className="space-y-5">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-bank-text mb-1">
                    Create Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="input-field pl-10 pr-10"
                      placeholder="Create a strong password"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-bank-darkGray mt-1">
                    Password must be at least 8 characters long with letters and numbers
                  </p>
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-bank-text mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="input-field pl-10 pr-10"
                      placeholder="Confirm your password"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      checked={agreed}
                      onChange={() => setAgreed(!agreed)}
                      className="h-4 w-4 text-bank-blue focus:ring-bank-blue border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-bank-darkGray">
                      I agree to the{" "}
                      <Link to="#" className="text-bank-blue hover:text-bank-lightBlue">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="#" className="text-bank-blue hover:text-bank-lightBlue">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            )}
            
            {step === 3 && (
              <div className="text-center py-6">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-green-50 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-bank-text mb-2">
                  Registration Successful!
                </h2>
                <p className="text-bank-darkGray mb-6">
                  Your account has been created successfully. You can now log in to access your account.
                </p>
                <Link to="/login" className="btn-primary block">
                  Proceed to Login
                </Link>
              </div>
            )}
          </BlurCard>
          
          {step < 3 && (
            <div className="text-center mt-6">
              <p className="text-bank-darkGray text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-bank-blue hover:text-bank-lightBlue font-medium">
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface StepProps {
  number: number;
  active: boolean;
  completed: boolean;
  title: string;
}

const Step = ({ number, active, completed, title }: StepProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`h-10 w-10 rounded-full flex items-center justify-center ${
          completed
            ? "bg-green-500 text-white"
            : active
            ? "bg-bank-blue text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        {completed ? <CheckCircle className="h-5 w-5" /> : number}
      </div>
      <div className="mt-2 text-xs text-center">
        <span
          className={
            active || completed ? "text-bank-text font-medium" : "text-gray-500"
          }
        >
          {title}
        </span>
      </div>
    </div>
  );
};

const StepConnector = ({ active }: { active: boolean }) => {
  return (
    <div className="w-20 h-0.5 mx-2 sm:mx-4 bg-gray-200">
      <div
        className={`h-full bg-bank-blue transition-all duration-300 ${
          active ? "w-full" : "w-0"
        }`}
      ></div>
    </div>
  );
};

export default Register;
