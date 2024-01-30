import React from "react";
import yo from "../assets/picture/yo.jpeg";
import Footer from "../components/Footer";

export const Abaut = () => {
  return (
    <>
      <div className="flex flex-wrap container w-full text-justify ">
        <div className="bg-slate-900 text-white w-full md:w-4/6  p-8 md:rounded-l-lg ">
          <h1 className=" text-5xl">About me</h1>
          <p className="mt-10 text-xl">
            Hey, I'm Javier! I'm a software developer Full-Stack working in Ushuaia Argentina.
            Welcome to my spot on the web for my projects, tutorials, and anything else I want to show the world. Check out the projects
            page to see a highlight of my open-source work, and the blog for my
            tutorials and more.
          </p>
          
          <p className="mt-6 text-xl">
            You can contact me by email from <a className='text-cyan-400 ' href="mailto:javierchavarria21@gmail.com">Here</a> to say
            hi! I always appreciate meeting new people.
          </p>
        </div>

        <div className="bg-slate-900 text-white w-full md:w-2/6 p-8 md:rounded-r-lg flex flex-col justify-center    ">
          <div className="shadow-lg  shadow-cyan-500/50">
            <img className="rounded" src={yo} alt="Javier Chavarria" />
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
};
