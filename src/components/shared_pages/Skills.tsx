import Image from "next/image";

import BackendSkills from "./BackendSkills";
import axios from "axios";

type TSkill = {
  _id: string;
  name: string;
  image: string;
  skillPath: string;
  createdAt: string;
};

export const metadata = {
  title: "Skills",
};
const Skills = async () => {
  const res = await axios.get("http://localhost:5000/api/v1/skills");

  const skills = res?.data?.data;

  // Data filter for frontend skills
  const frontendSkills = skills?.filter(
    (skill: TSkill) => skill.skillPath?.toLowerCase() === "frontend"
  );

  // Data filter for backend skills
  const backendSkills = skills?.filter(
    (skill: TSkill) => skill.skillPath?.toLowerCase() === "backend"
  );

  return (
    <div className="w-full mt-24">
      <h2 className="text-5xl mb-12 font-semibold" id="skills">
        What I know ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {frontendSkills?.map((skill: TSkill) => (
          <div
            key={skill._id}
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l"
          >
            <Image
              src={skill?.image}
              width={40}
              height={40}
              alt=""
              priority={true}
              className="mx-auto w-10 h-8"
            />
            <h4 className="text-4xl font-semibold text-white mt-4">
              {skill?.name}
            </h4>
          </div>
        ))}
      </div>

      {/* backend knowledge */}
      <BackendSkills backendSkills={backendSkills} />
    </div>
  );
};

export default Skills;
