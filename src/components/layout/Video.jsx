import React from 'react'
import { FaPlay } from "react-icons/fa";

export default function Video() {
  return (
    <section className='w-full h-[90vh] mb-[120px] bg-[url("/images/videoBg.jpg")] bg-cover bg-center flex justify-center items-center'>
        <span className='w-[130px] h-[130px] rounded-full border border-[#426BFF] bg-[#10102280] backdrop-blur-sm flex justify-center items-center cursor-pointer text-[#426BFF] text-[28px] animate-pulse'>
            <FaPlay />
        </span>
    </section>
  )
}
