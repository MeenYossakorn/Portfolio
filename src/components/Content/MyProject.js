import React from "react";
import ABGSProject from "../../assets/Images/ABGS-Project.png";
import KMUNITYProject from "../../assets/Images/KMUNITY-Project.png";
import UNIQLOProject from "../../assets/Images/UNIQLO-Project.png";

const MyProject = () => {
  return (
    <section id="Projects">
      <div className="w-full max-w-[1500px] mx-auto ">
        <div className="bg-transparent text-white p-14 flex flex-col items-center justify-start ">
          {/* Header Section */}
          <div className="w-full max-w-[1220px] ">
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

      <div className="relative overflow-hidden h-[400px] ">
        {/* Project Cards Section */}
        <div className="flex w-[calc(600px*3)] animate-scroll space-x-6 hover:animate-pause mt-4">
          {/* KMUNITY Project */}
          <a
            href="https://github.com/MeenYossakorn/Kmunity-Project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-none w-[500px] group">
              <img
                src={KMUNITYProject}
                alt="KMUNITY Project"
                className="rounded-md shadow-md w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          </a>

          {/* Auto Barrier Gate System Project */}
          <a
            href="https://github.com/MeenYossakorn/ABGS-Website-project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-none w-[500px] group">
              <img
                src={ABGSProject}
                alt="Auto Barrier Gate System Project"
                className="rounded-md shadow-md w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          </a>

          {/* Uniqlo Clone Project */}
          <a
            href="https://github.com/MeenYossakorn/Project-Flutter-Clone-App.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-none w-[500px] group">
              <img
                src={UNIQLOProject}
                alt="Uniqlo Clone Project"
                className="rounded-md shadow-md w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          </a>

          {/* Duplicate elements for looping effect */}
          {/* KMUNITY Project */}
          <a
            href="https://github.com/MeenYossakorn/Kmunity-Project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-none w-[500px] group">
              <img
                src={KMUNITYProject}
                alt="KMUNITY Project"
                className="rounded-md shadow-md w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          </a>

          {/* Auto Barrier Gate System Project */}
          <a
            href="https://github.com/MeenYossakorn/ABGS-Website-project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-none w-[500px] group">
              <img
                src={ABGSProject}
                alt="Auto Barrier Gate System Project"
                className="rounded-md shadow-md w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          </a>

          {/* Uniqlo Clone Project */}
          <a
            href="https://github.com/MeenYossakorn/Project-Flutter-Clone-App.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-none w-[500px] group">
              <img
                src={UNIQLOProject}
                alt="Uniqlo Clone Project"
                className="rounded-md shadow-md w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
