import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";


const Header = () => {

  return (
    <>
      <div className="md:container md:mx-auto   text-center lg:text-left  p-10">
         <Link to="/" className="  text-4xl text-white  lg:text-4xl  lg:text-white font-semibold">💾 Javier Chavarria</Link>
      </div> 
      <NavBar/>
      
    </>
  )
};

export default Header;