import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Projects = async () => {
  const res = await axios.get("http://localhost:5000/api/v1/projects");

  const allProjects = await res?.data?.data;

  return (
    <div className="mt-24">
      <h2 className="text-5xl mb-12 font-semibold" id="projects">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {allProjects?.map((project: any) => (
          <div
            key={project?._id}
            className="card max-w-[800px] w-full  shadow-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-md  hover:bg-gradient-to-l border-2 border-purple-500"
          >
            <figure>
              <Image
                src={project?.image}
                alt="ECR"
                height={600}
                width={800}
                className="max-w-[800px] w-full max-h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white font-thin">
                Site Name: {project?.name}
              </h2>
              <div className="text-white flex flex-wrap">
                <span className="font-semibold">Technologies:</span>
                {project?.technologies?.map((technology: any, i: any) => (
                  <p key={i} className="flex flex-wrap ml-2">
                    {technology}
                  </p>
                ))}
              </div>
              <div className="text-white mb-2">
                <span className="font-semibold mr-2">Description:</span>
                {project?.description}
              </div>
              <div className="card-actions">
                <div className="badge badge-outline text-white font-medium py-3">
                  <Link href={project?.liveLink} target="_blank">
                    UI live link
                  </Link>
                </div>
                <div className="badge badge-outline text-white font-medium py-3">
                  <Link href={project?.serverLink} target="_blank">
                    Server git link
                  </Link>
                </div>
                <div className="badge badge-outline text-white font-medium py-3">
                  <Link href={project?.clientLink} target="_blank">
                    Client git link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
