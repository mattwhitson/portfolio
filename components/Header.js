import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [headerSticky, setHeaderSticky] = useState(false);
  const [currentSection, setCurrentSection] = useState();
  const [sectionHeights, setSectionHeights] = useState();
  const [loaded, setLoaded] = useState(false);
  const sections = ["home", "about", "projects", "contact"];

  const determineCurrentSection = () => {
    switch (true) {
      case window.scrollY > sectionHeights[3] - 500:
        setCurrentSection(sections[3]);
        break;
      case window.scrollY > sectionHeights[2] - 500:
        setCurrentSection(sections[2]);
        break;
      case window.scrollY > sectionHeights[1] - 500:
        setCurrentSection(sections[1]);
        break;
      default:
        setCurrentSection(sections[0]);
    }
  };

  const setFixedHeader = () => {
    if (window.scrollY > window.innerHeight) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  };

  useEffect(() => {
    if (document.readyState) {
      const results = sections.map(
        (section) =>
          document.getElementById(section).getBoundingClientRect().top +
          window.pageYOffset
      );
      setSectionHeights(results);
    }

    window.addEventListener("scroll", setFixedHeader);

    return () => window.removeEventListener("scroll", setFixedHeader);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sectionHeights) {
      window.addEventListener("scroll", determineCurrentSection);
    }

    return () => window.removeEventListener("scroll", determineCurrentSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionHeights]);

  return (
    <header
      className={`h-16 w-full backdrop-blur-10 flex items-center justify-center ${
        headerSticky ? "fixed top-0 z-20" : "absolute top-0"
      }`}
    >
      <div className="h-full max-w-7xl w-full items-center mx-auto flex justify-between">
        <h4 className="hidden sm:block text-white text-xl md:text-2xl pl-2 font-semibold">
          Matthew Whitson
        </h4>
        <nav className="mx-auto sm:mx-0 sm:ml-auto flex text-white text-xl md:text-2xl space-x-4">
          <Link href="/#home">
            <a className={`${currentSection === "home" && "text-blue-500"}`}>
              Home
            </a>
          </Link>
          <Link href="/#about">
            <a className={`${currentSection === "about" && "text-blue-500"}`}>
              About
            </a>
          </Link>
          <Link href="/#projects">
            <a
              className={`${currentSection === "projects" && "text-blue-500"}`}
            >
              Projects
            </a>
          </Link>
          <Link href="/#contact">
            <a className={`${currentSection === "contact" && "text-blue-500"}`}>
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
