import React, { useState, useEffect } from "react";

const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // สถานะเพื่อควบคุมการแสดงเมนู

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // เปลี่ยนสถานะเมนูเมื่อคลิก
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 backdrop-blur-lg bg-BGBlue/50 transition-all duration-300`}
    >
      <div className="container flex justify-between items-center">
        <a
          href="#Intro"
          className="ml-4 md:ml-[135px] font-roboto-mono font-semibold text-lg md:text-xl text-white transition duration-300 transform active:scale-95"
        >
          Portfolio
        </a>
        <div className="hidden md:flex space-x-10 mr-4 md:mr-[95px]">
          <a
            href="#AboutMe"
            className="font-roboto-mono font-semibold text-white text-sm md:text-lg transition duration-300 transform active:scale-95"
          >
            About
          </a>
          <a
            href="#Skill"
            className="font-roboto-mono font-semibold text-white text-sm md:text-lg transition duration-300 transform active:scale-95"
          >
            Skill
          </a>
          <a
            href="#Projects"
            className="font-roboto-mono font-semibold text-white text-sm md:text-lg transition duration-300 transform active:scale-95"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="font-roboto-mono font-semibold text-white text-sm md:text-lg transition duration-300 transform active:scale-95"
          >
            Contact
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="material-icons font-roboto-mono font-semibold text-white text-sm md:text-lg">
              MENU
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 w-full">
          <a
            href="#AboutMe"
            className="block font-roboto-mono font-semibold text-white text-lg transition duration-300 transform active:scale-95 text-center"
          >
            About
          </a>
          <a
            href="#Skill"
            className="block font-roboto-mono font-semibold text-white text-lg transition duration-300 transform active:scale-95 text-center"
          >
            Skill
          </a>
          <a
            href="#Projects"
            className="block font-roboto-mono font-semibold text-white text-lg transition duration-300 transform active:scale-95 text-center"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="block font-roboto-mono font-semibold text-white text-lg transition duration-300 transform active:scale-95 text-center"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavbarSection;
