"use client";

import { useState } from "react";
import nodemailer from "nodemailer";
import axios from "axios";

type TData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // //check valid email
  // const verifyEmail = (email: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data: TData = {
      name,
      email,
      message,
    };
    // const res = await axios.post("/api/contact", data);
    // console.log("res", res);
  };

  return (
    <div className="mt-24">
      <h2 className="text-5xl mb-12">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-[600px]">
        <legend id="contact">Contact with me</legend>
        <div className="flex flex-col mt-6 gap-2">
          <label className="text-lg">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            // {...register("name", { required: "name field is required" })}
            className="input input-bordered input-primary w-full max-w-md"
            placeholder="Type your name"
          />
          {/* {errors.name && (
            <span>
              {typeof errors.name?.message === "string"
                ? errors.name.message
                : ""}
            </span>
          )} */}
        </div>
        <div className="flex flex-col mt-6 gap-2">
          <label className="">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            // {...register("email", {
            //   required: "email is required & type a valid email",
            // })}
            className="input input-bordered input-primary w-full max-w-md"
            placeholder="Type your email"
          />
          {/* {errors.email && (
            <span>
              {typeof errors.email?.message === "string"
                ? errors.email.message
                : ""}
            </span>
          )} */}
        </div>
        <div className="flex flex-col mt-6 gap-2">
          <label className="">Message</label>
          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="textarea textarea-primary w-full max-w-md  input input-bordered input-primary"
            // {...register("message")}
            placeholder="Write details"
          ></textarea>
        </div>

        <br />
        <button
          type="submit"
          className="w-28 btn bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:bg-gradient-to-l text-white text-lg text-thin hover:text-white"
          disabled={!name || !email || !message}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
