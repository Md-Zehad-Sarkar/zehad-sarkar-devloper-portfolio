"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <ul className="space-y-8">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#resume">Resume</Link>
        </li>
        <li>
          <Link href="#project">Projects</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
