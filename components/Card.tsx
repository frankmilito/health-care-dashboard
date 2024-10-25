import React, { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
