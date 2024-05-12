"use client";

import PortfolioForm from "@/components/forms/PortfolioForm";
import PortfolioInput from "@/components/forms/PortfolioInput";
import { addCourse } from "@/service/action/utls";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddCoursesPage = () => {
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await addCourse(data);

      if (res?.insertedId) {
        toast.success("Course Has Been Added Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Failed To Add Course. Please Try Again");
    }
  };
  return (
    <div className="mt-12 max-w-7xl mx-auto w-full">
      <h3 className="text-center text-2xl font-semibold">Add Your Course</h3>
      <PortfolioForm
        onSubmit={onSubmit}
        className="mt-4 max-w-[800px] w-full mx-auto"
      >
        <PortfolioInput
          name="name"
          type="text"
          label="Course Name"
          placeholder="Type Your Course Name"
        />

        <PortfolioInput
          name="institute"
          type="text"
          label="Institute Name"
          placeholder="Type Your Institute Name"
        />

        <PortfolioInput
          name="startDate"
          type="text"
          label="Start Date"
          placeholder="Type Start Date"
        />
        <PortfolioInput
          name="endDate"
          type="text"
          label="End Date"
          placeholder="Type End Date"
        />
        <button
          type="submit"
          className="btn btn-primary mt-4 md:mt-4 w-full max-w-xs"
        >
          Add Course
        </button>
      </PortfolioForm>
    </div>
  );
};

export default AddCoursesPage;
