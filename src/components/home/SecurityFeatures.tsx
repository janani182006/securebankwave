
import { Shield, LockKeyhole, AlertCircle, UserCheck } from "lucide-react";
import BlurCard from "../ui/BlurCard";

const SecurityFeatures = () => {
  return (
    <section className="py-16 bg-bank-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bank-text mb-4">
            Bank-Grade Security Features
          </h2>
          <p className="text-bank-darkGray">
            We prioritize your security with state-of-the-art protection measures to keep your financial information safe and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SecurityCard
            icon={<LockKeyhole className="h-8 w-8" />}
            title="End-to-End Encryption"
            description="All data is encrypted using 256-bit SSL technology to ensure your information remains private and secure."
            iconBg="bg-blue-50 text-bank-blue"
          />
          <SecurityCard
            icon={<Shield className="h-8 w-8" />}
            title="Fraud Protection"
            description="Advanced fraud detection systems monitor your account for suspicious activities 24/7."
            iconBg="bg-green-50 text-green-600"
          />
          <SecurityCard
            icon={<AlertCircle className="h-8 w-8" />}
            title="Instant Alerts"
            description="Receive real-time notifications for any transaction or login attempt to stay informed."
            iconBg="bg-orange-50 text-orange-600"
          />
          <SecurityCard
            icon={<UserCheck className="h-8 w-8" />}
            title="Two-Factor Authentication"
            description="Add an extra layer of security to your account with two-factor authentication."
            iconBg="bg-purple-50 text-purple-600"
          />
        </div>
      </div>
    </section>
  );
};

interface SecurityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
}

const SecurityCard = ({ icon, title, description, iconBg }: SecurityCardProps) => {
  return (
    <BlurCard className="p-6 h-full">
      <div className="flex flex-col items-center text-center">
        <div className={`p-4 rounded-full ${iconBg} mb-6`}>{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-bank-darkGray">{description}</p>
      </div>
    </BlurCard>
  );
};

export default SecurityFeatures;
