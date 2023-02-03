import React from 'react'

const ServiceFlexBox = () => {
  return (
    <div className='flex py-[50px] px-[180px] gap-[70px] justify-betweeen service_flex'>
        <div className='text-center p-[30px] rounded-[30px] bg-[#3c50e0]'>
            <p className='text-[36px] text-[#ffffff] pb-[12px] leading-[41px] font-[700] font-Ubuntu'>96%</p>
            <p className='text-[14px] text-[#ffffff] pb-[5px] font-[700] font-Ubuntu'>Client retention</p>
            <p className='text-[14px] text-[#dbdbe1] font-[400] font-Ubuntu'>By Dalibor and Marino in Hong Kong</p>
        </div>
        <div className='text-center p-[30px] rounded-[30px] bg-[#ff5670]'>
            <p className='text-[36px] text-[#ffffff] pb-[12px] leading-[41px] font-[700] font-Ubuntu'>10+</p>
            <p className='text-[14px] text-[#ffffff] pb-[5px] font-[700] font-Ubuntu'>Year of service</p>
            <p className='text-[14px] text-[#dbdbe1] font-[400] font-Ubuntu'>By Dalibor and Marino in Hong Kong</p>
        </div>
        <div className='text-center p-[30px] rounded-[30px] bg-[#fdb400]'>
            <p className='text-[36px] text-[#ffffff] pb-[12px] leading-[41px] font-[700] font-Ubuntu'>70+</p>
            <p className='text-[14px] text-[#ffffff] pb-[5px] font-[700] font-Ubuntu'>Professionals</p>
            <p className='text-[14px] text-[#dbdbe1] font-[400] font-Ubuntu'>By Dalibor and Marino in Hong Kong</p>
        </div>
        <div className='text-center p-[30px] rounded-[30px] bg-[#627193]'>
            <p className='text-[36px] text-[#ffffff] pb-[12px] leading-[41px] font-[700] font-Ubuntu'>$40M</p>
            <p className='text-[14px] text-[#ffffff] pb-[5px] font-[700] font-Ubuntu'>In funding</p>
            <p className='text-[14px] text-[#dbdbe1] font-[400] font-Ubuntu'>By Dalibor and Marino in Hong Kong</p>
        </div>
    </div>
  )
}

export default ServiceFlexBox