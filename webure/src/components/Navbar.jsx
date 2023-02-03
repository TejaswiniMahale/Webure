import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex px-[135px] '>
            <p className='text-2xl italic font-bold leading-9 font-Ubuntu text-[#FB3F6C] w-[32%] pt-[40px]'>Webure Technologies</p>
              <div className='flex py-[12px] justify-between items-center pt-[35px] w-[68%]'>
                <p className='text-[#747582] text-text-base font-normal font-Ubuntu leading-[18px] '>About us</p>
                <p className='text-[#747582] text-text-base font-normal font-Ubuntu leading-[18px] '>Services</p>
                <p className='text-[#747582] text-text-base font-normal font-Ubuntu leading-[18px] '>Career</p>
                <p className='text-[#747582] text-text-base font-normal font-Ubuntu leading-[18px] '>ROI Stories</p>
                <p className='text-[#747582] text-text-base font-normal font-Ubuntu leading-[18px] '>Blog</p>
                <p className='text-[#747582] text-text-base font-normal font-Ubuntu leading-[18px] '>Contact us</p>
                <div className='border-[1px] rounded-[80px] border-purple'>
                  <p className='text-base font-bold leading-2 font-Ubuntu py-3.5 px-8'>Let's talk</p>
                </div> 
              </div>        
        </div> 
    </>
  )
}

export default Navbar