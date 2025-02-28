"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { FaFeatherAlt } from 'react-icons/fa'
import { FaWandMagicSparkles } from 'react-icons/fa6'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-10 w-full z-[20] max-[700px]:mt-5 max-[700px]:pb-10'
    >
        <div className='h-full w-full flex flex-row gap-5 justify-center m-auto text-start max-[700px]:flex-col max-[700px]:items-center'>
            <motion.div
            variants={slideInFromLeft(2.27)}
           className='Welcome-box py-[5px] px-[9px] border border-[#662d91] opacity-[0.9]'
            >
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#D8BFD8] to-transparent h-[2px]" />
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                <h1 className='Welcome-text text-[13px]'>The Spellcaster</h1>
            </motion.div>

            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[5px] px-[9px] border border-[#662d91] opacity-[0.9]'
            >
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#D8BFD8] to-transparent h-[2px]" />
                <FaFeatherAlt className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                <h1 className='Welcome-text text-[13px]'>The Wordsmith</h1>
            </motion.div>

            <motion.div
            variants={slideInFromRight(2.75)}
            className='Welcome-box py-[5px] px-[9px] border border-[#662d91] opacity-[0.9]'
            >
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#D8BFD8] to-transparent h-[2px]" />
                <FaWandMagicSparkles className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                <h1 className='Welcome-text text-[13px]'>The Alchemist</h1>
            </motion.div>

        </div>
        
    </motion.div>
  )
}

export default HeroContent