import axios from "axios";

// "use server";
export const addProjects = async (values: any) => {
  const res = await fetch("http://localhost:5000/api/v1/add-projects", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(values),
  });
  const data = await res.json();

  return data?.projects;
};

// add skills action
export const addSkills = async (values: any) => {
  const res = await fetch("http://localhost:5000/api/v1/add-skills", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(values),
  });
  const data = await res.json();

  return data?.skills;
};

// add courses action
export const addCourse = async (values: any) => {
  const res = await fetch("http://localhost:5000/api/v1/add-course", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(values),
  });
  const data = await res.json();

  return data?.course;
};

// add courses action
export const addBlog = async (values: any) => {
  const res = await fetch("http://localhost:5000/api/v1/add-blogs", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(values),
  });
  const data = await res.json();

  return data?.blogs;
};

// Login api
export const adminLogin = async (value: any) => {
  const res = await fetch("http://localhost:5000/api/v1/login-users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(value),
  });

  const userInfo = await res.json();
  return userInfo;
};
