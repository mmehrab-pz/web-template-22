import Image from 'next/image'
import React from 'react'

export default function CardModelOne({name , src , txt , title , logo}) {
  return (
    <div className='w-full xl:max-w-[312px] rounded-2xl border border-[#3C3C77] bg-[#15152E] px-[25px] pt-9 pb-[39px] text-start'>
        <div className=' w-full flex'>
            <figure className='w-8 h-8 rounded-full overflow-hidden'>
                <Image src={src} alt='person'/>
            </figure>
            <div className='ml-4'>
               <h4 className='font-sora font-medium text-white capitalize'>{name}</h4> 
               <h5 className='font-sora text-[12px] text-[#bdbfd4] capitalize'>Content Creator</h5>
            </div>
        </div>
        <h3 className='font-sora font-medium text-white capitalize text-[18px] my-4'>{title}</h3>
        <p className='font-sora text-[#a1aac9] leading-[26px] mb-10'>{txt}</p>
        <div className='w-full flex justify-between'>
            <figure>
                <Image src={logo} alt='miniTeam'/>
            </figure>
            <span className='py-1.5 px-[9px] rounded-lg bg-[#212144] font-sora text-[#a1aac9] text-[14px]'>5 ⭐</span>
        </div>
    </div>
  )
}
