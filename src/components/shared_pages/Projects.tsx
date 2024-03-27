import Image from "next/image";
import Link from "next/link";
import One from "./projects/One";
import Two from "./projects/Two";
import Three from "./projects/Three";
import Four from "./projects/four";
import Five from "./projects/Five";
import Six from "./projects/Six";

const Projects = () => {
  return (
    <div className="mt-24">
      <h2 className="text-5xl mb-12 font-semibold" id="projects">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        <Six />
        <One />
        <Five />
        <Two />
        <Three />
        <Four />
      </div>
    </div>
  );
};

export default Projects;
