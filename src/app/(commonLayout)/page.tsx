import Navbar from "@/components/navbars/Navbar";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <div className="text-4xl font-bold">
      <Navbar />
      {children}
    </div>
  );
}
