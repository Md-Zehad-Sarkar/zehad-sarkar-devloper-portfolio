import axios from "axios";
import Link from "next/link";
type TBlog = {
  _id: string;
  name: string;
  blogs: string;
  author: string;
};

const MyBlogPage = async () => {
  const res = await axios.get("http://localhost:5000/api/v1/blogs");

  const blogs = res?.data?.data;

  return (
    <div className="m-4">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="mt-10 rounded-md h-16 flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500">
          <p></p>{" "}
          <h2 className="px-2 rounded-md text-center font-bold text-3xl bg-gradient-to-r from-orange-100 to-blue-300">
            Blogs
          </h2>
          <p>
            <Link
              href="/"
              className="text-right btn btn-outline text-white text-xl "
            >
              Back To Home
            </Link>
          </p>
        </div>

        <div className="mt-16">
          {blogs && blogs?.length ? (
            <>
              {blogs.map((blog: TBlog) => (
                <div key={blog?._id}>
                  <h2 className="mb-1 font-bold text-2xl"> {blog?.name}</h2>
                  <h2 className="font-medium">Author: {blog?.author}</h2>
                  <p className="mt-3">
                    {blog?.blogs?.replace(/<p>/g, "").replace(/<\/p>/g, "")}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <h2 className="text-center font-medium text-xl">
              No blog published yet
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBlogPage;
