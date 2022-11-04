import React from "react";
import Download from "../components/download/download";
import Faq from "../components/faq/Faq";
import Gain from "../components/gain/Gain";
import Header from "../components/header/header";
import Testimony from "../components/testimonials/Testimony";
import { WhyDzoma } from "../components/whyDzoma/WhyDzoma";

const Home = () => {
  return (
    <div>
      <Header />
      <Gain />
      <WhyDzoma />
      <Download />
      <Testimony />
      <Faq />
    </div>
  );
};

export default Home;
