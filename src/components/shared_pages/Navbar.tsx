"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="">
      <ul className="space-y-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#resume">Resume</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
