import React from "react";
import Button1 from "../ui/Button1";
import aiPack from "@/../public/images/aiPack.png";
import pack1 from "@/../public/images/pack1.png";
import pack2 from "@/../public/images/pack2.png";
import pack3 from "@/../public/images/pack3.png";
import pack4 from "@/../public/images/pack4.png";
import pack5 from "@/../public/images/pack5.png";
import pack6 from "@/../public/images/pack6.png";
import Image from "next/image";

export default function HomeHeaderContent() {
  return (
      <section className="w-full mt-[110px] flex flex-col items-center">
        <h1 className="text-white text-5xl text-center font-sora font-semibold leading-[58px]">
          Explore the Possibilities of <br /> AI 🤖 with&nbsp;
          <p className="text-[#FF6C1E] inline">AIMug</p>
        </h1>
        <Button1 title="get started free" />
        {/* ----------------- */}
        <div className="mt-[35px] flex gap-[250px] mx-auto">
          <div className="w-[140px] h-[140px] bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
            <Image src={pack1} />
            <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
              ai content writing
            </h2>
          </div>
          <div className="w-[140px] h-[140px] bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
            <Image src={pack2} />
            <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
              ai image generator
            </h2>
          </div>
        </div>
        {/* ----------------- */}
        <div className="w-[860px] flex justify-between items-center">
          <div className="w-[140px] h-[140px] bg-[#ffffff0d] relative border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
            <Image src={pack3} />
            <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
              ai code generator
            </h2>
            <span className={'absolute h-[370] left-[-178px] top-[-38px] w-[370px] rounded-full opacity-[0.3] bg-[linear-gradient(93deg,#B324D7_7.07%,#FE577F_97.81%)] blur-[114px] -z-1'}></span>
          </div>
          <div className="w-[218px] h-[218px] relative rounded-[48px] bg-[#ffffff05] backdrop-blur-[10px] flex flex-col justify-center items-center border border-[white]">
            <Image src={aiPack} alt="aiPack" />
            <span className={'absolute h-80 w-[315px] rounded-full opacity-[0.3] bg-[linear-gradient(208deg,#FFF855_19.19%,#00E3F2_70.68%)] blur-[90px] -z-1'}></span>
          </div>
          <div className="w-[140px] h-[140px] relative bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
            <Image src={pack4} />
            <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
              ai chat bot
            </h2>
            <span className={'absolute h-[423] left-[-25px] w-[423px] rounded-full opacity-[0.3] bg-[linear-gradient(180deg,#6243FF_0%,#FF2828_100%)] blur-[90px] -z-1'}></span>
          </div>
        </div>
        {/* ----------------- */}
        <div className="flex items-center gap-[250px] mx-auto relative">
          <div className="w-[140px] h-[140px] bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
            <Image src={pack5} />
            <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
              generate text to audio
            </h2>
          </div>
          <h2 className="font-sora text-[#426BFF] capitalize font-bold text-[30px] absolute left-[50%] translate-x-[-50%]">
            ai pack
          </h2>
          <div className="w-[140px] h-[140px] bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
            <Image src={pack6} />
            <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
              speech to text
            </h2>
          </div>
        </div>
      </section>
  );
}
