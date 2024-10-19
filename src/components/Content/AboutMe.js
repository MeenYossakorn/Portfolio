import React from "react";
import meenPhotoshopMacbook from "../../assets/Images/Meenphotoshop2-macbook.png";

const AboutMe = () => {
  return (
    <section id="AboutMe">
      <div>
        <div className="flex items-center justify-center min-h-screen  text-white p-12 font-roboto scrollbar-hide mt-40">
          <div className="max-w-[1300px] bg-black bg-opacity-30 space-x-2 rounded-3xl p-8">
            <h1 className="text-3xl font-bold mb-4 font-roboto-mono">
              ABOUT ME
            </h1>
            <div className=" mt-4 px-10">
              <div>
                <p className=" font-roboto text-sm max-w-[1300px]   ">
                  &nbsp;&nbsp; I am currently a 4th-year student majoring in
                  Computer and Electronics Engineering. I have a strong interest
                  and passion for front-end development, with expertise in UX/UI
                  Design, React, HTML, and CSS, gained through various
                  university projects. I am committed to continuous learning and
                  self-improvement in this field, and I am eager to pursue an
                  internship in front-end development to further apply my
                  knowledge and advance my future career.
                  <div className="relative mb-2 inline-block w-full h-0.5 bg-gradient-purple mt-6"></div>
                </p>

                <div className="flex items-start mt-4">
                  <div className="hidden md:block flex-1 ml-20">
                    <div className="bg-transparent p-1 w-[250px] h-auto flex items-center justify-center">
                      <img
                        src={meenPhotoshopMacbook}
                        alt="Yossakorn Lengrabum"
                        className=""
                      />
                    </div>
                  </div>

                  <div className="mr-16">
                    <div className="flex-0">
                      <h2 className="text-2xl font-semibold font-roboto-mono mb-2 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[1px] after:w-full after:h-0.5 after:bg-gradient-purple">
                        EDUCATION
                      </h2>

                      <div className="mt-2 ">
                        <p className="text-sm font-roboto mt-2">
                          King Mongkut's University of Technology North Bangkok
                        </p>
                        <p className="text-sm font-roboto mt-2">
                          2021 - Current
                        </p>
                        <p className="text-sm font-roboto mt-2">
                          Faculty of College Of Industrial Technology (CIT)
                        </p>
                        <p className="text-sm font-roboto mt-2">
                          Major - Electronics and Computer Engineering
                        </p>
                        <p className="text-sm font-roboto mt-2">GPA : 2.64</p>
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

export default AboutMe;
