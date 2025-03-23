
import { ArrowRight, Smartphone, Receipt, CreditCard, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import BlurCard from "../ui/BlurCard";

const FeatureSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bank-text mb-4">
            Comprehensive Banking Features
          </h2>
          <p className="text-bank-darkGray">
            Everything you need for efficient money management, from account summaries to detailed transaction history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <FeatureCard
            icon={<Receipt className="h-8 w-8" />}
            title="Account Statements"
            description="Access and download your transaction history with detailed filters and sorting options."
            href="/statements"
            iconBg="bg-blue-50 text-bank-blue"
          />
          <FeatureCard
            icon={<LineChart className="h-8 w-8" />}
            title="Account Summary"
            description="Get a comprehensive overview of your account balance and recent transactions."
            href="/dashboard"
            iconBg="bg-green-50 text-green-600"
          />
          <FeatureCard
            icon={<Smartphone className="h-8 w-8" />}
            title="Profile Management"
            description="Update your personal information and manage communication preferences."
            href="/profile"
            iconBg="bg-purple-50 text-purple-600"
          />
          <FeatureCard
            icon={<CreditCard className="h-8 w-8" />}
            title="Secure Transactions"
            description="Transfer funds and make payments with complete security and peace of mind."
            href="/dashboard"
            iconBg="bg-orange-50 text-orange-600"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  iconBg: string;
}

const FeatureCard = ({ icon, title, description, href, iconBg }: FeatureCardProps) => {
  return (
    <BlurCard className="p-8 h-full">
      <div className="flex flex-col">
        <div className={`p-4 rounded-lg ${iconBg} w-fit mb-6`}>{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-bank-darkGray mb-6">{description}</p>
        <Link
          to={href}
          className="mt-auto flex items-center text-bank-blue font-medium hover:text-bank-lightBlue transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </BlurCard>
  );
};

export default FeatureSection;
