"use client";
import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default function Button1(props) {
  return (
    <Link
      href="/mehrab"
      className="mt-[30px] text-[14px] flex items-center cursor-pointer font-sora bg-[linear-gradient(211deg,#8F79FF_13.4%,#426BFF_118.74%)] rounded-lg text-white capitalize px-[30px] py-[13px]"
    >
      <FaPlus className="mr-2.5 mb-0.5" />
      {props.title}
    </Link>
  );
}
