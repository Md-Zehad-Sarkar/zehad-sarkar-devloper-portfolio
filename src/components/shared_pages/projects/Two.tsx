import Image from "next/image";
import Link from "next/link";
import image_2 from "@/assets/images/project-2.png";

const Two = () => {
  return (
    <div className="card max-w-[800px] w-full  shadow-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-md  hover:bg-gradient-to-l border-2 border-purple-500">
      <figure>
        <Image
          src={image_2}
          alt="ECR"
          height={600}
          className="max-w-[800px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white font-thin">
          site name: Toy Thriver
        </h2>
        <p className="text-white">
          Technologies: react,, mongodb, express js, firebase, tailwind
        </p>
        <div className="card-actions">
          <div className="badge badge-outline text-white font-medium py-3">
            <Link href="https://toy-thriver.web.app/" target="_blank">
              UI live link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Zehad-Sarkar/toy-thriver-server-side"
              target="_blank"
            >
              Server git link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Zehad-Sarkar/toy-thriver-client-side-repo.git"
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

export default Two;
