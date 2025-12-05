import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png"

export default function Header() {
  return (
    <header className="w-full h-[90px] bt px-[165px] flex justify-between">
      <figure className="h-full bt flex items-center">
        <Image src={Logo} alt="asd" />
      </figure>
      <nav className="h-full bt">
        <ul className="h-full flex items-center gap-2.5 ">
            <li className="text-[14px] capitalize text-white font-sora font-medium">home</li>
            <li className="text-[14px] capitalize text-white font-sora">about</li>
            <li className="text-[14px] capitalize text-white font-sora">pages</li>
            <li className="text-[14px] capitalize text-white font-sora">blog</li>
            <li className="text-[14px] capitalize text-white font-sora">contact</li>
            <li className="text-[14px] capitalize text-white font-sora">mehrab</li>
        </ul>
      </nav>
    </header>
  );
}
