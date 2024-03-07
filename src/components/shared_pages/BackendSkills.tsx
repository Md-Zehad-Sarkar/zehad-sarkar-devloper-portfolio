import Image from "next/image";
import node from "@/assets/images/node.jpeg";
import express from "@/assets/images/express.jpeg";
import mongoose from "@/assets/images/mongoose.jpeg";
import mongodb from "@/assets/images/mongodb.jpeg";
import firebase from "@/assets/images/firebase.jpeg";

const BackendSkills = () => {
  return (
    <div className="w-full mt-24">
      <h2 className="text-5xl mb-12 font-semibold" id="skill">
        Basic knowledge about!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={node}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-20 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Node js</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={express}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-20 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Express js</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={mongoose}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-20 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Mongoose</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={mongodb}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-20 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Mongodb</h4>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-md p-3 w-full h-32 text-center hover:bg-gradient-to-l">
          <Image
            src={firebase}
            width={40}
            height={40}
            alt=""
            priority={true}
            className="mx-auto w-20 h-8"
          />
          <h4 className="text-4xl font-semibold text-white mt-4">Firebase</h4>
        </div>
      </div>
    </div>
  );
};

export default BackendSkills;
