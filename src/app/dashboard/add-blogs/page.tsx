"use client";
import PortfolioForm from "@/components/forms/PortfolioForm";
import PortfolioInput from "@/components/forms/PortfolioInput";
import { addBlog } from "@/service/action/utls";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AddBlogsPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const router = useRouter();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typings...",
    }),
    []
  );

  const onSubmit = async (data: FieldValues) => {
    data.blog = content;

    try {
      const res = await addBlog(data);

      if (res?.insertedId) {
        toast.success("Blog Has Been Added Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Failed To Add Blog. Please Try Again");
    }
  };

  return (
    <PortfolioForm
      onSubmit={onSubmit}
      className="max-w-7xl mx-auto w-full mt-12"
    >
      <PortfolioInput
        name="name"
        type="text"
        label="Blog Title"
        placeholder="Type Blog Title"
        className="w-full input input-bordered mb-3"
      />
      <label htmlFor="blog-content" className="mb-3 mt-3">
        Blog Content
      </label>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {}}
      />

      <button type="submit" className="btn btn-primary mt-4">
        Create Blog
      </button>
    </PortfolioForm>
  );
};

export default AddBlogsPage;
