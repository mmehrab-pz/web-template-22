import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { LuMap } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className={`w-full xl:w-[1200px] 2xl:w-[1350px] mx-auto mb-[120px] flex items-center flex-wrap gap-5 lg:gap-0 px-5`}>
      <div className={`w-full lg:w-1/2 h-full lg:pr-[15%]`}>
         <h3 className={`font-sora font-semibold text-[40px] text-white capitalize`}>drop a line</h3>
         <p className={`font-sora text-[14px] text-[#a1aac9] leading-[26px] mt-3`}>There are more than 80+ use cases and templates to pick from to meet all of your writing demands. Let’s Communicate with your customers with emotions</p>
         <ul className="mt-10 flex flex-col gap-7">
            <li className="flex items-center">
                <LuPhoneCall className="text-[#426bff] text-[25px]"/>
                <p className="text-white font-sora font-medium capitalize text-[24px] ml-10">+989309791544</p>
            </li>
            <li className="flex items-center">
                <LuMap className="text-[#426bff] text-[25px]"/>
                <p className="text-white font-sora font-medium capitalize text-[24px] ml-10">2464 Royal Ln. Mesa, New Jersey</p>
            </li>
            <li className="flex items-center">
                <MdOutlineEmail  className="text-[#426bff] text-[25px]"/>
                <p className="text-white font-sora font-medium text-[24px] ml-10">mmehrab.pk@gmail.com</p>
            </li>
         </ul>
         <div className="mt-10 text-[#3C3C77] text-[25px] flex justify-start gap-5 *:duration-500 *:cursor-pointer *:hover:text-[#426bff]">
            <FiGithub />
            <FiTwitter />
            <FiFacebook />
            <FaInstagram />
         </div>
      </div>
      <div className={`w-full lg:w-1/2 p-5 lg:px-[65px] lg:pt-[93px] lg:pb-[100px] border border-[#2E2F45] rounded-lg bg-[#15152c]`}>
        <h3 className={`font-sora font-medium text-[32px] text-white`}>
          send us a message
        </h3>
        <form action="#" className="mt-6">
            {/* ----------name---------- */}
          <div>
            <p className="font-sora text-[#7781a6] capitalize">name:</p>
            <div className={`w-full h-14 mt-2.5 rounded-lg text-[#7781A6] font-sora border border-[#2E2F45] flex`}>
              <span className="w-14 h-full flex justify-center items-center">
                <BsFillPersonFill className="text-[20px]"/>
              </span>
              <input
                type="text"
                placeholder="mehrab pourzakaria"
                className={`w-[calc(100%-56px)] h-full pr-5 outline-0 placeholder:capitalize`} />
            </div>
          </div>
            {/* ----------email---------- */}
          <div className="mt-5">
            <p className="font-sora text-[#7781a6] capitalize">email:</p>
            <div className={`w-full h-14 mt-2.5 rounded-lg text-[#7781A6] font-sora border border-[#2E2F45] flex`}>
              <span className="w-14 h-full flex justify-center items-center">
                <IoMdMail className="text-[20px]"/>
              </span>
              <input
                type="email"
                placeholder="mmehrab.pk@gmail.com"
                className={`w-[calc(100%-56px)] h-full pr-5 outline-0`} />
            </div>
          </div>
            {/* ----------text---------- */}
          <div className="mt-5">
            <p className="font-sora text-[#7781a6] capitalize">email:</p>
            <textarea placeholder="enter your message here"  className={`w-full mt-2.5 h-[150px] p-5 outline-0 resize-none rounded-lg text-[#7781A6] font-sora border border-[#2E2F45] placeholder:capitalize`}></textarea>
          </div>
          {/* ----------button---------- */}
          <button className={`mt-5 w-full h-14 rounded-lg bg-[linear-gradient(211deg,#8F79FF_13.4%,#426BFF_118.74%)] cursor-pointer font-sora font-semibold capitalize text-white flex justify-center items-center`}>
            submit request
          </button>
        </form>
      </div>
    </section>
  );
}
