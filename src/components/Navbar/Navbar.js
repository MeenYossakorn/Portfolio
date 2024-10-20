import React from "react";

const NavbarSection = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-md p-4 justify-center flex backdrop-blur-lg bg-BGBlue/50">
      <div className="container flex justify-between items-center">
        <a
          href="#Intro"
          className="ml-[130px] font-roboto-mono font-semibold text-xl text-white transition duration-300 transform active:scale-95"
        >
          Portfolio
        </a>
        <div className="space-x-10 mr-[95px]">
          <a
            href="#AboutMe"
            className="font-roboto-mono font-semibold text-white transition duration-300 transform active:scale-95"
          >
            About
          </a>
          <a
            href="#Skill"
            className="font-roboto-mono font-semibold text-white transition duration-300 transform active:scale-95"
          >
            Skill
          </a>
          <a
            href="#Projects"
            className="font-roboto-mono font-semibold text-white transition duration-300 transform active:scale-95"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="font-roboto-mono font-semibold text-white transition duration-300 transform active:scale-95"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
