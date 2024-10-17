import React from "react";

const MyProject = () => {
  return (
    <div>
      <div className="w-full max-w-[1500px] mx-auto mt-40">
        <div className="bg-transparent text-white p-4 flex flex-col items-center justify-start ">
          {/* Header Section */}
          <div className="w-full max-w-[1220px] mb-4">
            <h1 className="text-4xl font-roboto-mono font-bold text-white relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-0.5 after:bg-gradient-purple">
              PROJECT
            </h1>
            <h2 className="text-3xl font-jetbrains-mono-medium font-bold text-purple-500 mt-6">
              MY PROJECT
            </h2>
            <p className="text-white font-roboto text-sm mt-3">
              This is a project I completed during my time at university.
            </p>
          </div>
        </div>
      </div>

      <div className="justify-center min-h-screen mx-auto">
        {/* Project Cards Section */}
        <div className="justify-center mx-auto w-full max-w-[1500px] flex overflow-x-auto whitespace-nowrap space-x-4 scroll-snap-x-mandatory scrollbar-hide">
          {/* KMUNITY Project */}
          <div className="bg-white rounded-3xl px-50 py-28 shadow-lg">
            <img src="url" alt="" className="mb-4 rounded-md shadow-md" />
          </div>
          {/* Auto Barrier Gate System Project */}
          <div className="bg-white rounded-3xl px-52 py-32 shadow-lg">
            <img src="url" alt="" className="mb-4 rounded-md shadow-md" />
          </div>
          <div className="bg-white rounded-3xl px-52 py-32 shadow-lg">
            <img src="url" alt="" className="mb-4 rounded-md shadow-md" />
          </div>
          <div className="bg-white rounded-3xl px-52 py-32 shadow-lg">
            <img src="url" alt="" className="mb-4 rounded-md shadow-md" />
          </div>
          <div className="bg-white rounded-3xl px-52 py-32 shadow-lg">
            <img src="url" alt="" className="mb-4 rounded-md shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
