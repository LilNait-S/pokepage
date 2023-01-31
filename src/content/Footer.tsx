import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" text-white bg-footer-gray h-96">
      <div className="flex flex-col justify-center items-center p-6 bg-slate-500 text-cyan-50 h-96 gap-8">
        <div className="flex gap-6">
          <a
            href="https://github.com/LilNait-S"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Encuentrame en github"
          >
            <BsGithub className="text-4xl hover:text-highpink transition ease-in-out duration-300" />
          </a>
          <a
            href="www.linkedin.com/in/sergio-delgado-arenas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Encuentrame en linkedin"
          >
            <BsLinkedin className="text-4xl hover:text-highpink transition ease-in-out duration-300" />
          </a>
        </div>
        <div className="text-center">
          <p className="">©2022 LilNait-S todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
