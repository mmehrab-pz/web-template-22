"use client";
import React from "react";
import Link from "next/link";

export default function Button2(props) {
  return (
    <Link
      href="/mehrab"
      className="mt-[30px] text-[16px] flex items-center cursor-pointer font-sora font-medium border border-[#3C3C77] bg-[linear-gradient(211deg,#8F79FF_13.4%,#426BFF_118.74%)] rounded-lg text-white capitalize px-10 py-[15px]"
    >
      {props.title}
    </Link>
  );
}
