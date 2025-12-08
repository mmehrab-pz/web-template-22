import React from "react";
import MiniTitle from "../ui/MiniTitle";
import TitleTwo from "../ui/TitleTwo";
import Image from "next/image";
import shape1 from "@/../public/images/shape1.png";
import stream1 from "@/../public/images/stream1.png";
import stream2 from "@/../public/images/stream2.png";
import stream3 from "@/../public/images/stream3.png";
import stream4 from "@/../public/images/stream4.png";
import stream5 from "@/../public/images/stream5.png";
import stream6 from "@/../public/images/stream6.png";
import stream7 from "@/../public/images/stream7.png";
import aiPack from "@/../public/images/aiPack.png";
import circle1 from "@/../public/images/circle1.png";
import StarRotate from "../ui/stars/StarRotate";
import StarLtr from "../ui/stars/StarLtr";
import StarUtd from "../ui/stars/StarUtd";

export default function Streamlining() {
  return (
    <section className="w-full h-auto flex justify-center p-5 pb-[120px]">
      <div className="w-full xl:w-[1320px] h-auto rounded-2xl border border-[#3C3C77] bg-[#15152E] p-5 lg:pt-[120px] lg:pb-[100px] text-center overflow-hidden">
        <MiniTitle txt="Integrations With" />
        <h2 className="font-sora font-medium text-[38px] lg:text-[48px] text-[white] capitalize text-center lg:w-[60%] mx-auto">
          Streamlining Collaboration with AIMug
        </h2>
        <div className='w-[70%] relative mx-auto mt-12 bg-[url("/images/bg2.png")] bg-cover'>
          <figure className="absolute -top-18 left-0 z-1">
            <Image src={shape1} alt="shape1" />
          </figure>
          <div className="relative z-2 w-full flex flex-col gap-6">
            <figure className="absolute top-21 left-80">
              <StarRotate />
            </figure>
            <figure className="absolute top-50 left-50">
              <StarUtd />
            </figure>
            <figure className="absolute top-21 right-80">
              <StarLtr />
            </figure>
            <figure className="absolute top-50 right-45">
              <StarRotate />
            </figure>
            {/* ------------- */}
            <div className=" lg:flex justify-between w-[45%] mx-auto hidden">
              <figure className="w-[72px] h-[72px] rounded-2xl border border-[#ACDA49] bg-[#12122B] flex justify-center items-center">
                <Image src={stream5} alt="stream5" />
              </figure>
              <figure className="w-[72px] h-[72px] rounded-2xl border border-[#ACDA49] bg-[#12122B] flex justify-center items-center">
                <Image src={stream6} alt="stream6" />
              </figure>
            </div>
            {/* ------------- */}
            <div className=" flex justify-center lg:justify-between items-center w-full lg:w-[80%] mx-auto">
              <figure className="hidden lg:flex w-[72px] h-[72px] rounded-2xl border border-[#ACDA49] bg-[#12122B] justify-center items-center">
                <Image src={stream7} alt="stream7" />
              </figure>
              <figure className="relative">
                <Image src={aiPack} alt="aiPack"/>
                <Image src={circle1} alt="circle1" className="absolute -bottom-7" />
              </figure>
              <figure className="hidden lg:flex w-[72px] h-[72px] rounded-2xl border border-[#ACDA49] bg-[#12122B] justify-center items-center">
                <Image src={stream1} alt="stream1" />
              </figure>
            </div>
            {/* ------------- */}
            <div className=" hidden lg:flex justify-between w-[50%] mx-auto">
              <figure className="w-[72px] h-[72px] rounded-2xl border border-[#ACDA49] bg-[#12122B] flex justify-center items-center">
                <Image src={stream2} alt="stream2" />
              </figure>
              <figure className="w-[72px] h-[72px] rounded-2xl border border-[#ACDA49] bg-[#12122B] flex justify-center items-center mt-10">
                <Image src={stream4} alt="stream4" />
              </figure>
              <figure className="w-[72px] h-[72px] rounded-2xl border border-[#ACDA49] bg-[#12122B] flex justify-center items-center">
                <Image src={stream3} alt="stream3" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
