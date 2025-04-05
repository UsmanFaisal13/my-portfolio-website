import react from 'react'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

const page = () => {
    return (
        <>
        <div className='flex space-y-20 h-screen flex-col items-center gap-4'>
            <h1 className='text-6xl font-Darker_Grotesque mt-16'>Projects</h1>
            <div className='flex flex-row gap-4 justify-center flex-wrap w-full pb-8'>
            <ProjectCard projectName="Unit converter"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Python"
                    projectLink="https://usmanfaisal13-unit-converter-main-ageiya.streamlit.app/" languages={['Python','streamlit']} />
                <ProjectCard projectName="Password Strength Meter"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Python"
                    projectLink="https://usmanfaisal13-password-strength-meter-main-itc6n6.streamlit.app/" languages={['Python','streamlit']} />

                <ProjectCard projectName="STEM News BLOG Website"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://stem-news-five.vercel.app/" languages={["nextjs", "tailwind", "typescript", "Sanity"]} />
                <ProjectCard projectName="Furniture Store"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://furniture-store-topaz.vercel.app/" languages={["nextjs", "tailwind", "typescript", "Sanity"]} />

                <ProjectCard projectName="Figma design to Next JS"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Figma design to Next JS Website"
                    projectLink="https://figma-to-nextjs-sixtvercel.app/" languages={["typescript", "tailwind", "html", "react", "nextjs"]} />
                <ProjectCard projectName="Todo List App"
                    projectDescription="This is an awesome personal project description"
                    projectLink="https://todo-list-two-swart.vercel.app/" languages={["html", "CSS", "typescript", "react"]} />

                <ProjectCard projectName="Web Development Agency Landing Page"
                    projectDescription="This is an awesome personal project description"
                    projectLink="https://web-development-agency-demo.netlify.app/" languages={["html", "tailwind", "javascript"]} />

          
                <ProjectCard projectName="My Portfolio Website"
                    projectDescription="This project was given by my teachers in GIAIC
                    to test our skills in Next js and design"
                    projectLink="https://usman-faisal.vercel.app/" languages={["html", "tailwind", "typescript", "nextjs"]} />
                             

            </div>
                 
        <Footer />
      
       


        </div>
        
  
        </>
    )
}

export default page