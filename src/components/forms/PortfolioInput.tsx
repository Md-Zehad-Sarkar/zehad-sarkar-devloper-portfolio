"use client";

import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
};

const PortfolioInput = ({
  name,
  type = "text",
  label,
  placeholder = "type here",
}: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <div className="">
            <span className="font-medium px-1 text-xl"> {label}</span> <br />
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className="input input-bordered w-full max-w-xs mt-1"
            />
          </div>
        );
      }}
    />
  );
};

export default PortfolioInput;
