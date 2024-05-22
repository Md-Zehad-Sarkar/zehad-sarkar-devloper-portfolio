"use client";
import PortfolioForm from "@/components/forms/PortfolioForm";
import PortfolioInput from "@/components/forms/PortfolioInput";
import { loginAdmin } from "@/service/action/action";
import { adminLogin } from "@/service/action/utls";
import { setUserLocalStorage } from "@/service/userStorage";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AdminLoginPage = () => {
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    // const res = await adminLogin(data);

    const res = await loginAdmin(data);
    console.log("res......", res);

    if (res?.accessToken) {
      toast.success("Admin Login Successful");
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <PortfolioForm onSubmit={onSubmit}>
        <PortfolioInput
          name="email"
          type="email"
          label="Email"
          placeholder="Type your email here"
        />
        <PortfolioInput
          name="password"
          type="password"
          label="Password"
          placeholder="Type your password here"
        />
        <button className="btn btn-primary max-w-xs">Login</button>
      </PortfolioForm>
    </div>
  );
};

export default AdminLoginPage;
