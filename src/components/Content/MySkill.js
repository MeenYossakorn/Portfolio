import React, { useEffect, useRef, useState } from "react";

const MySkills = () => {
  const [isVisible, setIsVisible] = useState({
    left: false,
    right: false,
  });
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leftSectionRef.current) {
            setIsVisible((prevState) => ({
              ...prevState,
              left: entry.isIntersecting,
            }));
          } else if (entry.target === rightSectionRef.current) {
            setIsVisible((prevState) => ({
              ...prevState,
              right: entry.isIntersecting,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }
    if (rightSectionRef.current) {
      observer.observe(rightSectionRef.current);
    }

  }, []);

  return (
    <section id="Skill">
      <div className="bg-transparent text-white p-14 flex items-center justify-center mb-4 mt-12 min-h-screen">
        <div className="grid grid-cols-2 gap-10 w-full max-w-[1220px]">
          <div
            ref={leftSectionRef}
            className={`transition-all duration-500 ${
              isVisible.left ? "slide-in-left" : ""
            }`}
          >
            {/* Left Section */}
            <div className="flex flex-col justify-center max-w-md">
              <h2 className="font-roboto-mono text-3xl font-semibold text-white mb-2">
                MY SKILL
              </h2>
              <p className="text-white font-roboto text-sm mb-6 pr-28">
                These are the languages and tools I regularly use to deliver
                efficient and modern solutions to users.
              </p>
            </div>
            {/* Programming Language Section */}
            <div className="flex flex-col lg:flex-row justify-between w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
              <div className="mb-8">
                <h3 className="whitespace-nowrap font-roboto-mono text-lg font-semibold font-roboto text-white mb-4">
                  Programming Language
                </h3>
                <div className="flex space-x-6 mb-4">
                  {/* HTML Icons */}
                  <div>
                    <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                        alt="HTML Icon"
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="font-roboto text-white text-center mt-1">
                      HTML
                    </p>
                  </div>
                  {/* CSS Icons */}
                  <div>
                    <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                        alt="CSS Icon"
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="font-roboto text-white text-center mt-1">
                      CSS
                    </p>
                  </div>
                  {/* Python Icons */}
                  <div>
                    <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--programming-language-logos-icons-1720083.png?f=webp"
                        alt="Python Icon"
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="font-roboto text-white text-center mt-1">
                      Python
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Frameworks/Libraries Section */}
            <h3 className="font-roboto-mono text-lg font-semibold font-roboto text-white mb-4">
              Frameworks \ Libraries
            </h3>
            <div className="flex space-x-6 mb-4">
              {/* React Icons */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    alt="React Icon"
                    className="w-8 h-8"
                  />
                </div>
                <p className="font-roboto text-white text-center mt-1">React</p>
              </div>
              {/* Tailwind Icons */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                  <img
                    src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-144x86-czphjb87.png"
                    alt="TailwindCSS Icon"
                    className="w-10 h-6"
                  />
                </div>
                <p className="font-roboto text-white text-center mt-1">
                  TailwindCSS
                </p>
              </div>
              {/* MaterialUIIcons */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                  <img
                    src="https://frontendmag.com/wp-content/uploads/2023/01/material-ui-logo.png"
                    alt="MaterialUI Icon"
                    className="w-8 h-8"
                  />
                </div>
                <p className="font-roboto text-white text-center mt-1">
                  MaterialUI
                </p>
              </div>
              {/* DaisyUI Icons */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/76870092?s=280&v=4"
                    alt="DaisyUI Icon"
                    className="w-8 h-8"
                  />
                </div>
                <p className="font-roboto text-white text-center mt-1">
                  DaisyUI
                </p>
              </div>
              {/* Bootstrap Icons */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                    alt="Bootstrap Icon"
                    className="w-10 h-8"
                  />
                </div>
                <p className="font-roboto text-white text-center mt-1">
                  Bootstrap
                </p>
              </div>
            </div>
          </div>

          <div
            ref={rightSectionRef}
            className={`w-full lg:w-1/2 lg:pl-8 mt-[150px] ml-20 transition-all duration-500 ${
              isVisible.right ? "slide-in-left" : ""
            }`}
          >
            {/* Right Section */}
            <div className="flex flex-col justify-center max-w-md">
              <div className="mb-8">
                <h3 className="font-roboto-mono text-lg font-semibold font-roboto text-white mb-4">
                  Tools
                </h3>
                <div className="flex space-x-6 mb-4">
                  {/* Figma Icons */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                      <img
                        src="https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png"
                        alt="Figma Icon"
                        className="w-6 h-8"
                      />
                    </div>
                    <p className="font-roboto text-white text-center mt-1">
                      Figma
                    </p>
                  </div>

                  {/* Canva Icons */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                      <img
                        src="https://img.icons8.com/fluent/512/canva.png"
                        alt="Canva Icon"
                        className="w-12 h-12"
                      />
                    </div>
                    <p className="font-roboto text-white text-center mt-1">
                      Canva
                    </p>
                  </div>

                  {/* Photoshop Icons */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
                        alt="Photoshop Icon"
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="font-roboto text-white text-center mt-1">
                      Photoshop
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="whitespace-nowrap font-roboto-mono text-lg font-semibold font-roboto text-white mb-4">
                Database \ Version Control
              </h3>
              <div className="flex space-x-6 mb-4">
                {/* MySQL Icons */}
                <div>
                  <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png"
                      alt="MySQL Icon"
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="font-roboto text-white text-center mt-1">
                    MySQL
                  </p>
                </div>
                {/* Firebase Icons */}
                <div>
                  <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                      alt="Firebase Icon"
                      className="w-12 h-12"
                    />
                  </div>
                  <p className="font-roboto text-white text-center mt-1">
                    Firebase
                  </p>
                </div>
                {/* Git Icons */}
                <div>
                  <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                    <img
                      src="https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png"
                      alt="Firebase Icon"
                      className="w-10 h-10"
                    />
                  </div>
                  <p className="font-roboto text-white text-center mt-1">Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
