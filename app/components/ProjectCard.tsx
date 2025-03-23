"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectLink: string;
    languages: string[];
    githubLink?: string;
    imageSrc?: string;
    featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    projectName,
    projectDescription,
    projectLink,
    languages,
    githubLink,
    imageSrc,
    featured = false
}) => {
    return (
        <div className={`
            lg:w-[530px] h-auto lg:h-[250px] lg:min-w-[530px] max-w-96 min-w-auto 
            bg-zinc-900 rounded-md shadow-lg hover:shadow-xl 
            justify-between flex flex-row
            transition-all duration-300 hover:translate-y-[-4px]
            border border-zinc-800 hover:border-zinc-700
            ${featured ? 'ring-2 ring-blue-500/50' : ''}
        `}>
            <div className='flex flex-col lg:p-8 p-5 gap-3 flex-grow'>
                <div className="flex items-center gap-2">
                    {featured && (
                        <span className="bg-blue-900/40 text-blue-300 text-xs px-2 py-1 rounded-full">Featured</span>
                    )}
                    <h1 className='lg:text-2xl text-lg font-semibold text-white'>{projectName}</h1>
                </div>

                <p className='text-gray-400 lg:w-[280px] w-[200px] line-clamp-4 lg:line-clamp-none'>{projectDescription}</p>

                <div className="mt-auto pt-2">
                    <div className='flex flex-wrap gap-2 items-center'>
                        {languages.map((lang, index) => (
                            <div key={index} className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded text-xs text-gray-300">
                                <Image
                                    src={`/languages/${lang.toLowerCase()}.png`}
                                    alt={lang}
                                    width={20}
                                    height={20}
                                    className='w-4 h-4'
                                />
                                <span>{lang}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-between lg:p-8 p-4 bg-zinc-800/30'>
                {imageSrc && (
                    <div className="rounded overflow-hidden mb-3 hidden lg:block">
                        <Image
                            src={imageSrc}
                            alt={projectName}
                            width={120}
                            height={80}
                            className="object-cover w-[120px] h-[80px]"
                        />
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <Link
                        href={projectLink}
                        className='flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full transition-colors'
                        aria-label="View project"
                    >
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                    </Link>

                    {githubLink && (
                        <Link
                            href={githubLink}
                            className='flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full transition-colors'
                            aria-label="View source code"
                        >
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard