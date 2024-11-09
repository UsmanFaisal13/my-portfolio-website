import React from 'react'
import ProjectCard from './ProjectCard'

function Recent() {
    return (
        <div className='flex py-20 h-screen flex-col gap-4'>
            <div className='flex justify-between'>

                <h1 className='text-2xl px-32'>Recent Projects</h1>
                <h1 className='text-2xl px-32'>View all</h1>
            </div>
            <div className='flex flex-row gap-4 justify-center flex-wrap w-full'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>

        </div>
    )
}

export default Recent