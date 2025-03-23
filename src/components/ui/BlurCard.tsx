
import React from "react";
import { cn } from "@/lib/utils";

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const BlurCard = ({
  children,
  className,
  hoverEffect = true,
  ...props
}: BlurCardProps) => {
  return (
    <div
      className={cn(
        "glass-effect rounded-xl shadow-glass transition-all duration-300",
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
