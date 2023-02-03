import React from 'react'
import chooseus from "../images/Why_Choose_Us.png"
import checklist from "../images/Checklist-Circle.png"

const WhyChooseUs = () => {
  return (
    
    <div style={{backgroundImage:`url(${chooseus})`}} className='bg-cover h-[100vh] w-[100%] bg-center'>
       <div className='relative top-[100px] ml-[50%] px-[50px] w-[50%]'>
            <p className='text-[#F17216] font-Ubuntu text-[16px] font-normal leading-[18px]'>WHY CHOOSE US</p>
            <p className='text-[#FFFFFF] w-[480px] font-Ubuntu text-[36px] font-normal font-[700] tracking-[0.01em] leading-[60px] pb-[24px]'>Take on any Challenge of the Digital World</p>
            <div className='flex gap-[16px] pb-[20px]'>
                <img src={checklist} alt='icon'/>
                <p className='text-[#CED1E6] font-Ubuntu text-[20px] font-normal leading-[23px] '>Corporate Financial Advisory</p>
            </div>
            <div className='flex gap-[16px] pb-[20px]'>
                <img src={checklist} alt='icon'/>
                <p className='text-[#CED1E6] font-Ubuntu text-[20px] font-normal leading-[23px] '>Development of Financial Models</p>
            </div>
            <div className='flex gap-[16px]'>
                <img src={checklist} alt='icon'/>
                <p className='text-[#CED1E6] font-Ubuntu text-[20px] font-normal leading-[23px] '>Deal Structuring</p>
            </div>
            <div className='flex mt-[60px] w-[100%] gap-[20px]'>
                <input className='border-b-[1px] border-[#ffffff] w-[50%] bg-[#2C304F] pl-[10px] text-[#ffffff] font-[700]' placeholder='Enter your eamil ID'/>
                <div className='border-white border-[2px] items-center rounded-[192px] bg-gradient-to-r from-[#FF698D] to-[#FB3F6C]'>
                    <p className='text-[#FFFFFF] py-[20px] px-[44px] font-Ubuntu font-[700] text-[18px] font-normal leading-[21px] '>Get Started</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default WhyChooseUs