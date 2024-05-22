"use server";

export const addProjects = async (values: any) => {
  const res = await fetch(
    "https://portfolio-server-sigma-eight.vercel.app/api/v1/add-projects",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    }
  );
  const data = await res.json();

  return data?.projects;
};

// add skills action
export const addSkills = async (values: any) => {
  const res = await fetch(
    "https://portfolio-server-sigma-eight.vercel.app/api/v1/add-skills",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    }
  );
  const data = await res.json();

  return data?.skills;
};

// add courses action
export const addCourse = async (values: any) => {
  const res = await fetch(
    "https://portfolio-server-sigma-eight.vercel.app/api/v1/add-course",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    }
  );
  const data = await res.json();

  return data?.course;
};

// add courses action
export const addBlog = async (values: any) => {
  const res = await fetch(
    "https://portfolio-server-sigma-eight.vercel.app/api/v1/add-blogs",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    }
  );
  const data = await res.json();

  return data?.blogs;
};
