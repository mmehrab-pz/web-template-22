"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../../public/images/logo.png";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const pathname = usePathname();

  const menuItems = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "pages", path: "/pages" },
    { name: "blog", path: "/blog" },
    { name: "contact", path: "/contact" },
    { name: "mehrab", path: "/mehrab" },
  ];
  return (
    <header className="w-full h-[90px] px-3 lg:px-[165px] flex justify-between relative">
      <span className="absolute -top-20 -left-3 h-[180px] flex w-[180px] rounded-full opacity-[0.6] blur-[114px] bg-[linear-gradient(93deg,#B324D7_7.07%,#FE577F_97.81%)]"></span>
      <figure className="w-1/2 xl:w-auto h-full flex items-center">
        <Image src={Logo} alt="asd" />
      </figure>
      <nav className="hidden xl:inline h-full">
        <ul className="h-full flex items-center">
          {menuItems.map((item) => {
            return (
              <li
                key={item.name}
                className={`className="text-[14px] capitalize duration-300 cursor-pointer font-sora font-medium ml-[45px] ${
                  pathname === item.path
                    ? "text-white"
                    : "text-[#a1aac9] hover:text-white"
                }`}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="hidden h-full md:flex items-center">
        <button className="py-1.5 px-[25px] text-[#a1aac9] font-sora font-medium capitalize border border-[#ffffff00] rounded-lg hover:text-[#FF6C1E] hover:border-[#FF6C1E] duration-300 cursor-pointer">
          login
        </button>
        <button className="py-1.5 px-[25px] text-[#a1aac9] font-sora font-medium capitalize border border-[#ffffff00] rounded-lg hover:text-[#FF6C1E] hover:border-[#FF6C1E] duration-300 cursor-pointer">
          sign up
        </button>
      </div>
      {/* ---------menu mobile--------- */}
      <div className="w-1/2 md:w-auto xl:hidden h-full flex items-center justify-end">
          <IoMenu className="text-[white] text-[28px] cursor-pointer" />
      </div>
    </header>
  );
}
