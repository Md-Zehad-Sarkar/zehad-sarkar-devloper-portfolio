"use client";

import { sendEMail } from "@/lib/sendEmail";

import { useForm } from "react-hook-form";

export type TFormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>();

  const onSubmit = async (data: TFormData) => {
    sendEMail(data);
    reset();
  };

  return (
    <div className="mt-24">
      <h2 className="text-5xl mb-12">Contact</h2>
      <form onClick={handleSubmit(onSubmit)} className="max-w-[600px]">
        <legend id="contact">Contact with me</legend>
        <div className="flex flex-col mt-6 gap-2">
          <label htmlFor="Name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered input-primary w-full max-w-md"
            placeholder="Type your name"
          />
          {errors.name && (
            <span className="text-red-500">This Field is Required</span>
          )}
        </div>
        <div className="flex flex-col mt-6 gap-2">
          <label className="">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="input input-bordered input-primary w-full max-w-md"
            placeholder="Type your email"
          />
          {errors.email && (
            <span className="text-red-500">{errors?.email?.message}</span>
          )}
        </div>
        <div className="flex flex-col mt-6 gap-2">
          <label className="">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="textarea textarea-primary w-full max-w-md  input input-bordered input-primary"
            placeholder="Write details"
          ></textarea>
          {errors.message && (
            <span className="text-red-500">This Field is Required</span>
          )}
        </div>

        <br />
        <button
          type="submit"
          className="w-28 btn bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:bg-gradient-to-l text-white text-lg text-thin hover:text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
