import React from "react";
import MiniTitle from "../ui/MiniTitle";
import TitleTwo from "../ui/TitleTwo";
import TitleThree from "../ui/TitleThree";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button1 from "../ui/Button1";
import template1 from "@/../public/images/template1.jpg";
import bg1 from "@/../public/images/bg1.png";
import Image from "next/image";

export default function AiSulotions() {
  return (
    <section className="w-full py-[120px] flex flex-col items-center justify-center">
      <MiniTitle txt="Pur AI Solutions" />
      <TitleTwo
        first="Generative AI Designed for creators. Make your Life Easier with"
        highlight="AIMug"
      />
      <div className="w-full xl:w-[1320px]  px-5 xl:px-0 mt-10">
        {/* -------------box 1-------------- */}
        <div className="w-full border border-[#3C3C77] relative bg-[#12122B] flex rounded-2xl py-[45px] pl-[70px] pr-[37px] mb-6 duration-300 hover:border-[#ACDA49]">
          <span className="w-full h-full absolute bg-[url('/images/bg1.png')] top-0 left-0 z-1"></span>
          <div className="w-1/2 relative z-2 flex flex-col justify-start items-start">
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
            <Button1 title="get started" />
          </div>
          <div className="w-1/2 relative z-2">
            <figure className="w-full h-full rounded-2xl border border-[#3C3C77] bg-[#1E1E42] p-[25px]">
              <Image src={template1} alt="template1" className="rounded-2xl" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
