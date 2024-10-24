import React from "react";
import "./index.css";

import NavbarSection from "./components/Navbar/Navbar";
import IntroSection from "./components/Content/Intro";
import MySkills from "./components/Content/MySkill";
import MyProject from "./components/Content/MyProject";
import Contact from "./components/Content/Contact";
import MouseEffect from "./components/Mouse/MouseEffect";
import ThankYouSection from "./components/Content/outro";
import AboutMe from "./components/Content/Aboutme";


export default function App() {
  return (
    <div className="no-select">
      <NavbarSection />
      <MouseEffect />
      <IntroSection />
      <AboutMe />
      <MySkills />
      <MyProject />
      <Contact />
      <ThankYouSection/>
    </div>
  );
}
