
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, CreditCard, DollarSign, Download, Eye, EyeOff, LineChart, RefreshCcw, Send, Wallet } from "lucide-react";
import { toast } from "sonner";

// Mock data
const mockAccountData = {
  accountNumber: "XXXX XXXX 1234",
  accountType: "Savings Account",
  balance: 24586.75,
  available: 24386.75,
  holdAmount: 200.00,
  branch: "Financial District Branch",
  ifscCode: "SBIN0001234",
};

const mockTransactions = [
  {
    id: 1,
    date: "2023-06-05",
    description: "Salary Credit",
    amount: 35000,
    type: "credit",
  },
  {
    id: 2,
    date: "2023-06-03",
    description: "Electricity Bill Payment",
    amount: 1450,
    type: "debit",
  },
  {
    id: 3,
    date: "2023-06-02",
    description: "Online Shopping",
    amount: 2678.5,
    type: "debit",
  },
  {
    id: 4,
    date: "2023-06-01",
    description: "ATM Withdrawal",
    amount: 5000,
    type: "debit",
  },
  {
    id: 5,
    date: "2023-05-30",
    description: "Interest Credit",
    amount: 126.42,
    type: "credit",
  },
];

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const refreshBalance = () => {
    setIsRefreshing(true);
    toast.loading("Refreshing account balance...");
    
    setTimeout(() => {
      toast.dismiss();
      toast.success("Account balance updated");
      setIsRefreshing(false);
    }, 1500);
  };
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-bank-text">Account Summary</h1>
              <p className="text-bank-darkGray">View and manage your account details</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button 
                onClick={refreshBalance}
                disabled={isRefreshing}
                className="flex items-center px-4 py-2 text-bank-blue bg-white border border-bank-blue rounded-md hover:bg-bank-gray transition-colors"
              >
                <RefreshCcw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh
              </button>
              <Link 
                to="/statements"
                className="flex items-center px-4 py-2 bg-bank-blue text-white rounded-md hover:bg-bank-lightBlue transition-colors shadow-button hover:shadow-button-hover"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Statement
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Account Balance Card */}
              <BlurCard className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-bank-text">Account Balance</h2>
                  <button
                    onClick={() => setShowBalance(!showBalance)}
                    className="p-2 text-bank-darkGray hover:text-bank-blue transition-colors"
                  >
                    {showBalance ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-bank-darkGray text-sm">Available Balance</span>
                      <Wallet className="h-5 w-5 text-bank-blue" />
                    </div>
                    <div className="mt-2">
                      {showBalance ? (
                        <span className="text-2xl font-bold text-bank-text">
                          {formatCurrency(mockAccountData.available)}
                        </span>
                      ) : (
                        <span className="text-2xl font-bold text-bank-text">
                          *** *** ***
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4 bg-green-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-bank-darkGray text-sm">Total Balance</span>
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="mt-2">
                      {showBalance ? (
                        <span className="text-2xl font-bold text-bank-text">
                          {formatCurrency(mockAccountData.balance)}
                        </span>
                      ) : (
                        <span className="text-2xl font-bold text-bank-text">
                          *** *** ***
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-bank-darkGray border-b border-gray-100 pb-3">
                    <span>Account Number</span>
                    <span className="font-medium text-bank-text">{mockAccountData.accountNumber}</span>
                  </div>
                  <div className="flex justify-between text-sm text-bank-darkGray border-b border-gray-100 py-3">
                    <span>Account Type</span>
                    <span className="font-medium text-bank-text">{mockAccountData.accountType}</span>
                  </div>
                  <div className="flex justify-between text-sm text-bank-darkGray border-b border-gray-100 py-3">
                    <span>Branch</span>
                    <span className="font-medium text-bank-text">{mockAccountData.branch}</span>
                  </div>
                  <div className="flex justify-between text-sm text-bank-darkGray pt-3">
                    <span>IFSC Code</span>
                    <span className="font-medium text-bank-text">{mockAccountData.ifscCode}</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Link
                    to="#"
                    className="btn-primary flex items-center justify-center"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Fund transfer functionality coming soon!");
                    }}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Transfer Funds
                  </Link>
                  <Link
                    to="/statements"
                    className="btn-secondary flex items-center justify-center"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Statement
                  </Link>
                </div>
              </BlurCard>
              
              {/* Recent Transactions */}
              <BlurCard className="p-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-lg font-semibold text-bank-text">Recent Transactions</h2>
                  <Link 
                    to="/statements"
                    className="text-bank-blue text-sm font-medium flex items-center hover:text-bank-lightBlue transition-colors"
                  >
                    View All
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {mockTransactions.slice(0, 4).map((transaction) => (
                    <div 
                      key={transaction.id}
                      className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-card transition-shadow"
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full ${
                          transaction.type === "credit" ? "bg-green-50" : "bg-red-50"
                        }`}>
                          {transaction.type === "credit" ? (
                            <ArrowRight className={`h-5 w-5 text-green-500`} />
                          ) : (
                            <ArrowRight className={`h-5 w-5 text-red-500 transform rotate-180`} />
                          )}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-bank-text text-sm">{transaction.description}</p>
                          <p className="text-xs text-bank-darkGray">{formatDate(transaction.date)}</p>
                        </div>
                      </div>
                      <span className={`font-semibold ${
                        transaction.type === "credit" ? "text-green-600" : "text-red-500"
                      }`}>
                        {transaction.type === "credit" ? "+" : "-"}{formatCurrency(transaction.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </BlurCard>
            </div>
            
            <div className="space-y-6">
              {/* Quick Actions */}
              <BlurCard className="p-6">
                <h2 className="text-lg font-semibold text-bank-text mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <QuickAction 
                    icon={<Send className="h-5 w-5" />}
                    title="Transfer"
                    onClick={() => toast.info("Fund transfer functionality coming soon!")}
                  />
                  <QuickAction 
                    icon={<CreditCard className="h-5 w-5" />}
                    title="Pay Bills"
                    onClick={() => toast.info("Bill payment functionality coming soon!")}
                  />
                  <QuickAction 
                    icon={<LineChart className="h-5 w-5" />}
                    title="Analytics"
                    onClick={() => toast.info("Analytics functionality coming soon!")}
                  />
                  <QuickAction 
                    icon={<Download className="h-5 w-5" />}
                    title="Statement"
                    link="/statements"
                  />
                </div>
              </BlurCard>
              
              {/* Account Activity */}
              <BlurCard className="p-6">
                <h2 className="text-lg font-semibold text-bank-text mb-4">Account Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-bank-darkGray text-sm">Last Login</span>
                    <span className="text-bank-text font-medium text-sm">Today, 09:45 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-bank-darkGray text-sm">Login Location</span>
                    <span className="text-bank-text font-medium text-sm">New Delhi, IN</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-bank-darkGray text-sm">Login Device</span>
                    <span className="text-bank-text font-medium text-sm">Windows, Chrome</span>
                  </div>
                  <div className="pt-2">
                    <Link 
                      to="#"
                      className="text-bank-blue text-sm font-medium hover:text-bank-lightBlue transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Login history functionality coming soon!");
                      }}
                    >
                      View Login History
                    </Link>
                  </div>
                </div>
              </BlurCard>
              
              {/* Important Notice */}
              <BlurCard className="p-6 border-l-4 border-orange-400">
                <h2 className="text-lg font-semibold text-bank-text mb-2">Important Notice</h2>
                <p className="text-bank-darkGray text-sm">
                  For enhanced security, we're upgrading our systems on June 15th, 2023, from 2:00 AM to 4:00 AM. Online banking services may be temporarily unavailable during this time.
                </p>
                <Link 
                  to="#"
                  className="text-bank-blue text-sm font-medium mt-3 inline-block hover:text-bank-lightBlue transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info("Notice details will be available soon!");
                  }}
                >
                  Learn More
                </Link>
              </BlurCard>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  link?: string;
  onClick?: () => void;
}

const QuickAction = ({ icon, title, link, onClick }: QuickActionProps) => {
  if (link) {
    return (
      <Link
        to={link}
        className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-card hover:border-bank-blue/20 transition-all"
      >
        <div className="text-bank-blue mb-2">{icon}</div>
        <span className="text-sm font-medium text-bank-text">{title}</span>
      </Link>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-card hover:border-bank-blue/20 transition-all"
    >
      <div className="text-bank-blue mb-2">{icon}</div>
      <span className="text-sm font-medium text-bank-text">{title}</span>
    </button>
  );
};

export default Dashboard;
