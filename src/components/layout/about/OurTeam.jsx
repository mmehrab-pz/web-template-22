"use client";
import React from "react";
import profile1 from "@/../public/images/profile1.jpg";
import profile2 from "@/../public/images/profile2.jpg";
import profile3 from "@/../public/images/profile3.jpg";
import profile4 from "@/../public/images/profile4.jpg";
import profile5 from "@/../public/images/profile5.jpg";
import profile6 from "@/../public/images/profile6.jpg";
import profile7 from "@/../public/images/profile7.jpg";
import profile8 from "@/../public/images/profile8.jpg";
import Image from "next/image";
import { PiGithubLogoBold } from "react-icons/pi";
import { PiTwitterLogoBold } from "react-icons/pi";
import { TbBrandFacebook } from "react-icons/tb";

export default function OurTeam() {
  const team = [
    {
      src: profile1,
      name: "Brooklyn Simmons",
      role: "Digital Marketer",
    },
    {
      src: profile2,
      name: "Leslie Alexander",
      role: "Product Designer",
    },
    {
      src: profile3,
      name: "Ralph Edwards",
      role: "Marketing Coordinator",
    },
    {
      src: profile4,
      name: "Albert Flores",
      role: "Digital Creator",
    },
    {
      src: profile5,
      name: "Jane Cooper",
      role: "Web Designer",
    },
    {
      src: profile6,
      name: "Jacob Jones",
      role: "Software Engineer",
    },
    {
      src: profile7,
      name: "Courtney Henry",
      role: "Lead Developer",
    },
    {
      src: profile8,
      name: "Darrell Steward",
      role: "President of Sales",
    },
  ];
  return (
    <section className={`w-full mb-[120px]`}>
      <h3
        className={`w-full lg:w-[50%] mx-auto font-sora font-semibold text-[40px] text-white capitalize text-center`}
      >
        Meet Our Dynamic Team Member, Who Are Really Care About
      </h3>
      <div
        className={`w-full xl:w-[1240px] mx-auto mt-[60px] flex justify-center lg:gap-[60px] xl:gap-20 2xl:gap-[100px] flex-wrap`}
      >
        {team.map((user, index) => {
          return (
            <div
              key={index}
              className={`w-full md:w-1/2 lg:w-auto px-5 lg:px-0 mb-5 lg:mb-0`}
            >
              <figure className={`lg:w-[200px] lg:h-[200px] relative group`}>
                <Image
                  src={user.src}
                  alt={user.name}
                  width={200}
                  height={200}
                  className={`rounded-lg w-full`}
                />
                <span
                  className={`w-[95%] h-[95%] absolute rounded-lg flex justify-center items-center gap-5 bg-[#101022e6] text-[24px] text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500 opacity-0 group-hover:opacity-100`}
                >
                  <PiGithubLogoBold className="cursor-pointer" />
                  <PiTwitterLogoBold className="mb-5 cursor-pointer" />
                  <TbBrandFacebook className="cursor-pointer" />
                </span>
              </figure>
              <h5 className="font-sora capitalize text-center text-[20px] text-[white] duration-500 hover:text-[#ff6c1e] mt-5">
                {user.name}
              </h5>
              <h6 className="font-sora capitalize text-center text-[14px] text-[#a1aac9]">
                {user.role}
              </h6>
            </div>
          );
        })}
      </div>
    </section>
  );
}
