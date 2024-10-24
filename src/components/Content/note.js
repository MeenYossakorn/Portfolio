<section id="Skill">
  <div className="bg-transparent text-white p-14 flex items-center justify-center min-h-screen relative mt-8">
    <div className="flex flex-col lg:flex-row gap-10 w-full max-w-[1220px]">
      {/* Left Section */}
      <div
        ref={leftSectionRef}
        className={`transition-all duration-500 ${
          isVisible.left ? "slide-in-left" : ""
        }`}
      >
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
                <p className="font-roboto text-white text-center mt-1">HTML</p>
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
                <p className="font-roboto text-white text-center mt-1">CSS</p>
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
          {/* Other Icons */}
        </div>
      </div>

      {/* Right Section */}
      <div
        ref={rightSectionRef}
        className={`w-full lg:w-1/2 lg:pl-8 transition-all duration-500 ${
          isVisible.right ? "slide-in-left" : ""
        }`}
      >
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
                <p className="font-roboto text-white text-center mt-1">Figma</p>
              </div>
              {/* Other Icons */}
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
              <p className="font-roboto text-white text-center mt-1">MySQL</p>
            </div>
            {/* Other Icons */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
