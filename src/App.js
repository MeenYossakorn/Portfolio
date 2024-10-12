import React from "react";
import "./index.css";

import NavbarSection from "./components/Navbar/Navbar";
import IntroSection from "./components/Content/Intro";
import AboutMe from "./components/Content/AboutMe";
import MySkills from "./components/Content/MySkill";

export default function App() {
  return (
    <div>
      <NavbarSection />
      <IntroSection />
      <AboutMe />
      <MySkills />
    </div>
  );
}
