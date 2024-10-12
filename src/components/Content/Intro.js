import React from "react";
import meenPhotoshopHi from "../../assets/Images/Meenphotoshop3-Hi.png";

const IntroSection = () => {
  return (
    <div className="bg-transparent text-white flex items-center justify-center min-h-screen">
      <div className="max-w-[520px]">
        <p className="text-purple-500 mb-2 text-2xl font-roboto-mono font-bold">
          Hi, my name is
        </p>
        <h1 className="text-4xl font-bold mb-4 mt-2 font-roboto relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-0.5 after:bg-gradient-purple">
          Yossakorn Lengrabum
        </h1>
        <p className="mb-6 mt-2 font-roboto text-lg">
          &nbsp; I'm a Computer and Electronics Engineering student with a
          passion for front-end development and UX/UI design. I am actively
          seeking internship opportunities to apply my skills and expand my
          professional experience. If you'd like to collaborate or learn more
          about my work, feel free to reach out!
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold font-roboto-mono py-2 px-4 rounded-lg">
          Contact Me
        </button>
      </div>
      <div className="hidden md:block ml-48">
        <div className="bg-transparent p-1 w-80 h-50 flex items-center justify-center ">
          <img
            src={meenPhotoshopHi}
            alt="Yossakorn Lengrabum"
            className="w-full max-w-[1000px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
