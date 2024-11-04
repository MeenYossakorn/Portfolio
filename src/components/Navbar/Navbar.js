import React, { useState } from "react";

const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 backdrop-blur-lg bg-BGBlue/50 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#Intro"
          className="font-roboto-mono font-semibold text-lg md:text-xl text-white transition duration-300 transform active:scale-95"
        >
          Portfolio
        </a>
        <div className="hidden md:flex space-x-10">
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
            className="relative group focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-purple-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 animate-bounce text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
                <div className="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
                <div className="bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 w-full items-center">
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
