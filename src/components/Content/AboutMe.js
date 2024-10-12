import React from "react";
import meenPhotoshopMacbook from "../../assets/Images/Meenphotoshop2-macbook.png";
const AboutMe = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-navy-900 text-white p-8 font-roboto">
      <div className="max-w-[2500px]">
        <div className="bg-black space-x-2 rounded-3xl p-8">
          <h1 className="text-4xl font-bold mb-4 font-roboto-mono">ABOUT ME</h1>
          <div>
            <p className="mt-6 font-roboto text-md max-w-[1210px]   ">
              &nbsp; I am currently a 4th-year student majoring in Computer and
              Electronics Engineering. I have a strong interest and passion for
              front-end development, with expertise in UX/UI Design, React,
              HTML, and CSS, gained through various university projects. I am
              committed to continuous learning and self-improvement in this
              field, and I am eager to pursue an internship in front-end
              development to further apply my knowledge and advance my future
              career.
              <div className="relative mb-2 inline-block w-full h-0.5 bg-gradient-purple mt-6"></div>
            </p>

            <div className="flex items-start mt-8">
              <div className="hidden md:block flex-1 ml-28">
                <div className="bg-transparent p-1 w-[280px] h-auto flex items-center justify-center">
                  <img
                    src={meenPhotoshopMacbook}
                    alt="Yossakorn Lengrabum"
                    className="w-full max-w-[1000px] rounded-lg"
                  />
                </div>
              </div>

              <div className="mr-8">
                <div className="flex-0">
                  <h2 className="text-3xl font-semibold font-roboto-mono mb-2 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-0.5 after:bg-gradient-purple">
                    EDUCATION
                  </h2>

                  <div className="mt-2 ">
                    <p className="text-md font-roboto mt-2">
                      King Mongkut's University of Technology North Bangkok
                    </p>
                    <p className="text-md font-roboto mt-2">2021 - Current</p>
                    <p className="text-md font-roboto mt-2">
                      Faculty of College Of Industrial Technology (CIT)
                    </p>
                    <p className="text-md font-roboto mt-2">
                      Major - Electronics and Computer Engineering
                    </p>
                    <p className="text-md font-roboto mt-2">GPA : 2.64</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
