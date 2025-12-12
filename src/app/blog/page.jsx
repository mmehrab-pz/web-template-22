// ----------------------blog page------------------
import React from "react";
import Header from '../../components/layout/Header'
import FAQ from "@/components/layout/FAQ";
import Footer from "@/components/layout/Footer";
import PageTitle from "@/components/layout/PageTitle";
import Album from "@/components/layout/blog/Album";


export default function page() {
  return (
    <>
      <Header />
      <PageTitle 
        miniTitle='Blog Post'
        title="Check Out our Articles it may help to start your AI Journey"
        content='Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug"'
      />
      <Album />
      <FAQ />
      <Footer />
    </>
  );
}
