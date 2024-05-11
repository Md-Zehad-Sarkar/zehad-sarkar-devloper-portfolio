"use client";
import PortfolioFileUploader from "@/components/forms/PortfolioFileUploader";
import PortfolioForm from "@/components/forms/PortfolioForm";
import PortfolioInput from "@/components/forms/PortfolioInput";
import { FieldValues } from "react-hook-form";

const AddProjectsPage = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <PortfolioForm onSubmit={onSubmit}>
      <PortfolioInput
        name="name"
        type="text"
        label="Project Name"
        placeholder="type your project name"
      />
      <PortfolioFileUploader name="image" type="file" label="Project Image" />
      <PortfolioInput
        name="description"
        type="text"
        label="Project Description"
        placeholder="type your project name"
      />

      <button className="btn btn-primary mt-3">Submit</button>
    </PortfolioForm>
  );
};

export default AddProjectsPage;
