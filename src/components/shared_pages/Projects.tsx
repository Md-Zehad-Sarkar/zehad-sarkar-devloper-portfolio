import Image from "next/image";
import Link from "next/link";
import One from "./projects/One";

const Projects = () => {
  return (
    <div className="mt-24">
      <h2 className="text-5xl mb-12 font-semibold" id="projects">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <One />
        <One />
        <One />
      </div>
    </div>
  );
};

export default Projects;
