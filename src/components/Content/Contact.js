import React from "react";
import githubIcon from "../../assets/Images/github.png";
import linkedinIcon from "../../assets/Images/linkedin.png";
import mailIcon from "../../assets/Images/mail.png";

const Contact = () => {
  return (
    <div className="font-jetbrains-mono-medium bg-transparent text-white p-42 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-white text-3xl md:text-3xl mb-8">
        FEEL FREE TO CONTACT ME AND FOLLOW MY WORK AT
      </h1>
      <div className="w-full  mt-2 flex flex-col items-center space-y-5 text-center">
        {/* Mail Icon with Email */}
        <a
          href="mailto:meenyossakorn2546@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full text-white  ml-8"
        >
          <div className="bg-transparent p-1 flex items-center justify-start">
            <img
              src={mailIcon}
              alt="Mail Icon"
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-white text-xl md:text-lg ml-12">
              meenyossakorn2546@gmail.com
            </span>
          </div>
        </a>

        {/* LinkedIn Icon with Name */}
        <a
          href="https://linkedin.com/in/yossakorn-lengrabum"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full text-white  ml-[165px]"
        >
          <div className="bg-transparent p-1 flex items-center justify-start">
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-white text-xl md:text-lg ml-12">
              linkedin.com/in/yossakorn-lengrabum
            </span>
          </div>
        </a>

        {/* GitHub Icon with Name */}
        <a
          href="https://github.com/MeenYossakorn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full text-white  "
        >
          <div className="bg-transparent p-1 flex items-center justify-start">
            <img
              src={githubIcon}
              alt="GitHub Icon"
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-white text-xl md:text-lg ml-12">
              github.com/MeenYossakorn
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
