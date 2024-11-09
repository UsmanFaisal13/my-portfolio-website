import React from 'react'

function ProjectCard() {
    return (
        <div className='w-[540px] h-[200px] bg-zinc-900 rounded-sm justify-between flex flex-row'>
            <div className='flex flex-col p-8 gap-2'>
                <h1 className='text-2xl font-medium'>Project Name</h1>
                <p className='font-light text-gray-400'>Project Description</p>
            </div>
            <div className='grid grid-rows-2 gap-16 p-8'>
                <button>View</button>
                <button>Code</button>
            </div>
        </div>
    )
}

export default ProjectCard