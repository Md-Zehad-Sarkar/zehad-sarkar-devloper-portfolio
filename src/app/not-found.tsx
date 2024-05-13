import Link from "next/link";
import React from "react";

const NotFoundRootPage = () => {
  return (
    <div className="flex justify-center items-center max-w[200px] max-h-[300px]">
      <div className="mt-12 text-2xl">
        page not found you are looking for
        <div className="">
          <Link href={"/"}>
            <button className="btn btn-error text-white mt-4 text-center">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundRootPage;
