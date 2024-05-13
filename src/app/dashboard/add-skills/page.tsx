"use client";
import PortfolioFileUploader from "@/components/forms/PortfolioFileUploader";
import PortfolioForm from "@/components/forms/PortfolioForm";
import PortfolioInput from "@/components/forms/PortfolioInput";
import { addSkills } from "@/service/action/utls";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const image_hosting_api = process.env.NEXT_PUBLIC_IMGBB_API;

const api_url = "https://api.imgbb.com/1/upload";

const AddSkillsPage = () => {
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    try {
      const obj = { ...data };
      const file = obj["image"];
      delete obj["image"];

      const formData = new FormData();
      formData.append("image", file);
      const response = await axios.post(api_url, formData, {
        params: { key: image_hosting_api },
      });

      const imageUrl = response?.data?.data?.display_url;
      data.image = imageUrl;

      const res = await addSkills(data);

      if (res?.insertedId) {
        toast.success("Skills Has Been Added Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Failed To Add Skills. Please Try Again");
    }
  };
  return (
    <div className="mt-12 max-w-7xl mx-auto w-full">
      <h3 className="text-center text-2xl font-semibold">Add Your Skills</h3>
      <PortfolioForm
        onSubmit={onSubmit}
        className="mt-4 max-w-[800px] w-full mx-auto"
      >
        <PortfolioInput
          name="name"
          type="text"
          label="Skills Name"
          placeholder="Type Your Skill Here"
        />
        <PortfolioFileUploader name="image" type="file" />
        <PortfolioInput
          name="skillPath"
          type="text"
          label="Skills Path"
          placeholder="Type Your Skill Path. Frontend/Backend/Fullstack"
        />
        <button
          type="submit"
          className="btn btn-primary mt-4 md:mt-4 w-full max-w-xs"
        >
          Submit
        </button>
      </PortfolioForm>
    </div>
  );
};

export default AddSkillsPage;
