import React from 'react'
import dynamic from "next/dynamic";
import ProjectGrid from './ui/ProjectGrid';


const RecentProjects = () => {
  return (
    <div className='md:py-12 py-5 sectionGradient4 mt-5' id='projects'>
        <h4 className='heading text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight sectionHeader'>
            My Projects
        </h4>
        <h4 className='text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300'>Some recent projects with blend of various technologies</h4>
        <ProjectGrid />
    </div>
  )
}

export default dynamic (() => Promise.resolve(RecentProjects), {ssr: false})
