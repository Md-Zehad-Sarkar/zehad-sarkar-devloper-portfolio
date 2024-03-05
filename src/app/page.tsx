import Navbar from "@/shared_pages/Navbar";
import AboutMe from "./about/page";

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-slate-500 mx-auto max-w-7xl w-full flex gap-4">
      <div className="bg-purple-500 w-24 h-full ">
        <Navbar />
      </div>
      <div>
        <AboutMe />
      </div>
    </main>
  );
}
