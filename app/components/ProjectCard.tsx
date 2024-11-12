"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectLink: string;
    languages: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, projectDescription, projectLink, languages }) => {
    return (
        <div className=' lg:w-[530px] h-[200px] lg:h-[250px] lg:min-w-[530px] max-w-96 min-w-fit bg-zinc-900 rounded-sm justify-between flex flex-row'>
            <div className='flex flex-col lg:p-8 p-5 gap-2'>
                <h1 className='lg:text-2xl text-lg font-medium'>{projectName}</h1>
                <p className='text-gray-400  lg:w-[280px] w-[200px]'>{projectDescription}</p>
            </div>
            <div className='grid grid-rows-2 gap-16 lg:p-8 p-4'>
                <Link href={projectLink} className='flex justify-end'>
                    <Image src={'/material-symbols-light--link.png'} alt='link' width={40} height={40} className='text-white lg:w-10 lg:h-10 w-6 h-6' />
                </Link>
                <div className='flex gap-2 justify-end lg:ml-4'>
                    {languages.map((lang, index) => (
                        <Image
                            key={index}
                            src={`/languages/${lang.toLowerCase()}.png`}
                            alt={lang}
                            width={40}
                            height={40}
                            className='lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard