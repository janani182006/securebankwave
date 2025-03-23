
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isGeneratingOtp, setIsGeneratingOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleGenerateOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    setIsGeneratingOtp(true);
    
    // Simulate OTP generation delay
    setTimeout(() => {
      setIsGeneratingOtp(false);
      setOtpSent(true);
      toast.success("OTP sent to your registered mobile number");
    }, 1500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }
    
    if (otp.length !== 6) {
      toast.error("OTP must be 6 digits");
      return;
    }
    
    // Simulate login delay
    toast.loading("Verifying credentials...");
    
    setTimeout(() => {
      toast.dismiss();
      toast.success("Login successful");
      
      // Redirect to dashboard after successful login
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-bank-gray rounded-full">
                <Shield className="h-8 w-8 text-bank-blue" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-bank-text">Login to Your Account</h1>
            <p className="text-bank-darkGray mt-2">
              Access your banking dashboard securely
            </p>
          </div>
          
          <BlurCard className="p-8">
            {!otpSent ? (
              <form onSubmit={handleGenerateOtp} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bank-text mb-1">
                    Email / Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field pl-10"
                      placeholder="Enter your email or username"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-bank-text mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-field pl-10 pr-10"
                      placeholder="Enter your password"
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
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-bank-blue focus:ring-bank-blue border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-bank-darkGray">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link to="/forgot-password" className="text-bank-blue hover:text-bank-lightBlue">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex justify-center"
                  disabled={isGeneratingOtp}
                >
                  {isGeneratingOtp ? "Generating OTP..." : "Generate OTP"}
                </button>
                
                <div className="text-center mt-6">
                  <p className="text-bank-darkGray text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-bank-blue hover:text-bank-lightBlue font-medium">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-bank-text mb-1">
                    Enter OTP
                  </label>
                  <p className="text-bank-darkGray text-sm mb-3">
                    We've sent a 6-digit OTP to your registered mobile number
                  </p>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    className="input-field text-center text-lg tracking-widest"
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex justify-center"
                >
                  Login
                </button>
                
                <div className="text-center mt-4">
                  <p className="text-bank-darkGray text-sm mb-3">
                    Didn't receive the OTP?{" "}
                    <button 
                      type="button"
                      className="text-bank-blue hover:text-bank-lightBlue font-medium"
                      onClick={() => {
                        toast.info("Resending OTP...");
                        setTimeout(() => {
                          toast.success("New OTP sent to your mobile");
                        }, 1500);
                      }}
                    >
                      Resend OTP
                    </button>
                  </p>
                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="text-bank-blue hover:text-bank-lightBlue text-sm"
                  >
                    Go back to login
                  </button>
                </div>
              </form>
            )}
          </BlurCard>
          
          <div className="mt-8">
            <BlurCard className="p-4">
              <div className="flex items-start space-x-3">
                <div className="p-1 bg-blue-50 rounded-full text-bank-blue">
                  <Shield className="h-4 w-4" />
                </div>
                <p className="text-bank-darkGray text-xs">
                  For your security, we use two-factor authentication. Never share your OTP with anyone, including bank representatives.
                </p>
              </div>
            </BlurCard>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
