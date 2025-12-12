// ----------------------Career page------------------
import React from "react";
import Header from '../../components/layout/Header'
import PageTitle from "@/components/layout/PageTitle";
import TrustedTeams from "@/components/layout/TrustedTeams";
import Create from "@/components/layout/Create";
import Footer from "@/components/layout/Footer";
import OpenPositions from "@/components/layout/career/OpenPositions";


export default function page() {
  return (
    <>
      <Header />
      <PageTitle 
        miniTitle='career'
        title="Unleash Your Potential: Explore Exciting Careers with Us"
        content='Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug"'
      />
      <Create />
      <TrustedTeams />
      <OpenPositions />
      <Footer />
    </>
  );
}
