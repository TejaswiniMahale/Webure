import React, { useEffect } from 'react'
import img from '../images/whatWeDo.png'
import s1 from "../images/s1.png"
import s2 from "../images/s2.png"
import s3 from "../images/s3.png"
import s4 from "../images/s4.png"
import s5 from "../images/s5.png"
import s6 from "../images/s6.png"
import s7 from "../images/s7.png"
import s8 from "../images/s8.png"

import f1 from "../images/f1.png"
import f2 from "../images/f2.png"
import f3 from "../images/f3.png"
import f4 from "../images/f4.png"
import f5 from "../images/f5.png"

import "./style.css"
import gsap from 'gsap'

const ServicePage = () => {


  
  return (
    <div className='mb-[50px]'>
        <div className='flex items-center justify-center'>
            <img src={img} alt=''/>
            <p className='text-Poppins text-[70px] ml-[-80px] leading-[105px] font-[600]'>What We Do</p>
        </div>
        <div className='flex px-[70px] items-center mt-[30px]'>
            <p className='text-Poppins text-[36px] leading-[54px] font-[600] mr-[36px]'>Our Services</p>
            <p className='text-Poppins text-[23px] leading-[34px] text-[#A9A9A9] font-[400]'>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature</p>
        </div>
        <div className='flex flex-wrap px-[130px] gap-y-[70px] justify-between mt-[60px] servicePage_flex-1 scroll_animation'>
            <div className='w-[240px] px-[20px] h-[270px] bg-[#3F0598]  text-center rounded-[8.43641px] shadow-[0px_0px_18px_rgba(0,0,0,0.12)] border-[#000000] flex flex-col items-center'>
                <img src={s1} alt='s1' className='mt-[31px]'/>
                <p className='text-Poppins text-[26px] leading-[39px] font-[600] text-[#ffffff] pt-[36px]'>Design</p>
            </div>
            <div className='w-[240px] px-[20px] h-[270px] text-center rounded-[8.43641px] shadow-[0px_0px_18px_rgba(0,0,0,0.12)] border-[#000000] flex flex-col items-center'>
                <img src={s2} alt='s2' className='mt-[31px]'/>
                <p className='text-Poppins text-[26px] leading-[39px] font-[600] text-[#040404] pt-[36px]'>Front End Development</p>
            </div>
            <div className='w-[240px] px-[20px] h-[270px] text-center rounded-[8.43641px] shadow-[0px_0px_18px_rgba(0,0,0,0.12)] border-[#000000] flex flex-col items-center'>
                <img src={s3} alt='s3' className='mt-[31px]'/>
                <p className='text-Poppins text-[26px] leading-[39px] font-[600] text-[#040404] pt-[36px]'>Back End Development</p>
            </div>
            <div className='w-[240px] px-[20px] h-[270px] text-center rounded-[8.43641px] shadow-[0px_0px_18px_rgba(0,0,0,0.12)] border-[#000000] flex flex-col items-center'>
                <img src={s4} alt='s4' className='mt-[31px]'/>
                <p className='text-Poppins text-[26px] leading-[39px] font-[600] text-[#040404] pt-[36px]'>Application Development</p>
            </div>
            <div className='w-[240px] px-[40px] h-[270px] text-center rounded-[8.43641px] shadow-[0px_0px_18px_rgba(0,0,0,0.12)] border-[#000000] flex flex-col items-center'>
                <img src={s5} alt='s5' className='mt-[31px]'/>
                <p className='text-Poppins text-[26px] leading-[39px] font-[600] text-[#040404] pt-[36px]'> Cloud Services</p>
            </div>
            <div className='w-[240px] px-[20px] h-[270px] text-center rounded-[8.43641px] shadow-[0px_0px_18px_rgba(0,0,0,0.12)] border-[#000000] flex flex-col items-center'>
                <img src={s6} alt='s6' className='mt-[31px]'/>
                <p className='text-Poppins text-[26px] leading-[39px] font-[600] text-[#040404] pt-[36px]'>Analytics</p>
            </div>
            <div className='w-[240px] px-[20px] h-[270px] text-center rounded-[8.43641px] shadow-[0px_0px_18px_rgba(0,0,0,0.12)] border-[#000000] flex flex-col items-center'>
                <img src={s7} alt='s7' className='mt-[31px]'/>
                <p className='text-Poppins text-[26px] leading-[39px] font-[600] text-[#040404] pt-[36px]'>Q-A And Testing</p>
            </div>
            <div className='w-[240px] px-[20px] h-[270px] text-center rounded-[8.43641px] shadow-[0px_0px_18px_rgba(0,0,0,0.12)] border-[#000000] flex flex-col items-center'>
                <img src={s8} alt='s8' className='mt-[31px]'/>
                <p className='text-Poppins text-[26px] leading-[39px] font-[600] text-[#040404] pt-[36px]'>Back Office Support</p>
            </div>
        </div>
        <div className='flex flex-wrap px-[135px] mt-[30px] justify-between servicePage_flex-2'>
            <div className='w-[370px] h-[280px] py-[16px] px-[17px]'>
                <img src={f1} alt='f1'/>
                <p className='text-[#282C4B] font-Ubuntu text-[20px] font-[500] text-center pt-[5px] font-normal leading-[25px] '>Cosmetic Forcest Marketing</p>
            </div>
            <div className='w-[370px] h-[280px] py-[16px] px-[17px]'>
                <img src={f2} alt='f2'/>
                <p className='text-[#282C4B] font-Ubuntu text-[20px] font-[500] text-center pt-[5px] font-normal leading-[25px] '>Sales Analytic</p>
            </div>
            <div className='w-[370px] h-[280px] py-[16px] px-[17px]'>
                <img src={f3} alt='f3'/>
                <p className='text-[#282C4B] font-Ubuntu text-[20px] font-[500] text-center pt-[5px] font-normal leading-[25px] '>Fashion Store Mobile Apps</p>
            </div>
            <div className='w-[370px] h-[280px] py-[16px] px-[17px]'>
                <img src={f4} alt='f4'/>
                <p className='text-[#282C4B] font-Ubuntu text-[20px] font-[500] text-center pt-[5px] font-normal leading-[25px] '>Laura’s Clore Branding Identity</p>
            </div>
            <div className='w-[370px] h-[280px] py-[16px] px-[17px]'>
                <img src={f5} alt='f5'/>
                <p className='text-[#282C4B] font-Ubuntu text-[20px] font-[500] text-center pt-[5px] font-normal leading-[25px] '>SEO Marketing 4.0</p>
            </div>
            <div className='w-[370px] h-[280px] py-[25px] px-[17px]'>
                <p className='text-[#F17216] font-Ubuntu text-sm font-normal leading-[18px] '>PROJECTS</p>
                <p className='text-[#282C4B] font-Ubuntu text-[36px] font-[700] font-normal leading-[53px] '>Selected Works from Us</p>
                <div className='border-[1px] rounded-[80px] border-purple w-[30%] text-center mt-[25px]'>
                  <p className='text-base font-bold leading-2 font-Ubuntu py-[10px] px-[10px] '>See More</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicePage