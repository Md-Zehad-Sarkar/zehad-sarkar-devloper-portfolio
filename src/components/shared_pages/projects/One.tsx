import Image from "next/image";
import Link from "next/link";
import image_1 from "@/assets/images/project-1.png";

const One = () => {
  return (
    <div className="card max-w-[800px] w-full  shadow-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-md  hover:bg-gradient-to-l border-2 border-purple-500">
      <figure>
        <Image src={image_1} alt="ECR" height={600} className="max-w-[800px] w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white font-thin">
          Site Name: Empowering Recovery chain
        </h2>
        <p className="text-white">
          Technologies: typescript, react, tailwind, redux
        </p>
        <div className="card-actions">
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://empowering-recovery-chain-client-site.netlify.app"
              target="_blank"
            >
              UI live link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Md-Zehad-Sarkar/empowering-recovery-chain-server-final.git"
              target="_blank"
            >
              Server git link
            </Link>
          </div>
          <div className="badge badge-outline text-white font-medium py-3">
            <Link
              href="https://github.com/Md-Zehad-Sarkar/empowering-recovery-chain-client-final.git"
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

export default One;
