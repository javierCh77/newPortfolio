import React from 'react'
import { Link } from 'react-router-dom'
import '../components/components.css'

import Card from '../components/Card'
// logos
import netlify from '../assets/logos/netlify.png'
import linkedin from '../assets/logos/linkedin.png'
import github from '../assets/logos/github.png'

const Home = () => {
  return (
    <div>
    <div className='bg-slate-900 text-white w-full p-10 rounded flex flex-wrap container justify-between  '> 
      <div className=' w-full md:w-9/12 text-left '>
          <h1 className=' text-3xl md:text-5xl'>Hey, I'm Javier! </h1>
          <p className='mt-10 text-lg md:text-xl  '>Welcome to my digital space. 🚀</p>
          <p className='mt-5 text-l md:text-xl '>I'm a software developer in Ushuaia ARG. I make<Link to='/projects' className='text-sky-300'> open-source</Link></p>
          <p className=' text-l md:text-xl '><Link to='/projects' className='text-sky-300'> projects</Link> and write about code, design, and life. I like </p>
          <p className=' text-l md:text-xl '>technology, drawing, sci-fi, reading, and gaming.</p>
      </div>
      
      
      <div className='w-3/12 p-8 ml-10 md:ml-0 '>
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
        <div className='gap-1 flex flex-wrap container justify-between'>
           <div className=' w-full md:w-3/12'>
              <Card/>
           </div> 
           <div className=' w-full md:w-3/12'>
              <Card/>
           </div>
           <div className=' w-full md:w-3/12'>
              <Card/>
           </div>
           <div className=' w-full md:w-3/12'>
              <Card/>
           </div>
           <div className=' w-full md:w-3/12'>
              <Card/>
           </div>
           <div className=' w-full md:w-3/12'>
              <Card/>
           </div>
        </div>
      </div>
    
    <div className='bg-slate-900 text-white mt-5 p-8 rounded'> 
        <div className='flex  justify-between  w-5.5/6  '>
           <h1 className='text-3xl'>Certifications</h1>
        </div>
    </div>
    
    
    <div className='mt-4 text-white flex flex-wrap container justify-between   '>
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
    
    
    <div className='container text-center mt-10 flex flex-col  '>
        <div className='text-3xl '>💾</div>
          <p className='text-white text-xl mt-2 font-semibold' >Javier Chavarria</p>
        <div className='flex justify-between md:justify-evenly  mt-2'>
          <Link to='https://www.linkedin.com/in/javier-chavarria-78a538205/' target='_blank' className='w-4/12 gap-1 justify-center md:justify-end text-white text-l hover:underline flex items-center  mt-2 '>Linkedin<img  className='w-5 md:w-5' src={linkedin} alt='icon netlify'></img></Link>
          <Link to='https://github.com/javierCh77' target='_blank' className='w-4/12 justify-center gap-1  text-white text-l hover:underline flex items-center   mt-2 '>GitHub<img className='w-5 md:w-5' src={github} alt='icon netlify'></img></Link>
          <Link to='https://www.netlify.com/' target='_blank' className='w-4/12 justify-center md:justify-start gap-1 text-white text-l hover:underline flex items-center  mt-2 '>Netlify<img className='w-5 md:w-5' src={netlify} alt='icon netlify'></img></Link>
        </div>
    </div>
    
    
  </div>
  )
}

export default Home
