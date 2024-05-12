"use client";

import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

const PortfolioInput = ({
  name,
  type = "text",
  label,
  placeholder = "type here",
  className,
}: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <div className="">
            <span className="font-medium px-1 text-xl mb-2"> {label}</span>{" "}
            <br />
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={
                className || "input input-bordered w-full max-w-xs mt-1 mb-3"
              }
            />
          </div>
        );
      }}
    />
  );
};

export default PortfolioInput;
