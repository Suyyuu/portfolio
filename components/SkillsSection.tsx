import React from 'react'
import HexagonalGrid from './ui/HexagonalGrid'

const SkillsSection = () => {
  return (
    <div className='flex flex-col items-center sectionGradient' id='skills'>
        <h1 className='absolute pt-16 sectionHeader md:text-5xl text-4xl z-50'>Hex-pertise</h1>
        <h1 className='absolute md:pt-32 pt-28 sectionHeader text-xl z-50'>Precision. Hexed.</h1>
        <img className='opacity-25' src="/Heda2.png" alt="" />
        
        <HexagonalGrid />
    </div>
  )
}

export default SkillsSection