import React from "react";
import { Link } from 'react-router-dom'
import netlify from '../assets/logos/netlify.png'
import linkedin from '../assets/logos/linkedin.png'
import github from '../assets/logos/github.png'





const Footer = () => {
  return (
  <>
    <div className="container text-center mt-10 flex flex-col  ">
      <div className="text-3xl ">💾</div>
      <p className="text-white text-xl mt-2 font-semibold">Javier Chavarria</p>
      <div className="flex justify-between md:justify-evenly  mt-2">
        <Link
          to="https://www.linkedin.com/in/javier-chavarria-78a538205/"
          target="_blank"
          className="w-4/12 gap-1 justify-center md:justify-end text-white text-l hover:underline flex items-center  mt-2 "
        >
          Linkedin
          <img className="w-5 md:w-5" src={linkedin} alt="icon netlify"></img>
        </Link>
        <Link
          to="https://github.com/javierCh77"
          target="_blank"
          className="w-4/12 justify-center gap-1  text-white text-l hover:underline flex items-center   mt-2 "
        >
          GitHub
          <img className="w-5 md:w-5" src={github} alt="icon netlify"></img>
        </Link>
        <Link
          to="https://www.netlify.com/"
          target="_blank"
          className="w-4/12 justify-center md:justify-start gap-1 text-white text-l hover:underline flex items-center  mt-2 "
        >
          Netlify
          <img className="w-5 md:w-5" src={netlify} alt="icon netlify"></img>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Footer;
