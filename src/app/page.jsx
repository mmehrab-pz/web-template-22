import React from "react";
import Header from "../components/layout/Header";
import HomeHeaderContent from "@/components/layout/HomeHeaderContent";
import AiPlatform from "@/components/layout/AiPlatform";
import AiSulotions from "@/components/layout/AiSulotions";
import TrustedTeams from "@/components/layout/TrustedTeams";
import Streamlining from "@/components/layout/Streamlining";

export default function page() {
  return (
    <>
      <Header />
      <HomeHeaderContent />
      <AiPlatform />
      <AiSulotions />
      <TrustedTeams />
      <Streamlining />
    </>
  );
}
