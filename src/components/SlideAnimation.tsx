import React from "react";
import Intro from "./Intro";
import NameIntro from "./NameIntro";
import DescriptIntro from "./DescriptIntro";
import IconMenu from "./IconMenu";

const SlideAnimation: React.FC = () => {
  return (
    <>
      <div className="bg">
      <IconMenu />
      <DescriptIntro />
        <NameIntro />
        <div id="home" className="intro-container">
          <Intro />
        </div>
      </div>
    </>
  );
};

export default SlideAnimation;
