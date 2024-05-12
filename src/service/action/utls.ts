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
