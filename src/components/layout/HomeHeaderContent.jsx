import React from "react";
import Button1 from "../ui/Button1";
import aiPack from "@/../public/images/aiPack.png";
import pack1 from "@/../public/images/pack1.png";
import pack2 from "@/../public/images/pack2.png";
import pack3 from "@/../public/images/pack3.png";
import pack4 from "@/../public/images/pack4.png";
import pack5 from "@/../public/images/pack5.png";
import pack6 from "@/../public/images/pack6.png";
import greenStar from "@/../public/images/greenStar.png";
import arrow from "@/../public/images/arrow.png";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import StarLtr from "./../ui/stars/StarLtr";
import StarUtd from "./../ui/stars/StarUtd";
import StarRotate from './../ui/stars/StarRotate';

export default function HomeHeaderContent() {
  return (
    <section className="w-full mt-[110px] flex flex-col items-center">
      <h1 className="text-white text-5xl text-center font-sora font-semibold leading-[58px]">
        Explore the Possibilities of <br /> AI 🤖 with&nbsp;
        <p className="text-[#FF6C1E] inline">AIMug</p>
      </h1>
      <Button1 title="get started free" />
      {/* ----------------- */}
      <div className="mt-[35px] flex flex-col md:flex-row gap-3 md:gap-[250px] mx-auto mb-3">
        <div className="w-[140px] h-[140px] bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
          <Image src={pack1} alt="img" />
          <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
            ai content writing
          </h2>
        </div>
        <div className="w-[140px] h-[140px] bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
          <Image src={pack2} alt="img" />
          <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
            ai image generator
          </h2>
        </div>
      </div>
      {/* ----------------- */}
      <div className="w-[860px] relative flex flex-col md:flex-row gap-3 justify-between items-center">
        <figure className="absolute top-6 left-40">
            <StarLtr />
        </figure>
        <figure className="absolute top-2 right-40">
            <StarLtr />
        </figure>
        <figure className="absolute bottom-4 right-40">
            <StarUtd />
        </figure>
        <figure className="absolute -bottom-2 left-40">
            <StarUtd />
        </figure>
        <figure className="absolute top-1 left-0">
            <StarRotate />
        </figure>
        <figure className="absolute top-2 -right-3">
            <StarRotate />
        </figure>
        <div className="w-[140px] h-[140px] bg-[#ffffff0d] relative border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
          <Image src={pack3} alt="img" />
          <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
            ai code generator
          </h2>
          <span
            className={
              "absolute h-[370] left-[-178px] top-[-38px] w-[370px] rounded-full opacity-[0.3] bg-[linear-gradient(93deg,#B324D7_7.07%,#FE577F_97.81%)] blur-[114px] -z-1"
            }
          ></span>
        </div>
        <div className="w-[218px] h-[218px] relative rounded-[48px] bg-[#ffffff05] backdrop-blur-[10px] flex flex-col justify-center items-center border border-[white]">
          <Image src={aiPack} alt="aiPack" />
          <span
            className={
              "absolute h-80 w-[315px] rounded-full opacity-[0.3] bg-[linear-gradient(208deg,#FFF855_19.19%,#00E3F2_70.68%)] blur-[90px] -z-1"
            }
          ></span>
        </div>
        <div className="w-[140px] h-[140px] relative bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
          <Image src={pack4} alt="img" />
          <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
            ai chat bot
          </h2>
          <span
            className={
              "absolute h-[423] left-[-25px] w-[423px] rounded-full opacity-[0.3] bg-[linear-gradient(180deg,#6243FF_0%,#FF2828_100%)] blur-[90px] -z-1"
            }
          ></span>
        </div>
      </div>
      {/* ----------------- */}
      <div className="flex items-center flex-col md:flex-row gap-3 md:gap-[250px] mx-auto relative mt-3">
        <figure className="absolute bottom-0 -right-60">
            <StarLtr />
        </figure>
                <figure className="absolute -bottom-10 -left-50">
            <StarRotate />
        </figure>
        <div className="w-[140px] h-[140px] bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
          <Image src={pack5} alt="img" />
          <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
            generate text to audio
          </h2>
        </div>
        <h2 className="font-sora text-[#426BFF] hidden capitalize font-bold text-[30px] absolute left-[50%] translate-x-[-50%]">
          ai pack
        </h2>
        <div className="w-[140px] h-[140px] bg-[#ffffff0d] border border-[#ffffff29] backdrop-blur-[10px] rounded-2xl flex flex-col justify-center items-center">
          <Image src={pack6} alt="img" />
          <h2 className="text-[18px] text-[white] font-sora font-medium capitalize mt-3 text-center">
            speech to text
          </h2>
        </div>
      </div>
      <div className={"mt-[120px] w-full flex justify-start md:w-auto flex-col md:flex-row gap-10 pl-5"}>
        {/* -------------------- */}
        <div className={"flex items-center"}>
          <figure>
            <Image src={greenStar} alt="green star" />
          </figure>
          <div className="ml-2.5">
            <div className={"flex gap-1.5"}>
              <span className="w-5 h-5 bg-[#02B67B] text-white flex justify-center items-center">
                <TiStarFullOutline />
              </span>
              <span className="w-5 h-5 bg-[#02B67B] text-white flex justify-center items-center">
                <TiStarFullOutline />
              </span>
              <span className="w-5 h-5 bg-[#02B67B] text-white flex justify-center items-center">
                <TiStarFullOutline />
              </span>
              <span className="w-5 h-5 bg-[#02B67B] text-white flex justify-center items-center">
                <TiStarFullOutline />
              </span>
              <span className="w-5 h-5 bg-[#02B67B] text-white flex justify-center items-center">
                <TiStarFullOutline />
              </span>
            </div>
            <p className="capitalize font-sora font-semibold text-white mt-1">
              rated 4.8 . 1,000+ reviews
            </p>
          </div>
        </div>
        {/* -------------------- */}
        <div className={"flex items-center"}>
          <figure>
            <Image src={arrow} alt="arrow" />
          </figure>
          <div className="ml-2.5">
            <div className={"flex gap-1.5 text-[#EDA044] text-[24px]"}>
              <TiStarFullOutline  />
              <TiStarFullOutline  />
              <TiStarFullOutline  />
              <TiStarFullOutline  />
              <TiStarFullOutline  />
            </div>
            <p className="capitalize font-sora font-semibold text-white mt-1">
              rated 4.8 . 1,000+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
