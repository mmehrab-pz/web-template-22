import React from "react";
import woman from "@/../public/images/woman.jpg";
import Image from "next/image";
import greenStar from "@/../public/images/greenStar.png";
import arrow from "@/../public/images/arrow.png";
import { TiStarFullOutline } from "react-icons/ti";

export default function Create() {
  return (
    <section className="w-full xl:w-[1300px] 2xl:w-[1350px] mb-[120px] flex flex-wrap gap-5 xl:gap-0 px-5 2xl:px-0 mx-auto">
      <div className="w-full xl:w-[40%] flex flex-col justify-center">
        <h3 className="text-white font-sora font-semibold text-[40px] capitalize leading-14">
          Create Something New with AIMug, that are simple to use
        </h3>
        <p className="fpnt sora text-[14px] text-[#a1aac9] leading-[26px] mt-5">
          There are more than 80+ use cases and templates to pick from to meet
          all of your writing demands. Let’s Communicate with your customers
          with emotions
        </p>
        <div
          className={
            "mt-10 w-full flex justify-start md:w-auto flex-col md:flex-row gap-10 pl-5 xl:pl-0"
          }
        >
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
              <p className="capitalize font-sora text-[10px] font-semibold text-white mt-1">
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
              <div className={"flex text-[#EDA044] text-[22px]"}>
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </div>
              <p className="capitalize font-sora text-[10px] font-semibold text-white mt-1">
                rated 4.8 . 1,000+ reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[60%] flex justify-end">
        <figure className="w-full">
          <Image src={woman} alt="woman" className="rounded-3xl w-full" />
        </figure>
      </div>
    </section>
  );
}
