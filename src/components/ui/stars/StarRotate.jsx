import Image from "next/image";
import React from "react";
import star from "@/../public/images/star.png";
import "./starStyle.css"

export default function StarRotate() {
  return <Image src={star} alt="star" style={{animation: 'StarRotate 3s ease-in-out infinite'}} />;
}
