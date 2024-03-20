import Contact from "@/components/shared_pages/Contact";
import Navbar from "@/components/shared_pages/Navbar";
import Projects from "@/components/shared_pages/Projects";
import Resume from "@/components/shared_pages/Resume";
import Skills from "@/components/shared_pages/Skills";
import TopSection from "@/components/shared_pages/TopSection";

export default function Home() {
  return (
    <div className="min-h-screen  mx-auto max-w-7xl w-full flex justify-between gap-1 md:gap-4">
      <div className="max-w-36 w-full h-full sticky px-3  top-0 bg-purple-200 min-h-screen md:px-12">
        <Navbar />
      </div>
      <div>
        <TopSection />
        <Skills />

        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}
