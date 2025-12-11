"use client";
import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Button3(props) {
  return (
    <Link
      href="/mehrab"
      className="mt-[30px] text-[14px] flex items-center cursor-pointer font-sora bg-[linear-gradient(211deg,#8F79FF_13.4%,#426BFF_118.74%)] rounded-lg text-white capitalize px-[30px] py-[15px] relative z-2"
    >
      {props.title}
    <GoArrowUpRight className="ml-2.5 mb-0.5 text-[20px]" />
    </Link>
  );
}