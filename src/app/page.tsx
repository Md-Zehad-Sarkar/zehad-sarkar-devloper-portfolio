"use client";
import AboutMe from "@/components/shared_pages/AboutMe";
import Contact from "@/components/shared_pages/Contact";
import Navbar from "@/components/shared_pages/Navbar";
import Projects from "@/components/shared_pages/Projects";
import Resume from "@/components/shared_pages/Resume";
import Skills from "@/components/shared_pages/Skills";

export default function Home() {
  return (
    <div className="min-h-screen p-4  mx-auto max-w-7xl w-full flex gap-4">
      <div className=" w-24 h-full sticky  top-0 ">
        <Navbar />
      </div>
      <div>
        <Skills />
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}
