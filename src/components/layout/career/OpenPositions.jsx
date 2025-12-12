import MiniTitle from "@/components/ui/MiniTitle";
import TitleThree from "@/components/ui/TitleThree";
import React from "react";
import marvel from "@/../public/images/marvel.png";
import google from "@/../public/images/google.png";
import slack from "@/../public/images/slack.png";
import dribbble from "@/../public/images/dribbble.png";
import linear from "@/../public/images/linear.png";
import webflow from "@/../public/images/webflow.png";
import australia from "@/../public/images/australia.png";
import canada from "@/../public/images/canada.png";
import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";

export default function OpenPositions() {
  const jobs = [
    {
      id: 1,
      src: marvel,
      title: "MERN stack Developer",
      tech: "Marvel Theme",
      type: "global remote",
      locSrc: australia,
      loc: "australia",
    },
    {
      id: 2,
      src: google,
      title: "Lead Product Designer",
      tech: "Google Inc.",
      type: "full time",
      locSrc: canada,
      loc: "canada",
    },
    {
      id: 3,
      src: slack,
      title: "Senior Web Developer",
      tech: "slack",
      type: "global remote",
      locSrc: australia,
      loc: "australia",
    },
    {
      id: 4,
      src: dribbble,
      title: "Digital Marketer",
      tech: "dribbble",
      type: "global remote",
      locSrc: australia,
      loc: "australia",
    },
    {
      id: 5,
      src: webflow,
      title: "Senior Webflow Developer",
      tech: "Webflow",
      type: "global remote",
      locSrc: canada,
      loc: "canada",
    },
    {
      id: 6,
      src: linear,
      title: "Senior Front End Developer",
      tech: "Linear App",
      type: "global remote",
      locSrc: australia,
      loc: "australia",
    },
  ];

  return (
    <section className={`w-full xl:w-[1125px] mx-auto mb-[120px] text-center`}>
      <MiniTitle txt="open positions" />
      <h3 className="font-sora font-semibold text-[30px] lg:text-[40px] text-white capitalize">
        Open Positions! Lets Start Your Career
      </h3>
      <p className="font-sora text-[#a1aac9] mt-5">
        Mastering the Art of AI Tool: Unleashing the Power of Automated
        Creativity with AIMug"
      </p>
      <div className={`w-full mt-[60px] text-start px-5 flex flex-col gap-5`}>
        {jobs.map((job) => {
          return (
            <div
              key={job.id}
              className={`w-full min-h-[215px] p-5 md:p-[47px] border border-[#2E2F45] rounded-lg bg-[#101022] flex justify-between duration-300 flex-wrap gap-5 md:gap-0 hover:bg-[#15152E] hover:border-[#3C3C77]`}
            >
              <div className={`flex flex-wrap`}>
                <figure className="w-16 h-16 bg-[#262651] rounded-lg flex justify-center items-center mb-5 lg:mb-0">
                  <Image src={job.src} alt={job.tech} />
                </figure>
                <div className={`w-full md:w-auto md:ml-10`}>
                  <h4 className="font-sora font-medium capitalize text-white text-[24px]">
                    {job.title}
                  </h4>
                  <div className="flex gap-5 md:gap-10 mt-3">
                    <h6 className="text-[12px] md:text-[16px] text-white capitalize font-sora font-medium ">
                      {job.tech}
                    </h6>
                    <h6 className="text-[12px] md:text-[16px] text-[#a1aac9] capitalize font-sora font-medium ">
                      10-50 Employees
                    </h6>
                    <h6 className="text-[12px] md:text-[16px] text-[#a1aac9] capitalize font-sora font-medium ">
                      100k - 200 USD
                    </h6>
                  </div>
                  <div className="flex gap-5 mt-5">
                    <span
                      className={`rounded-sm border border-[#2E2F45] bg-[#15152E] py-1.5 px-[17px] text-[#A1AAC9] text-[14px] font-sora font-medium capitalize duration-500 hover:text-white hover:bg-[#426BFF]`}
                    >
                      {job.type}
                    </span>
                    <span
                      className={`rounded-sm border flex items-center gap-2 border-[#2E2F45] bg-[#15152E] py-1.5 px-[17px] text-[#A1AAC9] text-[14px] font-sora font-medium capitalize duration-500 hover:text-white hover:bg-[#426BFF]`}
                    >
                      <figure>
                        <Image src={job.locSrc} alt={job.loc} />
                      </figure>
                      {job.loc}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`w-full md:w-auto flex flex-col md:items-end`}>
                <button
                  className={`w-fit py-[11px] px-6 rounded-lg bg-[linear-gradient(211deg,#8F79FF_13.4%,#426BFF_118.74%)] text-white text-[14px] cursor-pointer capitalize font-sora font-semibold flex items-center`}
                >
                  apply job
                  <HiArrowSmallRight className="text-[20px] ml-2.5" />
                </button>
                <p className="capitalize font-sora text-[14px] text-[#a1aac9] mt-5">
                  30 minutes ago
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
