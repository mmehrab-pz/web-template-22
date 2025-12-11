import React from 'react'
import MiniTitle from '../ui/MiniTitle'

export default function PageTitle({miniTitle , title , content}) {
  return (
    <section className='w-full lg:w-[800px] mx-auto text-center mt-10 mb-[120px] relative'>
        <span className='w-full h-full flex absolute bg-[url("/images/bg2.png")] bg-cover'></span>
        <MiniTitle txt={miniTitle} />
        <h3 className='font-sora font-semibold text-[30px] lg:text-[48px] lg:px-[100px] text-white capitalize'>{title}</h3>
        <p className='font-sora leading-6 text-[#a1aac9] lg:w-[60%] mx-auto mt-5'>{content}</p>
    </section>
  )
}
