// -------------------------------about page----------------------
import React from "react";
import Header from '../../components/layout/Header'
import Footer from "@/components/layout/Footer";
import TrustedTeams from "@/components/layout/TrustedTeams";
import CustomerStories from "@/components/layout/CustomerStories";
import FAQ from "@/components/layout/FAQ";
import PageTitle from "@/components/layout/PageTitle";
import Video from "@/components/layout/Video";
import Create from "@/components/layout/Create";
import OurTeam from "@/components/layout/about/OurTeam";


export default function page() {
  return (
    <>
      <Header />
      <PageTitle
      miniTitle='About AIMug'
      title='A Magical Tool For Seamless Collaboration'
      content='Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug"'
      />
      <Create />
      <TrustedTeams />
      <Video />
      <OurTeam />
      <CustomerStories />
      <FAQ />
      <Footer />
    </>
  );
}
