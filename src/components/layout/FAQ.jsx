"use client";
import React, { useState } from "react";
import MiniTitle from "./../ui/MiniTitle";
import TitleThree from "../ui/TitleThree";
import { FaAngleDown } from "react-icons/fa6";

export default function FAQ() {
  const Faqs = [
    {
      title: "What Is AIMug Generative AI Tool?",
      content:
        "Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience",
    },
    {
      title: "How Can I Make Generative AI Content for Next Project",
      content:
        "Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience",
    },
    {
      title: "Is there a limitation on how much content I can generate?",
      content:
        "Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience",
    },
    {
      title: "What Languages does it supports",
      content:
        "Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience",
    },
    {
      title: "What is SEO Writing AI and how do I use it?",
      content:
        "Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience",
    },
    {
      title: "Is it helpful for Digital Marketer or Content Writer?",
      content:
        "Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience",
    },
  ];

  const [openAcc, setOpenAcc] = useState(null);

  const open = (index) => {
    setOpenAcc(openAcc === index ? null : index);
  };

  return (
    <section className="w-full text-center pb-[120px]">
      <MiniTitle txt="Frequently Asked Questions" />
      <TitleThree title="Questions About our AIMug? ​We have Answers!" />
      <div className="w-full mt-[60px] text-start flex flex-col gap-5 items-center px-5">
        {Faqs.map((item, index) => {
          return (
            <div key={index} className="accordion">
              <div
                className={`accordion-title ${
                  openAcc === index ? "text-white" : ""
                }`}
                onClick={() => open(index)}
              >
                {item.title}
                <FaAngleDown
                  className={`text-[12px] duration-500 ${
                    openAcc === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`accordion-content w-full duration-500 text-[12px] lg:text-[16px] font-sora text-[#a1aac9] h-0 overflow-hidden px-[30px] ${
                  openAcc === index ? "h-[100px] pb-5" : ""
                }`}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
