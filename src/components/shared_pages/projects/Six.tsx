import Image from "next/image";
import image_6 from "@/assets/images/project-5.png";
import image_6_2 from "@/assets/images/project-5.png";
import Link from "next/link";

const Six = () => {
  return (
    <div className="card max-w-[800px] w-full  shadow-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-md  hover:bg-gradient-to-l border-2 border-purple-500">
      <figure>
        <Image
          src={image_6}
          alt="ECR"
          height={600}
          className="max-w-[800px] w-full"
        />
      </figure>
      <figure>
        <Image
          src={image_6_2}
          alt="ECR"
          height={600}
          className="max-w-[800px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white font-thin">
          Site Name: Sunbeam Kids Garden
        </h2>
        <p className="text-white">
          Technologies: Nextjs, typescript, tailwind css,
        </p>
        <div className="card-actions">
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://sunbeam-kids-garden-client.vercel.app/"
              target="_blank"
            >
              UI live link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Md-Zehad-Sarkar/sunbeam-kids-garden-server.git"
              target="_blank"
            >
              Server git link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Md-Zehad-Sarkar/sunbeam-kids-garden-client.git"
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

export default Six;