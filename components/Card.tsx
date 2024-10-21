import React, { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white p-4 rounded-lg">{children}</div>;
};

export default Card;
