import React from "react";
import ABGSProject from "../../assets/Images/ABGS-Project.png"; // นำเข้าภาพด้วยชื่อใหม่ที่ไม่มี -
import KMUNITYProject from "../../assets/Images/KMUNITY-Project.png"; // นำเข้าภาพด้วยชื่อใหม่ที่ไม่มี -
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

      <div className="justify-center min-h-screen mx-auto">
        {/* Project Cards Section */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 h-[400px] overflow-y-auto scroll-smooth">
          {/* KMUNITY Project */}
          <div className="flex-none w-[600px]">
            <img
              src={KMUNITYProject} // ใช้ตัวแปรที่นำเข้ามา
              alt="KMUNITY Project"
              className="mb-2 rounded-md shadow-md w-full h-auto"
            />
          </div>
          {/* Auto Barrier Gate System Project */}
          <div className="flex-none w-[600px]">
            <img
              src={ABGSProject} // ใช้ตัวแปรที่นำเข้ามา
              alt="Auto Barrier Gate System Project"
              className="mb-2 rounded-md shadow-md w-full h-auto"
            />
          </div>

          {/* Uniqlo clone Project */}
          <div className="flex-none w-[600px] ">
            <img
              src={UNIQLOProject} // ใช้ตัวแปรที่นำเข้ามา
              alt=""
              className="mb-2 rounded-md shadow-md w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
