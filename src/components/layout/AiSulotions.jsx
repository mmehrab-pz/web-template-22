import React from "react";
import MiniTitle from "../ui/MiniTitle";
import TitleTwo from "../ui/TitleTwo";
import TitleThree from "../ui/TitleThree";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button1 from "../ui/Button1";
import template1 from "@/../public/images/template1.jpg";
import template2 from "@/../public/images/template2.jpg";
import template3 from "@/../public/images/template3.jpg";
import pic1 from "@/../public/images/pic1.jpg";
import pic2 from "@/../public/images/pic2.jpg";
import pic3 from "@/../public/images/pic3.jpg";
import pic4 from "@/../public/images/pic4.jpg";
import pic5 from "@/../public/images/pic5.jpg";
import pic6 from "@/../public/images/pic6.jpg";
import pic7 from "@/../public/images/pic7.jpg";
import pic8 from "@/../public/images/pic8.jpg";
import pic9 from "@/../public/images/pic9.jpg";
import pic10 from "@/../public/images/pic10.jpg";
import dots from "@/../public/images/dots.png";
import bg1 from "@/../public/images/bg1.png";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import StarRotate from "../ui/stars/StarRotate";

export default function AiSulotions() {
  return (
    <section className="w-full py-[120px] flex flex-col items-center justify-center">
      <MiniTitle txt="Pur AI Solutions" />
      <TitleTwo
        first="Generative AI Designed for creators. Make your Life Easier with"
        highlight="AIMug"
      />
      <div className="w-full xl:w-[1320px] px-5 xl:px-0 mt-10">
        {/* -------------box 1-------------- */}
        <div className="w-full border border-[#3C3C77] relative bg-[#12122B] flex flex-col lg:flex-row rounded-2xl p-5 lg:py-[45px] lg:pl-[70px] lg:pr-[37px] mb-6 duration-300 hover:border-[#ACDA49]">
          <span className="w-full h-full absolute bg-[url('/images/bg1.png')] top-0 left-0 z-1"></span>
          <figure className="absolute bottom-23 left-130">
            <StarRotate />
          </figure>
          <div className="w-full lg:w-1/2 relative z-2 flex flex-col justify-start items-start">
            <MiniTitle txt="AI Writing Tools" />
            <TitleThree title="Write ✍️ Better Content Faster, The Future of AI Writing Tools is Finally here" />
            <p className="font-sora text-[#a1aac9] leading-[26px] mt-3.5">
              Mastering the Art of AI Content Writing: Unleashing the Power of
              Automated Creativity"
            </p>
            <ul className="w-full mt-2.5">
              <li className="flex font-sora text-[14px] text-[#a1aac9] leading-[22px] mb-2.5">
                <IoIosCheckmarkCircleOutline className="text-[#426bff] text-[22px] mr-2.5" />
                There are more than 60+ use cases and templates to pick
              </li>
              <li className="flex font-sora text-[14px] text-[#a1aac9] leading-[22px] mb-2.5">
                <IoIosCheckmarkCircleOutline className="text-[#426bff] text-[22px] mr-2.5" />
                Let’s Communicate with your customers with emotions
              </li>
              <li className="flex font-sora text-[14px] text-[#a1aac9] leading-[22px] mb-2.5">
                <IoIosCheckmarkCircleOutline className="text-[#426bff] text-[22px] mr-2.5" />
                Choose the best AI copy for your message & save as a document
              </li>
            </ul>
            <Button1 title="get started"/>
          </div>
          <div className="w-full lg:w-1/2 relative z-2 mt-5 lg:mt-0">
            <figure className="w-full h-fit rounded-2xl border border-[#3C3C77] bg-[#1E1E42] p-[25px]">
              <Image src={template1} alt="template1" className="rounded-2xl w-full" />
            </figure>
          </div>
        </div>
        {/* -------------box 2 and 3-------------- */}
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 h-full lg:min-h-[690px] p-5 lg:px-10 lg:pt-12 lg:pb-10 border border-[#3C3C77] text-center relative bg-[#15152E] rounded-2xl duration-300 hover:border-[#ACDA49] flex flex-col items-center">
            <MiniTitle txt="ai chat bot" />
            <TitleThree title="With FlowAI, you can chat 🤖 smarter, not harder." />
            <p className="font-sora text-[#a1aac9] leading-[26px] my-3.5">
              Mastering the Art of AI Content Writing: Unleashing the Power of
              Automated Creativity"
            </p>
            <Link
              href="/mehrab"
              className="font-sora font-medium text-[#426BFF] text-[14px] capitalize flex border-b border-b-[#426BFF] mb-5"
            >
              start chat
              <LuArrowUpRight className="ml-2.5 text-[18px]" />
            </Link>
            <figure className="w-full relative">
              <Image
                src={template2}
                alt="template2"
                className="rounded-lg relative z-2 w-full"
              />
              <span className="absolute w-[560px] h-[80%] bg-[linear-gradient(103deg,#00E3F2_8.08%,#0000F2_31.54%,#F87D7D_60.38%,#FF2828_89.73%)] blur-[50px] opacity-[0.35] top-[50px] left-0 rotate-155 z-1"></span>
            </figure>
          </div>
          <div className="w-full lg:w-1/2 h-full lg:min-h-[690px] p-5 lg:px-10 lg:pt-12 lg:pb-10 border border-[#3C3C77] text-center relative bg-[#15152E] rounded-2xl duration-300 hover:border-[#ACDA49] flex flex-col items-center">
            <MiniTitle txt="ai video generator" />
            <TitleThree title="A wonderful video may be created by anyone." />
            <p className="font-sora text-[#a1aac9] leading-[26px] my-3.5">
              By listening to our leading AI text to speech reader, you can
              breeze through papers, articles, PDFs, and emails.
            </p>
            <Link
              href="/mehrab"
              className="font-sora font-medium text-[#426BFF] text-[14px] capitalize flex border-b border-b-[#426BFF] mb-5"
            >
              start chat
              <LuArrowUpRight className="ml-2.5 text-[18px]" />
            </Link>
            <figure className="w-full relative">
              <Image
                src={template3}
                alt="template3"
                className="rounded-lg relative z-2 w-full"
              />
              <span className="absolute w-[560px] h-[80%] bg-[linear-gradient(103deg,#00E3F2_8.08%,#0000F2_31.54%,#F87D7D_60.38%,#FF2828_89.73%)] blur-[50px] opacity-[0.35] top-[50px] left-0 rotate-155 z-1"></span>
            </figure>
          </div>
        </div>
        {/* -------------box 4-------------- */}
        <div className="w-full border border-[#3C3C77] mt-6 relative bg-[#15152E] z-3 flex rounded-2xl p-5 lg:pt-16 lg:pb-[82px] lg:pl-[50px] lg:pr-[60px] mb-6 duration-300 hover:border-[#ACDA49]">
          <span className="w-full h-full absolute bg-[url('/images/bg1.png')] top-0 left-0 z-1"></span>
          <div className="w-1/2 relative hidden z-2 lg:flex justify-end">
            <div className="w-[530px] h-[435px] pl-4 pt-4 border border-[#4B4B70] relative rounded-2xl bg-[linear-gradient(180deg,rgba(23,24,37,0.85)_0%,rgba(23,24,37,0.00)_101.72%)]">
              <Image src={dots} alt="dots" />
              <span className="w-[440px] h-[350px] flex blur-[50px] absolute rotate-150 bg-[linear-gradient(103deg,#00E3F2_8.08%,#0000F2_31.54%,#F87D7D_60.38%,#FF2828_89.73%)] opacity-[0.35] top-10"></span>
              <div className="w-auto h-[400px] top-10 -left-18 absolute flex gap-4">
                <div className=" flex flex-col justify-center gap-4">
                  <Image src={pic1} alt="pic1" className="rounded-[15px]" />
                  <Image src={pic2} alt="pic2" className="rounded-[15px]" />
                </div>
                <div className=" flex flex-col gap-4">
                  <Image src={pic3} alt="pic3" className="rounded-[15px]" />
                  <Image src={pic4} alt="pic4" className="rounded-[15px]" />
                  <Image src={pic5} alt="pic5" className="rounded-[15px]" />
                </div>
                <div className=" flex flex-col gap-4">
                  <Image src={pic6} alt="pic6" className="rounded-[15px]" />
                  <Image src={pic7} alt="pic7" className="rounded-[15px]" />
                  <Image src={pic8} alt="pic8" className="rounded-[15px]" />
                </div>
                <div className=" flex flex-col justify-center gap-4">
                  <Image src={pic9} alt="pic9" className="rounded-[15px]" />
                  <Image src={pic10} alt="pic10" className="rounded-[15px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative z-2 flex flex-col justify-start items-start lg:pl-[58px]">
            <MiniTitle txt="AI Writing Tools" />
            <TitleThree title="Generate Outstanding AI Images Just Using Prompt 🌄" />
            <p className="font-sora text-[#a1aac9] leading-[26px] mt-3.5">
              <span className="text-[#426bff]">AIMug</span> is an artificial art
              generator that turns your ideas into one-of-a kind artwork and
              photographs in seconds. Finally, you'll have the perfect image to
              go with your statement.
            </p>
            <div className="w-full  flex mt-4">
              <ul className="mr-12">
                <li className="flex items-center font-sora text-[16px] text-[#a1aac9] leading-[22px] mb-2.5">
                  <FaCheck className="mr-4" />
                  1000+ Styles
                </li>
                <li className="flex items-center font-sora text-[16px] text-[#a1aac9] leading-[22px] mb-2.5">
                  <FaCheck className="mr-4" />
                  Custom Sizes
                </li>
                <li className="flex items-center font-sora text-[16px] text-[#a1aac9] leading-[22px] mb-2.5">
                  <FaCheck className="mr-4" />
                  Oil Painting
                </li>
                <li className="flex items-center font-sora text-[16px] text-[#a1aac9] leading-[22px] mb-2.5">
                  <FaCheck className="mr-4" />+ And Much More
                </li>
              </ul>
              <ul>
                <li className="flex items-center font-sora text-[16px] text-[#a1aac9] leading-[22px] mb-2.5">
                  <FaCheck className="mr-4" />
                  Photo-realistic scenes
                </li>
                <li className="flex items-center font-sora text-[16px] text-[#a1aac9] leading-[22px] mb-2.5">
                  <FaCheck className="mr-4" />
                  Graphics
                </li>
                <li className="flex items-center font-sora text-[16px] text-[#a1aac9] leading-[22px] mb-2.5">
                  <FaCheck className="mr-4" />
                  Isometric Vector Graphics
                </li>
              </ul>
            </div>
            <Button1 title="get started" />
          </div>
        </div>
      </div>
    </section>
  );
}
