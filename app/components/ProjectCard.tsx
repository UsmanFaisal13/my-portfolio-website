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
        <div className='w-[530px] h-[200px] bg-zinc-900 rounded-sm justify-between flex flex-row'>
            <div className='flex flex-col p-8 gap-2'>
                <h1 className='text-2xl font-medium'>{projectName}</h1>
                <p className='font-sm text-gray-400 w-[280px]'>{projectDescription}</p>
            </div>
            <div className='grid grid-rows-2 gap-16 p-8'>
                <Link href={projectLink} className='flex justify-end'>
                    <Image src={'/material-symbols-light--link.png'} alt='link' width={40} height={40} className='text-white' />
                </Link>
                <div className='flex gap-2 justify-end'>
                    {languages.map((lang, index) => (
                        <Image
                            key={index}
                            src={`/languages/${lang.toLowerCase()}.png`}
                            alt={lang}
                            width={35}
                            height={40}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard