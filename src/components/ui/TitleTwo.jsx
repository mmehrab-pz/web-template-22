"use client";
import React from "react";

export default function TitleTwo({ first, highlight, last }) {
  return (
    <h2 className="font-sora font-medium text-[30px] md:text-[40px] text-[white] capitalize text-center mx-auto lg:w-[60%] xl:w-[40%]">
      {first}
      &nbsp;<span className="text-[#ff6c1e] capitalize">{highlight}</span>&nbsp;
      {last}
    </h2>
  );
}
