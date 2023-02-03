import React from 'react'
import Navbar from './Navbar'
import background_image from "../images/hero-background.png"
import HeroContent from "./HeroContent"

const HeroPage = () => {
  return (
    <div className='overflow-x-hidden h-100vh w-[100%]'>
        <div className=' absolute top-0 left-0 overflow-x-hidden'>
            <img src={background_image} alt='hero-bg' className='overflow-x-hidden w-[150%]'/>
        </div>
       <div className='absolute w-[100%] top-0 left-0 overflow-x-hidden'>
            <Navbar/>
       </div>
       <div className='absolute top-[150px] pl-[135px] w-[100%] overflow-x-hidden'>
            <HeroContent/>
       </div>
    </div>
  )
}

export default HeroPage