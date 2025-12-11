import React from "react";
import ai1 from '@/../public/images/ai1.png'
import ai2 from '@/../public/images/ai2.png'
import ai3 from '@/../public/images/ai3.png'
import ai4 from '@/../public/images/ai4.png'
import Image from "next/image";

export default function AIPerformance() {
  return (
    <section className={`w-full mb-[120px]`}>
      <h3
        className={`w-full lg:w-[50%] mx-auto font-sora font-medium text-[30px] lg:text-[40px] leading-[55px] text-white capitalize text-center`}
      >
        We deliver great quality and performance while offering you the most recent AI Busoness products.
      </h3>
      <div className={`w-full xl:w-[1340px] mx-auto mt-[60px] flex justify-center gap-5 md:gap-0 flex-wrap`}>
        <div className={`w-full md:w-1/2 lg:w-1/4 px-5 mb-5 lg:mb-0`}>
            <figure>
                <Image src={ai1} alt="ai1"/>
            </figure>
            <h4 className="text-white text-[20px] font-sora font-semibold capitalize duration-500 hover:text-[#ffa372] my-4">Research and Discovery</h4>
            <p className="font-sora text-[#a1aac9] leading-[26px]">A Magical Tool to Optimize you content for the first know who you're targeting.</p>
        </div>
        <div className={`w-full md:w-1/2 lg:w-1/4 px-5 mb-5 lg:mb-0`}>
            <figure>
                <Image src={ai2} alt="ai2"/>
            </figure>
            <h4 className="text-white text-[20px] font-sora font-semibold capitalize duration-500 hover:text-[#ffa372] my-4">Information Architecture</h4>
            <p className="font-sora text-[#a1aac9] leading-[26px]">A Magical Tool to Optimize you content for the first know who you're targeting.</p>
        </div>
        <div className={`w-full md:w-1/2 lg:w-1/4 px-5`}>
            <figure>
                <Image src={ai3} alt="ai3"/>
            </figure>
            <h4 className="text-white text-[20px] font-sora font-semibold capitalize duration-500 hover:text-[#ffa372] my-4">Design & Development</h4>
            <p className="font-sora text-[#a1aac9] leading-[26px]">A Magical Tool to Optimize you content for the first know who you're targeting.</p>
        </div>
        <div className={`w-full md:w-1/2 lg:w-1/4 px-5`}>
            <figure>
                <Image src={ai4} alt="ai4"/>
            </figure>
            <h4 className="text-white text-[20px] font-sora font-semibold capitalize duration-500 hover:text-[#ffa372] my-4">Quality Assurance, Launch</h4>
            <p className="font-sora text-[#a1aac9] leading-[26px]">A Magical Tool to Optimize you content for the first know who you're targeting.</p>
        </div>

      </div>
    </section>
  );
}
