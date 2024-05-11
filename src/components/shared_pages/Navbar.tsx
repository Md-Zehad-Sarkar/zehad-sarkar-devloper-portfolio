"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="">
      <ul className="md:space-y-2 flex md:flex-col gap-3 md:gap-1 items-center font-semibold text-xl flex-wrap py-2 text-left">
        <li className="text-left">
          <Link href="/">Home</Link>
        </li>
        <li className="text-left">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="text-left">
          <Link href="#resume">Resume</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#about">About me</Link>
        </li>
        <li>
          <Link href="#education">Education</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
