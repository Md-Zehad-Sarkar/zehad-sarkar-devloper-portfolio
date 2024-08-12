const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 max-h-[120px]">
      <header>
        <nav className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <h2>Logo</h2>
          </div>
          <ul className="flex justify-between text-xl col-span-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about" id="#">
                About
              </a>
            </li>
            <li>
              <a href="/contact" id="contact">
                Contact
              </a>
            </li>
            <li>
              <a href="/projects" id="projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/skills" id="skills">
                Skills
              </a>
            </li>
            <li>
              <a href="/admin/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
