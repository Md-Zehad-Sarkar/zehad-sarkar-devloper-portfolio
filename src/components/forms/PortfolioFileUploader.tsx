"use client";
import { Controller, useFormContext } from "react-hook-form";

type TFileUploaderProps = {
  name: string;
  label?: string;
  type?: string;
};

export default function PortfolioFileUploader({
  name,
  label,
  type,
}: TFileUploaderProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <div className="mt-3 mb-3">
            {/* <button> */}
            <span className="mt-1 mb-1 mx-1 text-xl">
              {label || "Upload file"}
            </span>
            <br />
            <input
              type={type}
              className="file-input file-input-bordered w-full max-w-xs"
              {...field}
              onChange={(e) =>
                onChange((e.target as HTMLInputElement)?.files?.[0])
              }
              value={value?.fileName}
            />
          </div>
        );
      }}
    />
  );
}
