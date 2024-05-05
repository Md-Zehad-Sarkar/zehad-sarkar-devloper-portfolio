import Link from "next/link";

const MyBlogPage = () => {
  return (
    <div className="m-4">
      <div className="">
        <Link
          href="/"
          className="text-right flex justify-end text-xl items-center "
        >
          <p className="bg-purple-600 p-1 text-white rounded-md">
            Back To Home
          </p>
        </Link>
      </div>
      <div className="">
        <h2 className="text-center font-medium text-xl">
          No blog published yet
        </h2>
      </div>
    </div>
  );
};

export default MyBlogPage;
