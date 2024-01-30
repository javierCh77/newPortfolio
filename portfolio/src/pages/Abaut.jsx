import React from "react";
import yo from "../assets/picture/yo.jpeg";
import Footer from "../components/Footer";

export const Abaut = () => {
  return (
    <>
      <div className="flex flex-wrap container w-full text-justify">
        <div className="bg-slate-900 text-white w-full md:w-4/6  p-8 md:rounded-l-lg ">
          <h1 className=" text-5xl">About me</h1>
          <p className="mt-10 text-xl">
            Hey, I'm Javier! I'm a software developer Full-Stack working in Ushuaia Argentina.
            Welcome to my spot on the web for my projects, tutorials,            and anything else I want to show the world. Check out the projects
            page to see a highlight of my open-source work, and the blog for my
            tutorials and more.
          </p>
          <p className="mt-6 text-xl">
            My site has no ads, no affiliate links, no tracking or analytics, no
            sponsored posts, and no paywall. My only motivation for this site is
            to share what I've learned with the world. I hope I will inspire others to make their own
            creative corner on the web as well.
          </p>
          <p className="mt-6 text-xl">
            You can contact me by email at hello at javierchavarria.com to say
            hi! I always appreciate meeting new people.
          </p>
        </div>

        <div className="bg-slate-900 text-white w-full md:w-2/6 p-8 md:rounded-r-lg flex flex-col justify-center   ">
          <div className="">
            <img className="rounded" src={yo} alt="Javier Chavarria" />
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
};
