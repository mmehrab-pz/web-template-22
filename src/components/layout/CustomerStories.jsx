import React from "react";
import MiniTitle from "./../ui/MiniTitle";
import TitleTwo from "../ui/TitleTwo";
import CardModelOne from "../ui/CardModelOne";
import person1 from "@/../public/images/person1.jpg";
import person2 from "@/../public/images/person2.jpg";
import person3 from "@/../public/images/person3.jpg";
import person4 from "@/../public/images/person4.jpg";
import person5 from "@/../public/images/person5.jpg";
import person6 from "@/../public/images/person6.jpg";
import person7 from "@/../public/images/person7.jpg";
import person8 from "@/../public/images/person8.jpg";
import person9 from "@/../public/images/person9.jpg";
import person10 from "@/../public/images/person10.jpg";
import person11 from "@/../public/images/person11.jpg";
import miniTeam1 from "@/../public/images/miniTeam1.png";
import miniTeam2 from "@/../public/images/miniTeam2.png";
import miniTeam3 from "@/../public/images/miniTeam3.png";
import miniTeam4 from "@/../public/images/miniTeam4.png";
import miniTeam5 from "@/../public/images/miniTeam5.png";
import miniTeam6 from "@/../public/images/miniTeam6.png";
import miniTeam7 from "@/../public/images/miniTeam7.png";
import miniTeam8 from "@/../public/images/miniTeam8.png";
import miniTeam9 from "@/../public/images/miniTeam9.png";
import miniTeam10 from "@/../public/images/miniTeam10.png";
import miniTeam11 from "@/../public/images/miniTeam11.png";
import miniTeam12 from "@/../public/images/miniTeam12.png";
import Button2 from "../ui/Button2";

export default function CustomerStories() {
  return (
    <section className="w-full text-center">
      <MiniTitle txt="cistomer stories" />
      <TitleTwo
        highlight="AIMug."
        last=" Received ⭐ 4.8/5 Stars in Over 10,000+ Reviews."
      />
      <div className="w-full xl:px-[30px] mt-[60px] flex justify-center flex-wrap relative">
        <span className="w-full h-[315px] absolute bottom-0 left-0 bg-[linear-gradient(180deg,rgba(16,16,34,0.00)0%,rgba(16,16,34,0.76)13.28%,#101022_53.79%,#101022_79.45%)] flex justify-center items-center">
          <Button2 title="show more" />
        </span>
        {/* -------------1-------------- */}
        <div className="w-full lg:w-1/2 xl:w-1/4 2xl:w-fit flex flex-col gap-5 px-2.5 mb-5">
          <CardModelOne
            txt="This is the best thing that has happened to my team in a while! Makes post text something"
            title="Great tool for content writing, Love it!"
            src={person1}
            name="Dianne Russell"
            logo={miniTeam12}
          />
          <CardModelOne
            txt="Awesome Template as well as great customer support within few minutes. Recommended. Best Complete AI Tools ever I have used. Great Design and High Quality Code."
            title="Support! Just Awesome"
            src={person4}
            name="Albert Flores"
            logo={miniTeam4}
          />
          <CardModelOne
            txt="Best Complete AI Tools ever I have used. Thanks marveltheme for this type of awesome tools."
            title="Most Waited Product for my next boom project"
            src={person8}
            name="Darlene Robertson"
            logo={miniTeam6}
          />
        </div>
        {/* --------------2------------- */}
        <div className="w-full lg:w-1/2 xl:w-1/4 2xl:w-fit flex flex-col gap-5 px-2.5 mb-5">
          <CardModelOne
            txt="Best Complete AI Tools ever I have used. Thanks marveltheme for this type of awesome tools."
            title="Awesome Tools! Thanks MarvelTheme"
            src={person7}
            name="Jane Cooper"
            logo={miniTeam1}
          />
          <CardModelOne
            txt="Awesome Template as well as great customer support within few minutes. Recommended. Best Complete AI Tools ever I have used. Thanks marveltheme for this type of awesome tools."
            title="Great Design and High Quality Code"
            src={person5}
            name="Courtney Henry"
            logo={miniTeam5}
          />
          <CardModelOne
            txt="Awesome Template as well as great customer support within few minutes. Recommended."
            title="awesome tools! thanks mehrab"
            src={person9}
            name="Jacob Jones"
            logo={miniTeam2}
          />
        </div>
        {/* -------------3-------------- */}
        <div className="w-full lg:w-1/2 xl:w-1/4 2xl:w-fit flex flex-col gap-5 px-2.5 mb-5">
          <CardModelOne
            txt="This is best! Great experiences Complete AI Tools ever I have used. Thanks marveltheme for this type of awesome tools. Highly Recommended"
            title="Best User Experience! Fallen In Love On It!"
            src={person2}
            name="Arlene McCoy"
            logo={miniTeam9}
          />
          <CardModelOne
            txt="Great Design and High Quality Code. This is best Complete template AI Tools ever I have used. Thanks marveltheme!"
            title="Really High Quality Code"
            src={person6}
            name="Marvin McKinney"
            logo={miniTeam8}
          />
          <CardModelOne
            txt="This is best! Great experiences Complete AI Tools ever I have used, code quality is also to notch."
            title="Best User Experience! Fallen In Love On It!"
            src={person10}
            name="Jerome Bell"
            logo={miniTeam3}
          />
        </div>
        {/* -------------4-------------- */}
        <div className="w-full lg:w-1/2 xl:w-1/4 2xl:w-fit flex flex-col gap-5 px-2.5 mb-5">
          <CardModelOne
            txt="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim."
            title="Great tools Love it, Specially for Content Writing"
            src={person3}
            name="Cameron Williamson"
            logo={miniTeam11}
          />
          <CardModelOne
            txt="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim."
            title="Great tools Love it, Specially for Content Writing"
            src={person7}
            name="Courtney Henry"
            logo={miniTeam7}
          />
          <CardModelOne
            txt="This is the best thing that has happened to my team in a while! Makes post text something dolore cillum minim."
            title="Great tools Love it"
            src={person11}
            name="Eleanor Pena"
            logo={miniTeam10}
          />
        </div>
      </div>
    </section>
  );
}
