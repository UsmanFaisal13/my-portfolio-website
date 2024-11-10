import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div className='flex py-20 h-screen flex-col items-center gap-4'>
            <h1 className='text-6xl font-Darker_Grotesque mb-8'>Projects</h1>
            <div className='flex flex-row gap-4 justify-center flex-wrap w-full'>

                <ProjectCard projectName="My Cool Project"
                    projectDescription="This is an awesome project description"
                    projectLink="https://github.com/yourproject" languages={["Nextjs", "TypeScript"]} />
                <ProjectCard projectName="My Cool Project"
                    projectDescription="This is an awesome project description"
                    projectLink="https://github.com/yourproject" languages={["Nextjs", "TypeScript"]} />
                <ProjectCard projectName="My Cool Project"
                    projectDescription="This is an awesome project description"
                    projectLink="https://github.com/yourproject" languages={["Nextjs", "TypeScript"]} />
                <ProjectCard projectName="My Cool Project"
                    projectDescription="This is an awesome project description"
                    projectLink="https://github.com/yourproject" languages={["Nextjs", "TypeScript"]} />



            </div>
            <Footer />


        </div>
    )
}

export default page