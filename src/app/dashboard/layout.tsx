import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dashboard",
  description: `Dashboard Develop by 'Zehad Sarkar'`,
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1200px] w-full mx-auto">{children}</div>;
};

export default DashboardLayout;
