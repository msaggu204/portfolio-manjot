import React, { useState, useEffect } from "react";
import "./App.css";
import GridHeader from "./components/GridHeader";
import SlideAnimation from "./components/SlideAnimation";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import NoPage from "./pages/NoPage";

function scrollToHash() {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function App() {
  const [currentPath, setCurrentPath] = useState(getPath());

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(getPath());
    };

    window.addEventListener("popstate", handlePathChange);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("popstate", handlePathChange);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  function getPath() {
    const path = window.location.pathname.replace("/portfolio-manjot", "") || "/";
    return path + window.location.hash;
  }

  const isValidPath = (path: string) => {
    const validPaths = [
      "/",
      "/#workexperience",
      "/#projects",
      "/#volunteering",
      "/#home",
      "/portfolio-manjot/",
      "/portfolio-manjot/#workexperience",
      "/portfolio-manjot/#projects",
      "/portfolio-manjot/#volunteering",
      "/portfolio-manjot/#home"
    ];
    return validPaths.includes(path);
  };

  const renderPage = () => {
    if (isValidPath(currentPath)) {
      return (
        <>
          <SlideAnimation />
          <SecondPage />
          <ThirdPage />
          <FourthPage />
          <GridHeader />
        </>
      );
    } else {
      return <NoPage />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
