import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <h1>All Projects</h1>
        <h1>All Blogs</h1>
        <h1>All Course</h1>
        <h1>All Skills</h1>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link href={"/dashboard/add-projects"}>Add Projects</Link>
          </li>
          <li>
            <Link href={"/dashboard/add-blogs"}>Add Blogs</Link>
          </li>
          <li>
            <Link href={"/dashboard/add-skills"}>Add Skills</Link>
          </li>
          <li>
            <Link href={"/dashboard/add-course"}>Add Courses</Link>
          </li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
