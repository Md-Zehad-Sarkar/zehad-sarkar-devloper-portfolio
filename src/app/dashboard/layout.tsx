"use client";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1200px] w-full mx-auto">{children}</div>;
};

export default DashboardLayout;
