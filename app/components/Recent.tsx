import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

function Recent() {
    return (
        <div className='flex py-20 h-screen flex-col gap-4'>
            <div className='flex justify-between'>

                <h1 className='text-2xl px-32'>Recent Projects</h1>
                <Link href={'/project-page'} className='text-2xl px-32'>View all</Link>
            </div>
            <div className='flex flex-row gap-4 justify-center flex-wrap w-full'>
                <ProjectCard projectName="Figma design to Next JS Website"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Figma design to Next JS Website"
                    projectLink="https://figma-to-nextjs-six.vercel.app/" languages={["Nextjs", "TypeScript", "Tailwind"]} />
                <ProjectCard projectName="Country List"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Dynamic routing feature in next JS design to Next JS Website"
                    projectLink="https://country-list-three.vercel.app/" languages={["Nextjs", "TypeScript"]} />
                <ProjectCard projectName="Todo App"
                    projectDescription="This is an awesome personal project description"
                    projectLink="https://react-todo-list-flame-ten.vercel.app/" languages={["CSS", "Javascript"]} />
                <ProjectCard projectName="My Portfolio Website"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://usman-faisal.vercel.app/" languages={["Nextjs", "TypeScript", "Tailwind"]} />
            </div>

        </div>
    )
}

export default Recent