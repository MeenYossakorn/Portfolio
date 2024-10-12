import React from "react";

const MySkills = () => {
  return (
    <div className="bg-transparent text-white p-14 flex items-center justify-center  mb-4 mt-2 mt-4 min-h-screen">
      <div className="grid grid-cols-2 gap-10 w-full max-w-4xl">
        <div className="">
          {/* Left Section */}
          <div className="flex flex-col justify-center max-w-md">
            <h2 className="font-roboto-mono text-4xl font-semibold text-white mb-4">
              MY SKILL
            </h2>
            <p className="text-white font-roboto text-md mb-8">
              These are the languages and tools I regularly use to deliver
              efficient and modern solutions to users.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <div className="mb-8">
              {/* Programming Language Section */}
              <h3 className="font-roboto-mono text-xl font-semibold font-roboto text-white mb-4">
                Programming Language
              </h3>
              <div className="flex space-x-6 mb-4">
                {/* Placeholder for your icons */}
                <div>
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    Icon
                  </div>
                  <p className="font-roboto text-white text-center mt-1">
                    HTML
                  </p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    Icon
                  </div>
                  <p className="font-roboto text-white text-center mt-1">CSS</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    Icon
                  </div>
                  <p className="font-roboto text-white text-center mt-1">
                    Python
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks/Libraries Section */}
          <h3 className="font-roboto-mono text-xl font-semibold font-roboto text-white mb-4">
            Frameworks \ Libraries
          </h3>
          <div className="flex space-x-6 mb-4">
            {/* Placeholder for your icons */}
            <div>
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                Icon
              </div>
              <p className="font-roboto text-white text-center mt-1">React</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                Icon
              </div>
              <p className="font-roboto text-white text-center mt-1">
                TailwindCSS
              </p>
            </div>
            <div>
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                Icon
              </div>
              <p className="font-roboto text-white text-center mt-1">
                MaterialUI
              </p>
            </div>
            <div>
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                Icon
              </div>
              <p className="font-roboto text-white text-center mt-1">DaisyUI</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                Icon
              </div>
              <p className="font-roboto text-white text-center mt-1">
                Bootstrap
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8 mt-[185px] ml-16">
          {/* Right Section */}
          <div className="flex flex-col justify-center max-w-md">
            <div className="mb-8">
              {/* Tools Section */}
              <h3 className="font-roboto-mono text-xl font-semibold font-roboto text-white mb-4">
                Tools
              </h3>
              <div className="flex space-x-6 mb-4">
                {/* Placeholder for your icons */}
                <div>
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    Icon
                  </div>
                  <p className="font-roboto text-white text-center mt-1">
                    Figma
                  </p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    Icon
                  </div>
                  <p className="font-roboto text-white text-center mt-1">
                    Canva
                  </p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    Icon
                  </div>
                  <p className="font-roboto text-white text-center mt-1">
                    Photoshop
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Database Section */}
            <h3 className="font-roboto-mono text-xl font-semibold font-roboto text-white mb-4">
              Database
            </h3>
            <div className="flex space-x-6">
              {/* Placeholder for your icons */}
              <div>
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                  Icon
                </div>
                <p className="font-roboto text-white text-center mt-1">MySQL</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                  Icon
                </div>
                <p className="font-roboto text-white text-center mt-1">
                  Firebase
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
