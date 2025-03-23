
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import { ArrowRight, Calendar, Download, FileText, Filter, Printer, Search } from "lucide-react";
import { toast } from "sonner";

// Mock transaction data
const mockTransactions = [
  {
    id: 1,
    date: "2023-06-05",
    description: "Salary Credit",
    reference: "NEFT-ABCDE12345",
    amount: 35000,
    type: "credit",
    balance: 56789.25,
  },
  {
    id: 2,
    date: "2023-06-03",
    description: "Electricity Bill Payment",
    reference: "BILLPAY-EL12345",
    amount: 1450,
    type: "debit",
    balance: 21789.25,
  },
  {
    id: 3,
    date: "2023-06-02",
    description: "Online Shopping - Amazon",
    reference: "UPI-AMZN12345",
    amount: 2678.5,
    type: "debit",
    balance: 23239.25,
  },
  {
    id: 4,
    date: "2023-06-01",
    description: "ATM Withdrawal",
    reference: "ATM-DELHI-098765",
    amount: 5000,
    type: "debit",
    balance: 25917.75,
  },
  {
    id: 5,
    date: "2023-05-30",
    description: "Interest Credit",
    reference: "INT-CREDIT-1234",
    amount: 126.42,
    type: "credit",
    balance: 30917.75,
  },
  {
    id: 6,
    date: "2023-05-28",
    description: "Mobile Recharge",
    reference: "UPI-MOBREC-12345",
    amount: 599,
    type: "debit",
    balance: 30791.33,
  },
  {
    id: 7,
    date: "2023-05-25",
    description: "Fund Transfer to John",
    reference: "IMPS-98765-ABCDE",
    amount: 2500,
    type: "debit",
    balance: 31390.33,
  },
  {
    id: 8,
    date: "2023-05-20",
    description: "Insurance Premium",
    reference: "AUTOPAY-LIC12345",
    amount: 3200,
    type: "debit",
    balance: 33890.33,
  },
  {
    id: 9,
    date: "2023-05-15",
    description: "Credit Card Payment",
    reference: "CCPAY-SBI-12345",
    amount: 5000,
    type: "debit",
    balance: 37090.33,
  },
  {
    id: 10,
    date: "2023-05-10",
    description: "Mutual Fund Investment",
    reference: "MF-SIP-12345",
    amount: 2000,
    type: "debit",
    balance: 42090.33,
  },
  {
    id: 11,
    date: "2023-05-05",
    description: "Salary Credit",
    reference: "NEFT-ABCDE12346",
    amount: 35000,
    type: "credit",
    balance: 44090.33,
  },
  {
    id: 12,
    date: "2023-05-02",
    description: "Rent Payment",
    reference: "NEFT-RENT-12345",
    amount: 15000,
    type: "debit",
    balance: 9090.33,
  },
];

const Statements = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [dateRange, setDateRange] = useState({
    from: "2023-05-01",
    to: "2023-06-15",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  // Filter transactions based on current filters
  const filteredTransactions = mockTransactions.filter((transaction) => {
    // Filter by transaction type
    if (selectedType !== "all" && transaction.type !== selectedType) {
      return false;
    }
    
    // Filter by date range
    const transactionDate = new Date(transaction.date);
    const fromDate = new Date(dateRange.from);
    const toDate = new Date(dateRange.to);
    
    if (transactionDate < fromDate || transactionDate > toDate) {
      return false;
    }
    
    // Filter by search term
    if (
      searchTerm &&
      !transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !transaction.reference.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    
    return true;
  });
  
  // Pagination logic
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
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
  
  const handleDownloadStatement = () => {
    toast.loading("Preparing your statement...");
    
    setTimeout(() => {
      toast.dismiss();
      toast.success("Statement has been generated");
    }, 2000);
  };
  
  const handlePrintStatement = () => {
    toast.info("Preparing print view...");
    
    setTimeout(() => {
      window.print();
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-bank-text">Account Statement</h1>
              <p className="text-bank-darkGray">View and download your transaction history</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button 
                onClick={handlePrintStatement}
                className="flex items-center px-4 py-2 text-bank-blue bg-white border border-bank-blue rounded-md hover:bg-bank-gray transition-colors shadow-button"
              >
                <Printer className="h-4 w-4 mr-2" />
                Print
              </button>
              <button 
                onClick={handleDownloadStatement}
                className="flex items-center px-4 py-2 bg-bank-blue text-white rounded-md hover:bg-bank-lightBlue transition-colors shadow-button hover:shadow-button-hover"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
          
          {/* Filters */}
          <BlurCard className="p-6 mb-6">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-bank-blue mr-2" />
              <h2 className="text-lg font-semibold text-bank-text">Filter Transactions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-bank-darkGray mb-1">
                  Transaction Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="input-field"
                >
                  <option value="all">All Transactions</option>
                  <option value="credit">Credits Only</option>
                  <option value="debit">Debits Only</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-bank-darkGray mb-1">
                  From Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={dateRange.from}
                    onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-bank-darkGray mb-1">
                  To Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={dateRange.to}
                    onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-bank-darkGray mb-1">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search transactions..."
                    className="input-field pl-10"
                  />
                </div>
              </div>
            </div>
          </BlurCard>
          
          {/* Statement Table */}
          <BlurCard className="p-6 overflow-hidden">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 text-bank-blue mr-2" />
              <h2 className="text-lg font-semibold text-bank-text">Transaction History</h2>
              <span className="ml-2 text-sm text-bank-darkGray">
                ({filteredTransactions.length} transactions)
              </span>
            </div>
            
            <div className="overflow-x-auto -mx-6">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-3 text-xs font-semibold text-bank-darkGray uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-bank-darkGray uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-bank-darkGray uppercase tracking-wider">
                      Reference
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-bank-darkGray uppercase tracking-wider text-right">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-bank-darkGray uppercase tracking-wider text-right">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedTransactions.length > 0 ? (
                    paginatedTransactions.map((transaction) => (
                      <tr 
                        key={transaction.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-bank-darkGray">
                          {formatDate(transaction.date)}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-bank-text">
                          {transaction.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-bank-darkGray">
                          {transaction.reference}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                          transaction.type === "credit" ? "text-green-600" : "text-red-500"
                        }`}>
                          {transaction.type === "credit" ? "+" : "-"}{formatCurrency(transaction.amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-bank-text">
                          {formatCurrency(transaction.balance)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="px-6 py-10 text-center text-bank-darkGray" colSpan={5}>
                        No transactions found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {filteredTransactions.length > 0 && (
              <div className="flex items-center justify-between pt-6">
                <div className="text-sm text-bank-darkGray">
                  Showing <span className="font-medium text-bank-text">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
                  <span className="font-medium text-bank-text">
                    {Math.min(currentPage * itemsPerPage, filteredTransactions.length)}
                  </span>{" "}
                  of <span className="font-medium text-bank-text">{filteredTransactions.length}</span> results
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded border border-gray-300 text-bank-darkGray disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 rounded ${
                        currentPage === i + 1
                          ? "bg-bank-blue text-white"
                          : "border border-gray-300 text-bank-darkGray hover:bg-gray-50"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  {totalPages > 5 && <span className="text-bank-darkGray">...</span>}
                  
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded border border-gray-300 text-bank-darkGray disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </BlurCard>
          
          {/* Statement Download Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <BlurCard className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-50 rounded-full text-bank-blue mb-4">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Download PDF</h3>
                <p className="text-bank-darkGray text-sm mb-4">
                  Download your statement in PDF format for easy viewing and printing.
                </p>
                <button
                  onClick={handleDownloadStatement}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  Download PDF
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </BlurCard>
            
            <BlurCard className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-green-50 rounded-full text-green-600 mb-4">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Download Excel</h3>
                <p className="text-bank-darkGray text-sm mb-4">
                  Download your statement in Excel format for detailed analysis.
                </p>
                <button
                  onClick={() => {
                    toast.loading("Preparing Excel file...");
                    setTimeout(() => {
                      toast.dismiss();
                      toast.success("Excel file has been generated");
                    }, 2000);
                  }}
                  className="btn-secondary w-full flex items-center justify-center"
                >
                  Download Excel
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </BlurCard>
            
            <BlurCard className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-purple-50 rounded-full text-purple-600 mb-4">
                  <Printer className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Print Statement</h3>
                <p className="text-bank-darkGray text-sm mb-4">
                  Print your statement directly from your browser for physical records.
                </p>
                <button
                  onClick={handlePrintStatement}
                  className="btn-secondary w-full flex items-center justify-center"
                >
                  Print Statement
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </BlurCard>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Statements;
