import Image from "next/image";
import Link from "next/link";
import image_3 from "@/assets/images/project-3.jpg";
import image_3_2 from "@/assets/images/project-3.2.jpg";

const Three = () => {
  return (
    <div className="card max-w-[800px] w-full  shadow-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-md  hover:bg-gradient-to-l border-2 border-purple-500">
      <figure>
        <Image
          src={image_3}
          alt="ECR"
          height={600}
          className="max-w-[800px] w-full"
        />
      </figure>
      <figure>
        <Image
          src={image_3_2}
          alt="ECR"
          height={600}
          className="max-w-[800px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white font-thin">
          Site Name: Art Innovators Academy
        </h2>
        <p className="text-white">
          Technologies: react, express js, firebase, mongodb, tailwind and daisy
          ui
        </p>
        <div className="card-actions">
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://art-innovators-academy.web.app/"
              target="_blank"
            >
              UI live link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Zehad-Sarkar/art-innovators-server"
              target="_blank"
            >
              Server git link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Zehad-Sarkar/art-innovators-client"
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

export default Three;
