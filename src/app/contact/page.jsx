// ----------------------contact page------------------
import React from "react";
import Header from '../../components/layout/Header'
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/layout/FAQ";
import PageTitle from "@/components/layout/PageTitle";
import Contact from "@/components/layout/contact/Contact";
import Map from "@/components/layout/contact/Map";


export default function page() {
  return (
    <>
      <Header />
      <PageTitle 
      miniTitle='Contact Us'
      title='Our Dynamic Team are Waiting for Reach you'
      content='Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug"'
      />
      <Contact />
      <Map />
      <FAQ />
      <Footer />
    </>
  );
}
