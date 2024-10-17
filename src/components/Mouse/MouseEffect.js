import React, { useEffect, useState } from "react";

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-none">
      {/* วงกลมเล็ก */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          zIndex: 60, // เพิ่ม z-index
        }}
      />
      {/* วงกลมใหญ่ */}
      <div
        className="fixed top-0 left-0 w-12 h-12 bg-transparent rounded-full border-2 border-white pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${position.x - 30}px, ${position.y - 30}px)`,
          zIndex: 60, // เพิ่ม z-index
        }}
      />
    </div>
  );
};

export default MouseEffect;
