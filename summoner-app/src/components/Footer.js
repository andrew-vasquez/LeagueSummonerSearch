import React from "react";
import { companyLogos } from "./Images";



const Footer = () => {
  return (
    <footer className="bg-red-500 dark:bg-sky-700 p-3 w-full flex ">
      <a
        className="mx-auto"
        href="https://github.com/Allials"
        target="_blank"
        rel="noreferrer noopener"
      >
        <p className="text-white text-sm inline font-bold md:text-base">GitHub</p>
        <img
          src={companyLogos.gitHubBig}
          alt="Github Logo"
          className="w-6 pt-1 lg:w-10 mx-auto  "
        />
      </a>

      <a
        className="mx-auto md:text-base "
        href="https://www.linkedin.com/in/andrew-vasquez-000434237/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <p className="text-white text-sm inline font-bold">Linkedin</p>
        <img
          src={companyLogos.linkedinLogo}
          alt="Linkedin Logo"
          className="w-6 pt-1 mx-auto lg:w-10 "
        />
      </a>
      
    </footer>
  );
};

export default Footer;
