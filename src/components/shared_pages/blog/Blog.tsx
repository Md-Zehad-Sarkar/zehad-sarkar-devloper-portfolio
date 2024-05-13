// // "use client";
// import axios from "axios";
// import Link from "next/link";
// type TBlog = {
//   _id: string;
//   name: string;
//   blogs: string;
//   author: string;
// };

// type TBlogProps = {
//   blogs: TBlog[];
// };

// const Blog = ({ blogs }: TBlogProps) => {
//   return (
//     <div>
//       <>
//         {blogs.map((blog: TBlog) => (
//           <div key={blog?._id}>
//             <h2 className="mb-1 font-bold text-2xl"> {blog?.name}</h2>
//             <h2 className="font-medium">Author: {blog?.author}</h2>
//             <div
//               className="mt-3"
//               dangerouslySetInnerHTML={{ __html: blog?.blogs }}
//             >
//               {/* {blog?.blogs} */}
//             </div>
//           </div>
//         ))}
//       </>
//     </div>
//   );
// };

// export default Blog;
