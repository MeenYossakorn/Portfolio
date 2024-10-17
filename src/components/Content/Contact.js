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
      <div className="w-full lg:w-1/2 mt-2 flex flex-col items-center space-y-5">
        {/* Mail Icon with Email */}
        <div className="flex items-center justify-start w-full">
          <div className="bg-transparent p-1 flex items-center justify-center ml-16">
            <img
              src={mailIcon}
              alt="Mail Icon"
              className="w-10 h-10 rounded-lg" // Set fixed size for consistency
            />
          </div>
          <p className="text-white text-xl md:text-lg ml-8 flex items-center ml-12">
            meen0969987598@gmail.com
          </p>
        </div>

        {/* LinkedIn Icon with Name */}
        <div className="flex items-center justify-start w-full">
          <div className="bg-transparent p-1 flex items-center justify-center ml-16">
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="w-10 h-10 rounded-lg" // Set fixed size for consistency
            />
          </div>
          <p className="text-white text-xl md:text-lg ml-8 flex items-center ml-12">
            linkedin.com/in/yossakorn-lengrabum
          </p>
        </div>

        {/* GitHub Icon with Name */}
        <div className="flex items-center justify-start w-full">
          <div className="bg-transparent p-1 flex items-center justify-center ml-16">
            <img
              src={githubIcon}
              alt="GitHub Icon"
              className="w-10 h-10 rounded-lg" // Set fixed size for consistency
            />
          </div>
          <p className="text-white text-xl md:text-lg ml-8 flex items-center ml-12">
            github.com/MeenYossakorn
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
