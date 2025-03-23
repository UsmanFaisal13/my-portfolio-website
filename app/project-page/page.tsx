import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

const page = () => {
    return (
        <>
        <div className='flex space-y-20 h-screen flex-col items-center gap-4'>
            <h1 className='text-6xl font-Darker_Grotesque mt-16'>Projects</h1>
            <div className='flex flex-row gap-4 justify-center flex-wrap w-full pb-8'>
                <ProjectCard projectName="STEM News BLOG Website"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://stem-news-five.vercel.app/" languages={["Nextjs", "Tailwind", "Typescript", "Sanity"]} />
                <ProjectCard projectName="Furniture Store"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://furniture-store-topaz.vercel.app/" languages={["Nextjs", "Tailwind", "Typescript", "Sanity"]} />

                <ProjectCard projectName="Figma design to Next JS"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Figma design to Next JS Website"
                    projectLink="https://figma-to-nextjs-six.vercel.app/" languages={["Typescript", "Tailwind", "HTML", "React", "NextJS"]} />
                <ProjectCard projectName="Todo List App"
                    projectDescription="This is an awesome personal project description"
                    projectLink="https://todo-list-two-swart.vercel.app/" languages={["HTML", "CSS", "Typescript", "React"]} />

                <ProjectCard projectName="Web Development Agency Landing Page"
                    projectDescription="This is an awesome personal project description"
                    projectLink="https://web-development-agency-demo.netlify.app/" languages={["HTML", "Tailwind", "Javascript"]} />

          
                <ProjectCard projectName="My Portfolio Website"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://usman-faisal.vercel.app/" languages={["HTML", "Tailwind", "Typescript", "NextJS"]} />

            </div>
                 
        <Footer />
      
       


        </div>
        
  
        </>
    )
}

export default page