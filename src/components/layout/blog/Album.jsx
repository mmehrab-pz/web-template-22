import React from "react";
import blog1 from "@/../public/images/blog1.jpg";
import blog2 from "@/../public/images/blog2.jpg";
import blog3 from "@/../public/images/blog3.jpg";
import blog4 from "@/../public/images/blog4.jpg";
import blog5 from "@/../public/images/blog5.jpg";
import blog6 from "@/../public/images/blog6.jpg";
import blog7 from "@/../public/images/blog7.jpg";
import blog8 from "@/../public/images/blog8.jpg";
import blog9 from "@/../public/images/blog9.jpg";
import Image from "next/image";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

export default function Album() {
  const blogs = [
    {
      id: 1,
      src: blog1,
    },
    {
      id: 2,
      src: blog2,
    },
    {
      id: 3,
      src: blog3,
    },
    {
      id: 4,
      src: blog4,
    },
    {
      id: 5,
      src: blog5,
    },
    {
      id: 6,
      src: blog6,
    },
    {
      id: 7,
      src: blog7,
    },
    {
      id: 8,
      src: blog8,
    },
    {
      id: 9,
      src: blog9,
    },
  ];

  return (
    <section
      className={`w-ful px-5 xl:w-[1300px] 2xl:w-[1350px] 2xl:px-0 mx-auto mb-[120px] flex flex-wrap`}
    >
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className={`w-full md:w-1/2 lg:w-1/3 px-3 mb-10`}>
            <figure>
              <Image src={blog.src} alt="blog" className="w-full" />
            </figure>
            <h3
              className={`font-sora font-medium text-[24px] leading-[34px] text-[#A1AAC9] mt-4`}
            >
              Best free AI content generator & AI writers for 2023
            </h3>
            <div className={`flex gap-5 mt-5`}>
              <span
                className={`flex items-center font-sora text-[14px] text-[#7781a6] capitalize gap-2.5`}
              >
                <IoCalendarClearOutline className="text-[20px]" />
                28 Jul 2025
              </span>
              <span
                className={`flex items-center font-sora text-[14px] text-[#7781a6] capitalize gap-2.5`}
              >
                <LuClock3 className="text-[20px]" />4 Minute Read
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
