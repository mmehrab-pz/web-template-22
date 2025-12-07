import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { LuArrowUpRight } from "react-icons/lu";


export default function BoxModelOne({title , src}) {
    console.log(src);
    
  return (
    <div className='px-[30px] w-full md:w-[315px] pt-12 pb-[42px] bg-[#15152c] border border-[#3C3C77] rounded-2xl duration-300 ease-in hover:border-[#ACDA49]'>
        <Image src={src} alt={title}/>
        <h4 className='font-sora font-semibold text-[18px] text-[white] capitalize my-5'>{title}</h4>
        <p className='font-sora text-[#ada7cd] mb-10'>Mastering the Art of AI Content Writing: Unleashing the Power of Automated Creativity</p>
        <Link href='/mehrab' className={'font-sora font-medium capitalize text-[#ada7cd] flex items-center hover:text-[#FF6C1E] duration-500'}>
        explore more
        <LuArrowUpRight className='ml-2.5 text-[18px]' />
        </Link>
    </div>
  )
}
