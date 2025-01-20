import React, { ReactNode } from "react";

interface IBadgeProps {
  children: ReactNode;
}

const Badge: React.FunctionComponent<IBadgeProps> = ({ children }) => {
  return (
    <span className="rounded-2xl text-xs font-mono border bg-gray-100 font-semibold px-2 py-1 text-black">
      {children}
    </span>
  );
};

export default Badge;
