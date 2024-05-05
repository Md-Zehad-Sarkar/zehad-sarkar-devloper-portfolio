import Contact from "@/components/shared_pages/Contact";
import Education from "@/components/shared_pages/Education";
import Navbar from "@/components/shared_pages/Navbar";
import Projects from "@/components/shared_pages/Projects";
import Resume from "@/components/shared_pages/Resume";
import Skills from "@/components/shared_pages/Skills";
import TopSection from "@/components/shared_pages/TopSection";

export default function Home() {
  return (
    <div className="md:min-h-screen  mx-auto max-w-7xl w-full md:flex md:justify-between gap-1 md:gap-4">
      <div className="md:max-w-52 w-full md:h-full md:sticky px-4  top-0 bg-purple-200 md:min-h-screen md:px-12">
        <Navbar />
      </div>
      <div className="mx-3">
        <TopSection />
        <Skills />
        <Projects />
        <Resume />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
