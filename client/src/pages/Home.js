import React from "react";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import Success from '../components/Success'
import LearnMore from "../components/LearnMore";

const Home = ({dogs}) => {

  return (
    <>
      <HeroBanner />
      <Success dogs={dogs} />
      <Search dogs={dogs} />
      <LearnMore />
    </>
  );
};

export default Home;
