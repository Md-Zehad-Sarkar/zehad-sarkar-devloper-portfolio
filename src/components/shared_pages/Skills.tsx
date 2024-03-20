import Image from "next/image";
import html from "@/assets/images/html.jpeg";
import css from "@/assets/images/css.jpeg";
import tailwind from "@/assets/images/tailwind.jpeg";
import javascript from "@/assets/images/js.jpeg";
import typescript from "@/assets/images/ts.jpeg";
import react from "@/assets/images/react.jpeg";
import nextjs from "@/assets/images/nextjs.jpeg";
import redux from "@/assets/images/redux.jpeg";
import BackendSkills from "./BackendSkills";

export const metadata = {
  title: "Skills",
};
const Skills = () => {
  return (
    <div className="w-full mt-24">
      <h2 className="text-5xl mb-12 font-semibold" id="skills">
        What I know ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={html}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-10 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Html</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={css}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-10 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Css</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={tailwind}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-10 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Tailwind</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={javascript}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-10 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Javascript</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={typescript}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-10 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Typescript</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={react}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-10 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">React</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={nextjs}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-10 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Next js</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={redux}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-10 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Redux</h4>
        </div>
      </div>
      {/* backend knowledge */}
      <BackendSkills />
    </div>
  );
};

export default Skills;
