import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1200px] w-full mx-auto bg-[#09095F] min-h-screen text-[#2ED6DC] font-medium text-[20px]">
      {children}
    </div>
  );
};

export default CommonLayout;
