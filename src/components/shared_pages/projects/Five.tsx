import Image from "next/image";
import Link from "next/link";
import image_5 from "@/assets/images/project-5.png";
import image_5_2 from "@/assets/images/project-5.2.png";

const Five = () => {
  return (
    <div className="card max-w-[800px] w-full  shadow-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-md  hover:bg-gradient-to-l border-2 border-purple-500">
      <figure>
        <Image
          src={image_5}
          alt="ECR"
          height={600}
          className="max-w-[800px] w-full"
        />
      </figure>
      <figure>
        <Image
          src={image_5_2}
          alt="ECR"
          height={600}
          className="max-w-[800px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white font-thin">
          Site Name: Event 360
        </h2>
        <p className="text-white">
          Technologies: React, typescript, tailwind css, shadcn,
          react-hook-form, tanstack query, framer motion ,AOS, Axios.
        </p>
        <div className="card-actions">
          <div className="badge badge-outline text-white font-medium py-3">
            <Link href="https://event-360-client.netlify.app/" target="_blank">
              UI live link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Md-Zehad-Sarkar/event-360-servers.git"
              target="_blank"
            >
              Server git link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Md-Zehad-Sarkar/event-360-client-ui.git"
              target="_blank"
            >
              Client git link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
