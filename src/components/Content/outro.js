import React, { useEffect, useRef, useState } from "react";
import ThankYouImage from "../../assets/Images/Meenphotoshop1-sawaddee.png"; // นำเข้ารูปภาพที่คุณอัปโหลด

const ThankYouSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visibility to true when the section enters the viewport
      },
      { threshold: 0.1 } // When 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col items-center justify-center h-screen bg-transparent text-white mt-2 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* image */}
      <img
        src={ThankYouImage}
        alt="Thank You"
        className="bg-transparent p-1 w-48 md:w-60 flex items-center justify-center" // ปรับขนาดภาพให้เล็กลง
      />

      {/* Text */}
      <div className="text-center mt-6 md:mt-14">
        {" "}
        {/* ปรับระยะห่าง */}
        <p className="text-white text-lg md:text-3xl font-jetbrains-mono-medium">
          {" "}
          {/* ปรับขนาดข้อความ */}
          THANK YOU FOR TAKING THE TIME TO EXPLORE MY PORTFOLIO.
        </p>
        <p className="text-white text-lg md:text-3xl font-jetbrains-mono-medium mt-4">
          {" "}
          {/* ปรับขนาดข้อความ */}I APPRECIATE YOUR INTEREST!
        </p>
      </div>
    </div>
  );
};

export default ThankYouSection;
