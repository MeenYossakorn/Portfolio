import React from "react";

const NavbarSection = () => {
  return (
    <nav className=" bg-opacity-95 navbar bg-BGBlue sticky top-0 z-50 shadow-md p-4 justify-center  flex">
      <div className="container flex justify-between items-center">
        <a
          href="#main"
          className="font-roboto-mono font-semibold  text-xl text-white hover:text-gray-300"
        >
          Portfolio
        </a>
        <div className="space-x-10">
          <a
            href="#about"
            className="font-roboto-mono font-semibold text-white hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#skill"
            className="font-roboto-mono font-semibold text-white hover:text-gray-300"
          >
            Skill
          </a>
          <a
            href="#projects"
            className="font-roboto-mono font-semibold text-white hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="font-roboto-mono font-semibold text-white hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
