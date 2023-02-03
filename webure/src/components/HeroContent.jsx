import React from 'react'
import verify from '../images/verify.png'
import vedio_circle from "../images/video-circle.png"
import lineBelowText from "../images/lineBelowText.png"
import "./style.css"

const HeroContent = () => {
  return (
    <div className='scroll-smooth'>
        <div className='flex items-center gap-2.5'>
            <img src={verify} alt='verify'/>
            <p className='text-[#F17216] font-Ubuntu text-sm font-normal leading-[18px] slidin_text_animation'>Best Business Platform - World Record 2021</p>
        </div>
        <div className='mt-[10px] slidin_text_animation-1'>
            <p className='text-[#282C4B] font-Ubuntu text-[56px] font-normal leading-[70px] font-[700] '>Reach Your Business</p>
            <p className='text-[#282C4B] font-Ubuntu text-[56px] font-normal leading-[70px] font-[700] '>Goals in Record Time</p>
            <div className='relative top-[-70px] left-[300px]'>
                <img src={lineBelowText} alt='line'/>
            </div>
        </div>
        <div className='w-[561px] h-[108px] mt-[15px] slidin_text_animation-2'>
            <p className='text-[#747582] font-Ubuntu text-sm font-normal text-[18px] leading-[32px]'>
                Support small business and join the nationwide movement to encourage commercial support for the millions of minority owned businesses helping world economy.
            </p>
        </div>
        <div className='flex items-center gap-[30px] mt-[50px]'>
            <div className='bg-gradient-to-r from-[#FF698D] to-[#FB3F6C] w-[210px] rounded-[192px] shadow-[0px_30px_50px_rgba(168,22,75,0.15)]'>
                <p className='text-[#ffffff] font-Ubuntu text-sm font-normal text-[18px] font-[700] leading-[21px] tracking-[0.02em] py-[23px] px-[53px]'>Get Started</p>
            </div>
            <div className='flex gap-[10px]'>
                <img src={vedio_circle} alt='vedio circle' className='w-[24px] h-[24px]'/>
                <p className='text-[#282C4B] font-Ubuntu text-[18px] font-normal leading-[21px] font-[500] '>Book a 30 Min Quick Meeting </p>
            </div>
        </div>

    </div>
  )
}

export default HeroContent