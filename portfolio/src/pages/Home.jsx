import React from 'react'
import { Link } from 'react-router-dom'
import '../components/components.css'

import Card from '../components/Card'
// logos
import netlify from '../assets/logos/netlify.png'
import linkedin from '../assets/logos/linkedin.png'
import github from '../assets/logos/github.png'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='min-h-screen'>
    <div className='bg-slate-900 text-white w-full p-10 rounded flex flex-wrap container justify-between  '> 
      <div className=' w-full md:w-9/12 text-left '>
          <h1 className=' text-3xl md:text-5xl  '>Hey, I'm Javier! </h1>
          <p className='mt-10 text-lg md:text-xl  '>Welcome to my digital space. 🚀</p>
          <p className='mt-5 text-l md:text-xl '>I'm a software developer in Ushuaia ARG. I make<Link to='/projects' className='text-sky-300'> open-source</Link></p>
          <p className=' text-l md:text-xl '><Link to='/projects' className='text-sky-300'> projects</Link> and write about code, design, and life. I like </p>
          <p className=' text-l md:text-xl '>technology, drawing, sci-fi, reading, and gaming.</p>
      </div>
      
      
      <div className='w-3/12 p-8 ml-12 md:ml-0 '>
          <span className="loader "></span>
      </div>   
    </div>
    
    
    <div className='bg-slate-900 text-white mt-8 p-8 rounded  w-full '> 
        <div className='flex gap-5   justify-between  w-5.5/6 '>
           <h1 className='text-3xl'>Projects</h1>
           <Link to="/projects" className="  bg-transparent leading-6 hover:bg-sky-500 text-white font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded">
              View all
            </Link>
        </div>
        
        
        <div className='gap-1 flex flex-wrap container justify-between '>
        
        
           <div className=' w-full md:w-3/12  '>
           <Card
            date="Feb 1, 2024"
            name="App MCI "
            text="Spa & Church Management App"
            color="text-sky-300"
            framwork=" React"
            articule=""
            demo="https://app-mci.netlify.app/"
          /></div> 
          
           <div className=' w-full md:w-3/12  '> 
              <Card  
              date='Jan 23, 2024'
              name='Gift Experts App '
              text='Find your favorite gift now'
              color='text-sky-300'
              framwork=' React'
              articule=''
              demo='https://gif-expert-javier-chavarria.netlify.app/'
              />
           </div> 
           <div className=' w-full md:w-3/12'>
              <Card
              date='Sep 25, 2023'
              name='App Weather React'
              text='Time finder by zone'
              color='text-sky-300'
              framwork=' React'
              articule=''
              demo='https://app-weather-jch.netlify.app/'
              />
           </div>
           
           <div className=' w-full md:w-3/12'>
              <Card
                date='Sep 12, 2022'
                name='Fair Prices App'
                text='Control prices of products'
                color='text-red-300'
                framwork=' Angular'
                articule=''
                demo='https://app-price-jch.netlify.app/'
              />
           </div>
           <div className=' w-full md:w-3/12'>
              <Card
               date='Nov 22, 2023'
               name='Movie search engine'
               text='All the latest movies'
               color='text-sky-300'
               framwork=' React'
               articule=''
               demo='https://movie-app-jch.netlify.app/'
              />
           </div>
           <div className=' w-full md:w-3/12'>
              <Card
              date="Feb, 2024"
              name="SPA Medical Ruth Galichini"
              text="Aesthetic Medicine"
              color="text-sky-300"
              framwork=" React"
              articule=""
              demo=""
              />
           </div>
        </div>
      </div>
    
    <div className='bg-slate-900 text-white mt-5 p-8 rounded'> 
        <div className='flex  justify-between  w-5.5/6  '>
           <h1 className='text-3xl'>Certifications</h1>
        </div>
    </div>
    
    
    <div className='mt-4 text-white flex flex-wrap container justify-between  flex-grow '>
        <div className=' p-4  outline outline-offset-2 outline-1 mt-8 w-full md:w-5/12'>
          <p>December 2022</p>
          <Link className='text-lg font-semibold text-sky-300 hover:text-violet-300' to='https://www.linkedin.com/in/javier-chavarria-78a538205/details/certifications/1635549063349/single-media-viewer?type=DOCUMENT&profileId=ACoAADQ5-VoBwM51iq0puOSWVc9KIUK_doTYgJ4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BUmWAeGKPQdmOa4oeqGfCHA%3D%3D' target='_blank'>Diploma Front-End</Link>
        </div>
        <div className=' p-4 outline outline-offset-2 outline-1 mt-8 w-full md:w-5/12'>
          <p>March 2023</p>
          <Link className='text-lg font-semibold text-sky-300 hover:text-violet-300' to='https://www.linkedin.com/in/javier-chavarria-78a538205/details/certifications/1635549065209/single-media-viewer?type=DOCUMENT&profileId=ACoAADQ5-VoBwM51iq0puOSWVc9KIUK_doTYgJ4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgiLVSBsFQYeJVR1XGmVS7g%3D%3D' target='_blank'>Scrum funtamentals certified</Link>
        </div>
        <div className=' p-4  outline outline-offset-2 outline-1 mt-8 w-full  md:w-5/12'>
          <p>June 2023</p>
          <Link className='text-lg font-semibold text-sky-300 hover:text-violet-300' to='https://drive.google.com/file/d/1_Ji_FyxODaF5efvRbH9B6WW3cUZxi5sE/view' target='_blank'>Web Development, JavaScript & React</Link>
        </div>
        <div className=' p-4 outline outline-offset-2 outline-1 mt-8 w-full md:w-5/12'>
        <p>March 2023</p>
          <Link className='text-lg font-semibold text-sky-300 hover:text-violet-300' to='https://www.linkedin.com/in/javier-chavarria-78a538205/details/certifications/1635549057921/single-media-viewer?type=DOCUMENT&profileId=ACoAADQ5-VoBwM51iq0puOSWVc9KIUK_doTYgJ4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0zgnBNjmTPS1DDZtM49mRA%3D%3D' target='_blank'>Web Developer </Link>
        </div>
        <div className=' p-4  outline outline-offset-2 outline-1 mt-8 w-full  md:w-5/12'>
        <p>November 2023</p>
          <Link className='text-lg font-semibold text-sky-300 hover:text-violet-300' to='https://www.linkedin.com/in/javier-chavarria-78a538205/details/certifications/1635548576162/single-media-viewer?type=DOCUMENT&profileId=ACoAADQ5-VoBwM51iq0puOSWVc9KIUK_doTYgJ4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0zgnBNjmTPS1DDZtM49mRA%3D%3D' target='_blank'>NestJS: Scalable Backend Development with Node</Link>
        </div>
        <div className=' p-4 outline outline-offset-2 outline-1 mt-8 w-full md:w-5/12'>
        <p>December 2023</p>
         <Link className='text-lg font-semibold text-sky-300 hover:text-violet-300' to='https://www.linkedin.com/in/javier-chavarria-78a538205/details/certifications/1703022453041/single-media-viewer?type=IMAGE&profileId=ACoAADQ5-VoBwM51iq0puOSWVc9KIUK_doTYgJ4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2FeR%2FRPIARbC0COJs3auDsw%3D%3D' target='_blank'>Skill up python & Django</Link>
        </div>
        <div className=' p-4  outline outline-offset-2 outline-1 mt-8 w-full  md:w-5/12'>
            <p>December 2023</p>
            <Link className='text-lg font-semibold text-sky-300 hover:text-violet-300' to='https://www.linkedin.com/in/javier-chavarria-78a538205/details/certifications/1635554187099/single-media-viewer?type=IMAGE&profileId=ACoAADQ5-VoBwM51iq0puOSWVc9KIUK_doTYgJ4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPdlrItvtQBG4SyPuRSU6cQ%3D%3D' target='_blank'>Developer Web Full Stack</Link>
        </div>
        <div className=' p-4 outline outline-offset-2 outline-1 mt-8 w-full md:w-5/12'>
            <p>August 2024</p>
            <Link className='text-lg font-semibold text-sky-300 hover:text-violet-300' to='' target='_blank'>UX/UI Designer</Link>
        </div> 
    </div>
    <Footer/>
  </div>
  )
}

export default Home
