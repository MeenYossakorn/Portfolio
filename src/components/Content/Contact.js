import React, { useEffect, useRef, useState } from "react";
import githubIcon from "../../assets/Images/github.png";
import linkedinIcon from "../../assets/Images/linkedin.png";
import mailIcon from "../../assets/Images/mail.png";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // ปรับค่า threshold เพื่อควบคุมเมื่อแอนิเมชันจะเริ่มทำงาน
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="Contact" ref={contactRef}>
      <div
        className={`font-jetbrains-mono-medium bg-transparent text-white p-6 md:p-12 flex flex-col items-center justify-center min-h-screen mt-40 ${
          isVisible ? "slide-in-right" : ""
        }`}
      >
        <h1 className="text-white text-3xl md:text-4xl mb-8 text-center">
          FEEL FREE TO CONTACT ME AND FOLLOW MY WORK AT
        </h1>
        <div className="mt-2 flex flex-col items-center space-y-5 text-center">
          {/* GitHub Icon with Name */}
          <a
            href="https://github.com/MeenYossakorn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full text-white transition-transform duration-300 transform hover:scale-105 active:scale-95"
          >
            <div className="bg-transparent p-1 flex items-center justify-start">
              <img
                src={githubIcon}
                alt="GitHub Icon"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-white text-xl md:text-lg ml-4">
                github.com/MeenYossakorn
              </span>
            </div>
          </a>
          {/* Mail Icon with Email */}
          <a
            href="mailto:meenyossakorn2546@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full text-white transition-transform duration-300 transform hover:scale-105 active:scale-95"
          >
            <div className="bg-transparent p-1 flex items-center justify-start">
              <img
                src={mailIcon}
                alt="Mail Icon"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-white text-xl md:text-lg ml-4">
                meenyossakorn2546@gmail.com
              </span>
            </div>
          </a>

          {/* LinkedIn Icon with Name */}
          <a
            href="https://linkedin.com/in/yossakorn-lengrabum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full text-white transition-transform duration-300 transform hover:scale-105 active:scale-95"
          >
            <div className="bg-transparent p-1 flex items-center justify-start">
              <img
                src={linkedinIcon}
                alt="LinkedIn Icon"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-white text-xl md:text-lg whitespace-nowrap overflow-hidden text-ellipsis ml-4">
                linkedin.com/in/yossakorn-lengrabum
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
