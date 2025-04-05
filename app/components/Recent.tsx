import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

function Recent() {
    return (
        <div className='flex lg:py-20 flex-col gap-4'>
            <div className='flex justify-between'>

                <h1 className='text-xl lg:px-32 px-10 m-0'>Recent Projects</h1>
                <Link href={'/project-page'} className='lg:text-2xl text-xl lg:px-32 px-4 hover:text-gray-400 transition-all'>View all</Link>
            </div>
            <div className='flex flex-row gap-4 justify-center flex-wrap w-full'>
                <ProjectCard projectName="STEM News BLOG Website"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://stem-news-five.vercel.app/" languages={["nextjs", "tailwind", "typescript", "Sanity"]} />
                <ProjectCard projectName="Furniture Store"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://furniture-store-topaz.vercel.app/" languages={["nextjs", "tailwind", "typescript", "Sanity"]} />

               <ProjectCard projectName="Web Development Agency Landing Page"
                    projectDescription="This is an awesome personal project description"
                    projectLink="https://web-development-agency-demo.netlify.app/" languages={["html", "tailwind", "javascript"]} />
             <ProjectCard projectName="Unit converter"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Python"
                    projectLink="https://usmanfaisal13-unit-converter-main-ageiya.streamlit.app/" languages={['Python','streamlit']} />
         
            </div>

        </div>
    )
}

export default Recent