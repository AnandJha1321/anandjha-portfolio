import React from 'react'
import { ProjectsDetails } from '../custom/projectData'

const Projects = () => {
  return (
    <div className='h-full p-4  bg-black font-poppins'>
        <div className='text-white mt-12 flex flex-col items-center'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-700 
         inline text-4xl md:text-6xl'>Projects</h2>
            <p className='text-center mt-10 font-extralight px-2 mb-18 text-[18px]'> These are some of the projects I’ve been working on in the last few years</p>
        </div>

        <div className="bg-black text-white px-8">
            {ProjectsDetails.map((project, index) => (
            <div key={index} className="mb-10 md:mb-32 md:px-20 ">
                <a href={project.link}  target='_blank' rel="noopener noreferrer">
                <img 
                src={project.image} 
                alt={`Project ${index + 1}`} 
                className="w-full h-auto mb-2 md:h-full md:w-full cursor-pointer" />
                </a>
                <div className='md:flex  md:justify-between'>
                <h2 className="text-2xl font-extralight  my-2">{project.name}</h2>
                <p className=' text-white w-1/2 hidden lg:block text-base font-light '>{project.description}</p>
                </div>
            <div className="flex space-x-4 justify-between">
                <div className='space-x-4 mt-2'>
                <a href={project.original} className={`p-1 px-2 text-sm  rounded ${project.button1.color}`} target='_blank' rel="noopener noreferrer">
                    {project.button1.text}
                </a>
                <a href={project.link} className={`p-1 px-2 text-sm rounded ${project.button2.color}`} rel="noopener noreferrer">
                    {project.button2.text}
                </a>
                </div>
            </div>
            <p className='lg:hidden mt-3 lg:mt-0 text-left  text-base font-extralight'>{project.description}</p>

        </div>
      ))}
    </div>

    </div>
  )
}

export default Projects