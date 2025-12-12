import React from 'react'
import banner from '@/../public/images/banner.png'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

export default function Mehrab() {
  return (
    <section className={`w-full xl:w-[1150px] px-5 2xl:w-[1250px] mx-auto mb-[120px]`}>
        <figure>
            <Image src={banner} alt='banner' className='rounded-lg'/>
        </figure>
        <div className='w-full border border-t-0 border-[#2E2F45] px-10'>
            <div className='border-b border-b-[#2E2F45] flex justify-between py-5 flex-wrap gap-5'>
                <div className='w-full md:w-auto'>
                    <h2 className={`text-[28px] font-sora font-medium capitalize text-white mb-2`}>mehrab pourzakaria</h2>
                    <h3 className={`text-[20px] font-sora capitalize text-[#a1aac9] mb-5`}>front-End developer</h3>
                    <div className='flex flex-wrap gap-5'>
                        <a href="https://github.com/mmehrab-pz" target='blanck' className={`text-white font-sora capitalize flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#1B1F23]`}>
                            <FaGithub />
                            github
                        </a>
                        <a href="https://www.linkedin.com/in/mehrab-pourzakaria-1b2492237/" target='blanck' className={`text-white font-sora capitalize flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#0A66C2]`}>
                            <FaLinkedin />
                            linkedin
                        </a>
                        <a href="https://www.instagram.com/mehrab.poorzakaria_web/" target='blanck' className={`text-white font-sora capitalize flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#FD0696]`}>
                            <AiFillInstagram />
                            instagram
                        </a>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&to=mmehrab.pk@gmail.com&tf=cm" target='blanck' className={`text-white font-sora capitalize flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#DC4234]`}>
                            <SiGmail />
                            gmail
                        </a>
                    </div>
                </div>
                <div className='w-full md:w-auto'>
                    <a href="https://pourzakaria.com/" target='blanck'  className={`text-white w-fit font-sora capitalize flex items-center gap-2.5 px-5 py-3 rounded-lg  bg-[linear-gradient(211deg,#8F79FF_13.4%,#426BFF_118.74%)]`}>
                        <BsGlobe />
                        my website
                    </a>
                </div>
            </div>
            <div className={`py-5`}>
                <h2 className={`text-[40px] font-sora font-medium capitalize text-white mb-2`}>About Mehrab Pourzakaria</h2>
                <p className='mt-5 text-[16px] font-sora capitalize text-[#a1aac9] leading-10'>
                    I'm Mehrab Pourzakaria, a creative developer driven by a deep passion for transforming ideas into meaningful digital experiences.
                    What began in theran as a curiosity for technology and design quickly grew into a lifelong pursuit — from crafting simple websites to developing intuitive, high-performing applications that blend functionality with aesthetic precision.

                    I thrive at the intersection of creativity and logic, where code becomes a language for storytelling and innovation. Every project I take on is not just about building something that works — it’s about crafting experiences that connect, inspire, and leave a lasting impact.
                </p>
            </div>
        </div>
    </section>
  )
}
