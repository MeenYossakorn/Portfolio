import React from "react";
import meenPhotoshopMacbook from "../../assets/Images/Meenphotoshop2-macbook.png";

const About = () => {
  return (
    <section id="AboutMe">
      <div>
        <div className="flex items-center justify-center min-h-screen text-white p-6 md:p-12 font-roboto scrollbar-hide mt-12 relative">
          <div className="max-w-[470px] sm:max-w-[640px] md:max-w-[1300px] bg-black bg-opacity-30 space-y-4 rounded-3xl p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-roboto-mono">
              ABOUT ME
            </h1>
            <div className="mt-4 px-2 sm:px-4 md:px-10">
              <div>
                <p className="font-roboto text-[12px] sm:text-xs md:text-base">
                  &nbsp;&nbsp; I am currently a 4th-year student majoring in
                  Computer and Electronics Engineering. I have a strong interest
                  and passion for front-end development, with expertise in UX/UI
                  Design, React, HTML, and CSS, gained through various
                  university projects. I am committed to continuous learning and
                  self-improvement in this field, and I am eager to pursue an
                  internship in front-end development to further apply my
                  knowledge and advance my future career.
                  <div className="relative mb-2 inline-block w-full h-0.5 bg-gradient-purple mt-6 "></div>
                </p>

                <div className="flex flex-col md:flex-row items-start mt-4">
                  <div className="hidden md:flex flex-1 justify-center md:justify-center">
                    <div className="bg-transparent p-1 w-[300px] h-auto flex items-center justify-center">
                      <img
                        src={meenPhotoshopMacbook}
                        alt="Yossakorn Lengrabum"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="flex-1 mt-4 md:mt-0 md:ml-8">
                    <h2 className="text-lg sm:text-2xl font-semibold font-roboto-mono mb-2 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[1px] after:w-full after:h-0.5 after:bg-gradient-purple">
                      EDUCATION
                    </h2>

                    <div className="mt-2">
                      <p className="text-[10px] sm:text-xs md:text-base font-roboto whitespace-nowrap overflow-x-auto">
                        King Mongkut's University of Technology North Bangkok
                      </p>

                      <p className="text-[10px] sm:text-sm md:text-base font-roboto">
                        2021 - Current
                      </p>
                      <p className="text-[10px] sm:text-sm md:text-base font-roboto">
                        Faculty of College Of Industrial Technology (CIT)
                      </p>
                      <p className="text-[10px] sm:text-sm md:text-base font-roboto">
                        Major - Electronics and Computer Engineering
                      </p>
                      <p className="text-[10px] sm:text-sm md:text-base font-roboto">
                        GPA : 2.64
                      </p>

                      {/* Button section */}
                      <div className="mt-5">
                        <a
                          href="https://drive.google.com/file/d/16-hWWbwn16TMl7urZF9HV88QpxhMMr90/view?usp=sharing"
                          className="group-hover:cursor-none bg-purple-600 hover:bg-purple-700 text-white font-jetbrains-mono-medium py-2 px-3 rounded-lg 
                          transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Resume
                        </a>
                        <a
                          href="https://drive.google.com/file/d/1SeMM1y_j7eoKoO5n6dt3qDXo32NrCL-j/view?usp=sharing"
                          className="group-hover:cursor-none bg-purple-600 hover:bg-purple-700 text-white font-jetbrains-mono-medium py-2 px-3 rounded-lg 
                          transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 ml-4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Transcript
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
