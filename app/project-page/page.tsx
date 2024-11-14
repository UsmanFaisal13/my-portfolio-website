import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div className='flex py-20 h-screen flex-col items-center gap-4'>
            <h1 className='text-6xl font-Darker_Grotesque mb-8'>Projects</h1>
            <div className='flex flex-row gap-4 justify-center flex-wrap w-full pb-8'>
                <ProjectCard projectName="Figma design to Next JS"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Figma design to Next JS Website"
                    projectLink="https://figma-to-nextjs-six.vercel.app/" languages={["Typescript", "Tailwind"]} />
                <ProjectCard projectName="Woocommerce Stores"
                    projectDescription="This is a demo Wordpress project I made for learning purpose."
                    projectLink="https://upmerchant.infinityfreeapp.com/?i=1" languages={["Wordpress", "HTML"]} />
                <ProjectCard projectName="Todo App"
                    projectDescription="This is an awesome personal project description"
                    projectLink="https://react-todo-list-flame-ten.vercel.app/" languages={["React", "CSS"]} />
                <ProjectCard projectName="My Portfolio Website"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://usman-faisal.vercel.app/" languages={["Nextjs", "Tailwind"]} />

            </div>
            <Footer />


        </div>
    )
}

export default page