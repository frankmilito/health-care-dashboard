import React, { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>{children}</div>
  );
};

export default Card;
