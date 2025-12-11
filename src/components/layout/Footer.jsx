import React from "react";
import MiniTitle from "../ui/MiniTitle";
import TitleThree from "../ui/TitleThree";
import Button3 from "../ui/Button3";
import StarRotate from "../ui/stars/StarRotate";
import StarUtd from "../ui/stars/StarUtd";
import StarLtr from "../ui/stars/StarLtr";
import logo from '@/../public/images/logo.png'
import Image from "next/image";
import { IoSend } from "react-icons/io5";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden px-5 xl:px-0">
      <span className="absolute w-[660px] h-[305px] -bottom-20 right-40 opacity-[0.1] blur-[75px] bg-[linear-gradient(260deg,#00E3F2_5.55%,#FF9B00_32.85%,#F00_57.49%,#BD00FF_86.75%)] z-1"></span>
      {/* -----------box----------- */}
      <div className="w-full xl:w-[1320px] mx-auto border border-[#ACDA49] bg-[#0F0F24] rounded-2xl py-[90px] px-5 flex flex-col items-center text-center relative z-1">
        <span className='w-full h-full flex bg-[url("/images/bg2.png")] bg-cover absolute top-0 left-0'></span>
        <figure className="absolute top-28 left-139">
          <StarRotate />
        </figure>
        <figure className="absolute top-32 right-138">
          <StarUtd />
        </figure>
        <figure className="absolute top-63 right-91">
          <StarRotate />
        </figure>
        <figure className="absolute top-63 left-95">
          <StarLtr />
        </figure>
        <div className="absolute bottom-0 left-0 w-[660px] h-[305px] opacity-[0.1] blur-[75px] bg-[linear-gradient(98deg,#00E3F2_5.55%,#FF9B00_32.85%,#F00_57.49%,#BD00FF_86.75%)] z-1"></div>
        <MiniTitle txt="14 Day’s Free Trail" />
        <h2 className="font-sora font-medium text-[22px] md:text-[40px] text-[white] capitalize lg:w-[70%]">
          Be part of the future of AIMug Let’s Create Something
        </h2>
        <p className="font-sora text-[#a1aac9] mt-5 lg:w-[45%] text-center">
          Choose a topic & create something better than before, get started from
          today. No Credit Card Required
        </p>
        <Button3 title="get started free" />
      </div>
      {/* -----------content----------- */}
      <div className="w-full xl:w-[1125px] mx-auto mt-[70px] flex justify-center flex-wrap gap-6 relative z-2">
        {/* ------------------- */}
        <div className="w-full lg:w-1/4">
          <figure>
            <Image src={logo} alt="logo"/>
          </figure>
          <p className="font-sora text-[14px] text-[#a1aac9] leading-6 mt-2.5">A Magical Tool to Optimize you content for the first know who you're targeting. Identify your target audience.</p>
        </div>
        {/* ------------------- */}
        <div className="w-full lg:w-auto lg:ml-5">
          <h3 className="font-sora font-medium text-white text-[24px] capitalize">company</h3>
          <ul className="mt-3 flex flex-col gap-3">
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">sign in</li>
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">register</li>
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">pricing</li>
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">privacy policy</li>
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">carear</li>
          </ul>
        </div>
        {/* ------------------- */}
        <div className="w-full lg:w-auto lg:ml-10">
          <h3 className="font-sora font-medium text-white text-[24px] capitalize">Resources</h3>
          <ul className="mt-3 flex flex-col gap-3">
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">AI writer</li>
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">Businesses AI</li>
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">AI Blog writer</li>
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">AI Content Creator</li>
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">AI Copy</li>
            <li className="font-sora text-[14px] text-[#a1aac9] hover:text-[#426bff] hover:pl-2.5 duration-500 cursor-pointer">Article write</li>
          </ul>
        </div>
        {/* ------------------- */}
        <div className="w-full lg:w-auto lg:ml-10">
          <h3 className="font-sora font-medium text-white text-[24px] capitalize">Resources</h3>
          <form action="#" className="w-[330px] h-[50px] mt-3 flex overflow-hidden">
            <input type="email" placeholder="enter your email" className="w-[70%] h-full text-[14px] bg-[#0F0F24] text-white outline-0 pl-5 font-sora rounded-l-lg border border-[#4B4B70] placeholder:capitalize placeholder:text-[#a1aac9]"/>
            <button className="w-[30%] h-full rounded-r-lg bg-[#426BFF] duration-500 hover:bg-[#D46C51] flex justify-center items-center text-[white] text-[22px] cursor-pointer">
              <IoSend />
            </button>
          </form>
          <div className="flex gap-5 mt-5 *:hover:text-[#426bff] *:duration-500">
            <Link href='/mehrab' className="text-[#747694] text-[18px]"><FiGithub /></Link>
            <Link href='/mehrab' className="text-[#747694] text-[18px]"><RiTelegram2Fill /></Link>
            <Link href='/mehrab' className="text-[#747694] text-[18px]"><FaLinkedinIn /></Link>
            <Link href='/mehrab' className="text-[#747694] text-[18px]"><FaInstagram /></Link>
            <Link href='/mehrab' className="text-[#747694] text-[18px]"><MdOutlineEmail /></Link>
          </div>
        </div>
      </div>
      {/* ----------Copyright ------------ */}
      <div className="w-full text-center pt-[67px] pb-[22px]">
        <p className="font-sora text-[#a1aac9] capitalize">Copyright © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
