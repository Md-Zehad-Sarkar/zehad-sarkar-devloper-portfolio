import Image from "next/image";
type TSkill = {
  _id: string;
  name: string;
  image: string;
  skillPath: string;
  createdAt: string;
};

type TSkillProps = {
  backendSkills: TSkill[];
};

const BackendSkills = ({ backendSkills }: TSkillProps) => {
  return (
    <div className="w-full mt-24">
      <h2 className="text-5xl mb-12 font-semibold" id="skill">
        Basic knowledge about!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {backendSkills?.map((skill: TSkill) => (
          <div
            key={skill?._id}
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l"
          >
            <Image
              src={skill?.image}
              width={40}
              height={40}
              alt=""
              priority={true}
              className="mx-auto w-20 h-8"
            />
            <h4 className="text-4xl font-semibold text-white mt-4">
              {skill?.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackendSkills;
