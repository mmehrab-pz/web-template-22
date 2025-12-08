import Image from "next/image";
import React from "react";
import star from "@/../public/images/star.png";
import "./starStyle.css"

export default function StarLtr() {
  return <Image src={star} alt="star" style={{animation: 'StarLtr 2s linear infinite'}} />;
}
