// --------------mehrab page---------------
import React from "react";
import Header from '../../components/layout/Header'
import FAQ from "@/components/layout/FAQ";
import Footer from "@/components/layout/Footer";
import PageTitle from "@/components/layout/PageTitle";
import Mehrab from './../../components/layout/mehrab/Mehrab';


export default function page() {
  return (
    <>
      <Header />
      <PageTitle 
        miniTitle="mehrab pourzakaria"
        title = 'About Me — Beyond the Code'
      />
      <Mehrab />
      <FAQ />
      <Footer />
    </>
  );
}
