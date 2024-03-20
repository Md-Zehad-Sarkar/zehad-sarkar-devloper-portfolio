import Image from "next/image";
import profile_picture from "@/assets/zs.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const TopSection = () => {
  return (
    <div className="grid items-end justify-center gap-3 mt-2 mb-20 select-none lg:grid-cols-2">
      <div className="order-2 px-2 space-y-8 text-justify lg:order-1">
        <h4 id="about" className="text-3xl font-medium">Hi , I am </h4>
        <h3 className="pl-12 text-4xl font-bold text-indigo-600">
          Zehad Sarkar
        </h3>
        <p className="">
          A dedicated frontend developer with over a year of experience in
          crafting immersive digital experiences. Proficient in HTML, CSS,
          JavaScript, TypeScript, React, Next.js, and Tailwind CSS, I am
          passionate about creating intuitive interfaces and optimizing
          performance.
        </p>
        <p className="mt-2">
          While frontend development is my forte, I also have a foundational
          understanding of Node, Express,MongoDB, Mongoose and Firebase,
          constantly seeking to expand my expertise. What sets me apart is my
          unwavering commitment to growth and innovation.
        </p>

        <p className="mt-2">
          I thrive in collaborative environments and actively seek out
          opportunities to push boundaries and embrace change. If you are
          looking for a frontend developer who delivers exceptional results and
          is driven by a genuine passion for innovation, lets connect.
        </p>
        <p className="mt-2">Together, we can create something extraordinary!</p>

        <div className="p-4 text-white bg-purple-600 rounded-lg">
          <p className="flex items-center gap-2">
            Follow me on:
            <Link href="https://www.linkedin.com/in/r-a-zehad-sarkar-developer/">
              <FaLinkedin className="w-24 h-12 hover:text-indigo-200" />
            </Link>
            <Link href="https://github.com/Md-Zehad-Sarkar">
              <FaGithub className="w-24 h-12 hover:text-indigo-200" />
            </Link>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center order-1 lg:order-2">
        <Image
          src={profile_picture}
          // className="rounded-lg"
          width={500}
          height={500}
          style={{ borderRadius: "40px 40px 10px 10px" }}
          alt="profile image"
        />
      </div>
    </div>
  );
};

export default TopSection;
