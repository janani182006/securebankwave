
import React from "react";
import { cn } from "@/lib/utils";

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: 'default' | 'gradient' | 'outline';
}

const BlurCard = ({
  children,
  className,
  hoverEffect = true,
  variant = 'default',
  ...props
}: BlurCardProps) => {
  return (
    <div
      className={cn(
        "glass-effect rounded-2xl transition-all duration-300",
        variant === 'gradient' && "bg-gradient-to-br from-white via-white to-bank-gray border-0",
        variant === 'outline' && "bg-transparent border border-gray-200 shadow-none",
        hoverEffect && "hover:shadow-card-hover hover:translate-y-[-2px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurCard;
