"use client";

import PortfolioFileUploader from "@/components/forms/PortfolioFileUploader";
import PortfolioForm from "@/components/forms/PortfolioForm";
import PortfolioInput from "@/components/forms/PortfolioInput";
import { addProjects } from "@/service/action/utls";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

// const image_hosting_api = "2223ec610998a850d27bf0a27225a987";
const image_hosting_api = process.env.NEXT_PUBLIC_IMGBB_API;

const api_url = "https://api.imgbb.com/1/upload";

const technologies = [
  "Html",
  "CSS",
  "Tailwind",
  "Javascript",
  "Typescript",
  "React",
  "Next Js",
  "Redux",
  "Material UI",
  "AOS",
  "Framer Motion",
  "React Hook Form",
  "Node",
  "Express Js",
  "Mongoose",
  "MongoDB",
  "Zod",
];

const AddProjectsPage = () => {
  const [currentValue, setCurrentValue] = useState([]);
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      data.technologies = currentValue;
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

      const res = await addProjects(data);

      if (res?.insertedId) {
        toast.success("Project Has Been Added Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Failed To Add Project. Please Try Again");
    }
  };
  return (
    <div className="max-w-7xl w-full mx-auto mt-14">
      <h3 className="text-center text-2xl font-semibold mb-10">
        Add Your Project Here
      </h3>
      <PortfolioForm
        onSubmit={onSubmit}
        className="grid md:grid-cols-2  w-full max-w-[800px] mx-auto"
      >
        <PortfolioInput
          name="name"
          type="text"
          label="Project Name"
          placeholder="type your project name"
          className="input input-bordered max-w-xs w-full mt-1"
        />
        <PortfolioFileUploader name="image" type="file" label="Project Image" />

        <PortfolioInput
          name="description"
          type="text"
          label="Project Description"
          placeholder="type your project description"
          className="input input-bordered max-w-xs w-full mb-4 mt-1"
        />
        <PortfolioInput
          name="liveLink"
          type="text"
          label="Client Live Link"
          placeholder="type your live link"
          className="input input-bordered max-w-xs w-full mb-4 mt-1"
        />
        <PortfolioInput
          name="clientLink"
          type="text"
          label="Client Side Git Link"
          placeholder="Type Your Client Side Git Link"
          className="input input-bordered max-w-xs w-full mb-4 mt-1"
        />
        <PortfolioInput
          name="serverLink"
          type="text"
          label="Server Side Git Link"
          placeholder="Type Your Server Side Git Link"
          className="input input-bordered max-w-xs w-full mb-4 mt-1"
        />

        <div>
          <h2 className="text-xl">Select Your Technologies</h2>
          <div className="input input-bordered max-w-xs w-full mt-2">
            <Multiselect
              className="w-full max-w-xs"
              options={technologies}
              isObject={false}
              onSelect={(e) => setCurrentValue(e)}
              onRemove={(e) => setCurrentValue(e)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-60 md:mt-4 w-full max-w-xs"
        >
          Submit
        </button>
      </PortfolioForm>
    </div>
  );
};

export default AddProjectsPage;
