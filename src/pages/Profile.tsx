
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import { User, Mail, Phone, Shield, MapPin, Check, AlertCircle, Edit2, Save, X, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

// Mock user data
const mockUserData = {
  fullName: "Rajesh Kumar",
  email: "rajesh.kumar@example.com",
  mobile: "+91 9876543210",
  address: "123, Park Street, Financial District, Mumbai",
  accountCreated: "January 15, 2020",
  lastLogin: "Today at 09:45 AM",
  kycStatus: "Verified",
  twoFactorEnabled: true,
};

const Profile = () => {
  const [editMode, setEditMode] = useState({
    personalInfo: false,
    contactInfo: false,
    securitySettings: false,
  });
  
  const [formData, setFormData] = useState({
    fullName: mockUserData.fullName,
    email: mockUserData.email,
    mobile: mockUserData.mobile,
    address: mockUserData.address,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleEditToggle = (section: keyof typeof editMode) => {
    setEditMode({
      ...editMode,
      [section]: !editMode[section],
    });
    
    // If canceling edit, reset form data for that section
    if (editMode[section]) {
      if (section === "personalInfo") {
        setFormData({
          ...formData,
          fullName: mockUserData.fullName,
        });
      } else if (section === "contactInfo") {
        setFormData({
          ...formData,
          email: mockUserData.email,
          mobile: mockUserData.mobile,
          address: mockUserData.address,
        });
      } else if (section === "securitySettings") {
        setFormData({
          ...formData,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    }
  };
  
  const handleSavePersonalInfo = () => {
    if (!formData.fullName) {
      toast.error("Full name cannot be empty");
      return;
    }
    
    toast.loading("Updating personal information...");
    
    setTimeout(() => {
      toast.dismiss();
      toast.success("Personal information updated successfully");
      setEditMode({
        ...editMode,
        personalInfo: false,
      });
    }, 1500);
  };
  
  const handleSaveContactInfo = () => {
    if (!formData.email || !formData.mobile || !formData.address) {
      toast.error("All fields are required");
      return;
    }
    
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    toast.loading("Updating contact information...");
    
    setTimeout(() => {
      toast.dismiss();
      toast.success("Contact information updated successfully");
      setEditMode({
        ...editMode,
        contactInfo: false,
      });
    }, 1500);
  };
  
  const handleSaveSecuritySettings = () => {
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      toast.error("All fields are required");
      return;
    }
    
    if (formData.newPassword.length < 8) {
      toast.error("New password must be at least 8 characters long");
      return;
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }
    
    toast.loading("Updating password...");
    
    setTimeout(() => {
      toast.dismiss();
      toast.success("Password updated successfully");
      setEditMode({
        ...editMode,
        securitySettings: false,
      });
      setFormData({
        ...formData,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bank-text">Profile Management</h1>
            <p className="text-bank-darkGray">View and update your personal information and settings</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div>
              <BlurCard className="p-6 flex flex-col items-center text-center mb-6">
                <div className="p-4 bg-bank-gray rounded-full mb-4">
                  <User className="h-10 w-10 text-bank-blue" />
                </div>
                <h2 className="text-xl font-bold text-bank-text">{mockUserData.fullName}</h2>
                <p className="text-bank-darkGray text-sm mt-1">{mockUserData.email}</p>
                <div className="inline-flex items-center mt-4 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                  <Check className="h-3 w-3 mr-1" />
                  KYC Verified
                </div>
              </BlurCard>
              
              <BlurCard className="p-6 mb-6">
                <h3 className="text-lg font-semibold text-bank-text mb-4">Account Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-bank-darkGray text-sm">Account Created</p>
                    <p className="font-medium text-bank-text">{mockUserData.accountCreated}</p>
                  </div>
                  <div>
                    <p className="text-bank-darkGray text-sm">Last Login</p>
                    <p className="font-medium text-bank-text">{mockUserData.lastLogin}</p>
                  </div>
                  <div>
                    <p className="text-bank-darkGray text-sm">Two-Factor Authentication</p>
                    <div className="flex items-center">
                      {mockUserData.twoFactorEnabled ? (
                        <span className="inline-flex items-center text-green-600">
                          <Check className="h-4 w-4 mr-1" />
                          Enabled
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-red-500">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          Disabled
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </BlurCard>
              
              <BlurCard className="p-6">
                <h3 className="text-lg font-semibold text-bank-text mb-4">Actions</h3>
                <div className="space-y-3">
                  <button 
                    className="w-full text-left px-4 py-2 rounded-md text-bank-blue hover:bg-bank-gray transition-colors flex items-center"
                    onClick={() => toast.info("View login history feature coming soon!")}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    View Login History
                  </button>
                  <button 
                    className="w-full text-left px-4 py-2 rounded-md text-bank-blue hover:bg-bank-gray transition-colors flex items-center"
                    onClick={() => toast.info("Document management feature coming soon!")}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Manage KYC Documents
                  </button>
                  <button 
                    className="w-full text-left px-4 py-2 rounded-md text-red-500 hover:bg-red-50 transition-colors flex items-center"
                    onClick={() => toast.info("Account deactivation feature coming soon!")}
                  >
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Deactivate Account
                  </button>
                </div>
              </BlurCard>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <BlurCard className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-bank-text">Personal Information</h2>
                  <button
                    onClick={() => handleEditToggle("personalInfo")}
                    className={`p-2 rounded-md ${
                      editMode.personalInfo
                        ? "text-red-500 hover:bg-red-50"
                        : "text-bank-blue hover:bg-bank-gray"
                    }`}
                  >
                    {editMode.personalInfo ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Edit2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-bank-darkGray mb-1">
                      Full Name
                    </label>
                    {editMode.personalInfo ? (
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="Enter your full name"
                        />
                      </div>
                    ) : (
                      <p className="text-bank-text font-medium p-2">{formData.fullName}</p>
                    )}
                  </div>
                </div>
                
                {editMode.personalInfo && (
                  <div className="mt-6">
                    <button
                      onClick={handleSavePersonalInfo}
                      className="btn-primary flex items-center"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                )}
              </BlurCard>
              
              {/* Contact Information */}
              <BlurCard className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-bank-text">Contact Information</h2>
                  <button
                    onClick={() => handleEditToggle("contactInfo")}
                    className={`p-2 rounded-md ${
                      editMode.contactInfo
                        ? "text-red-500 hover:bg-red-50"
                        : "text-bank-blue hover:bg-bank-gray"
                    }`}
                  >
                    {editMode.contactInfo ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Edit2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-bank-darkGray mb-1">
                      Email Address
                    </label>
                    {editMode.contactInfo ? (
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="Enter your email address"
                        />
                      </div>
                    ) : (
                      <p className="text-bank-text font-medium p-2">{formData.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-bank-darkGray mb-1">
                      Mobile Number
                    </label>
                    {editMode.contactInfo ? (
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="Enter your mobile number"
                        />
                      </div>
                    ) : (
                      <p className="text-bank-text font-medium p-2">{formData.mobile}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-bank-darkGray mb-1">
                      Address
                    </label>
                    {editMode.contactInfo ? (
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="input-field pl-10"
                          placeholder="Enter your address"
                        />
                      </div>
                    ) : (
                      <p className="text-bank-text font-medium p-2">{formData.address}</p>
                    )}
                  </div>
                </div>
                
                {editMode.contactInfo && (
                  <div className="mt-6">
                    <button
                      onClick={handleSaveContactInfo}
                      className="btn-primary flex items-center"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                )}
              </BlurCard>
              
              {/* Security Settings */}
              <BlurCard className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-bank-text">Security Settings</h2>
                  <button
                    onClick={() => handleEditToggle("securitySettings")}
                    className={`p-2 rounded-md ${
                      editMode.securitySettings
                        ? "text-red-500 hover:bg-red-50"
                        : "text-bank-blue hover:bg-bank-gray"
                    }`}
                  >
                    {editMode.securitySettings ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Edit2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                {editMode.securitySettings ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-bank-darkGray mb-1">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword.current ? "text" : "password"}
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="input-field pr-10"
                          placeholder="Enter your current password"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <button
                            type="button"
                            onClick={() => setShowPassword({ ...showPassword, current: !showPassword.current })}
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                          >
                            {showPassword.current ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-bank-darkGray mb-1">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword.new ? "text" : "password"}
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="input-field pr-10"
                          placeholder="Enter new password"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <button
                            type="button"
                            onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                          >
                            {showPassword.new ? (
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
                      <label className="block text-sm font-medium text-bank-darkGray mb-1">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword.confirm ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="input-field pr-10"
                          placeholder="Confirm new password"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <button
                            type="button"
                            onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                          >
                            {showPassword.confirm ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        onClick={handleSaveSecuritySettings}
                        className="btn-primary flex items-center"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Update Password
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-bank-gray rounded-lg">
                      <Shield className="h-5 w-5 text-bank-blue mr-3" />
                      <div>
                        <h3 className="text-bank-text font-medium">Password</h3>
                        <p className="text-bank-darkGray text-sm">
                          Your password was last changed 30 days ago
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-bank-gray rounded-lg">
                      <div className="flex items-center">
                        <div className="p-2 bg-green-50 rounded-full text-green-600 mr-3">
                          <Check className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-bank-text font-medium">Two-Factor Authentication</h3>
                          <p className="text-bank-darkGray text-sm">
                            Enhanced security for your account
                          </p>
                        </div>
                      </div>
                      <button
                        className="btn-secondary text-sm py-1"
                        onClick={() => toast.info("Two-factor authentication management coming soon!")}
                      >
                        Manage
                      </button>
                    </div>
                  </div>
                )}
              </BlurCard>
              
              {/* Security Alert */}
              <BlurCard className="p-6 border-l-4 border-orange-400">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-bank-text font-semibold">Security Recommendation</h3>
                    <p className="text-bank-darkGray mt-1">
                      We recommend changing your password regularly and using a unique password not used on other websites. 
                      Also, enable two-factor authentication for added security.
                    </p>
                  </div>
                </div>
              </BlurCard>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
