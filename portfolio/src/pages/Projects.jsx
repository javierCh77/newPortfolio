import React from "react";
import { Link } from 'react-router-dom'
import Card from '../components/Card'


const Projects = () => {
  return (
  
    <div className="bg-slate-900 text-white mt-8 p-8 rounded  w-full ">
      <div className="flex gap-5   justify-between  w-5.5/6 ">
        <h1 className="text-3xl">Projects</h1>
       
      </div>
      <div className="gap-1 flex flex-wrap container justify-between">
        <div className=" w-full md:w-3/12">
          <Card
            date="Jan 23, 2024"
            name="Gift Experts App "
            text="Find your favorite gift now"
            color="text-sky-300"
            framwork=" React"
            articule=""
            demo="https://gif-expert-javier-chavarria.netlify.app/"
          />
        </div>
        <div className=" w-full md:w-3/12">
          <Card
            date="Sep 25, 2023"
            name="App Weather React"
            text="Time finder by zone"
            color="text-sky-300"
            framwork=" React"
            articule=""
            demo="https://app-weather-jch.netlify.app/"
          />
        </div>
        <div className=" w-full md:w-3/12">
          <Card
            date="Dec 7, 2023"
            name="Booking App"
            text="Booking management system  with alerts"
            color="text-green-300"
            framwork=" Python"
            articule=""
            demo=""
          />
        </div>
        <div className=" w-full md:w-3/12">
          <Card
            date="Sep 12, 2022"
            name="Fair Prices App"
            text="Control prices of products"
            color="text-red-300"
            framwork=" Angular"
            articule=""
            demo="https://app-price-jch.netlify.app/"
          />
        </div>
        <div className=" w-full md:w-3/12">
          <Card
            date="Nov 22, 2023"
            name="Movie search engine"
            text="All the latest movies"
            color="text-sky-300"
            framwork=" React"
            articule=""
            demo="https://movie-app-jch.netlify.app/"
          />
        </div>
        <div className=" w-full md:w-3/12">
          <Card
           date="Feb, 2024"
           name="SPA Dr.Galichini"
           text="Aesthetic Medicine"
           color="text-sky-300"
           framwork=" React"
           articule=""
           demo=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
