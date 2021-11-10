import React from "react";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import Success from "../components/Success";
import LearnMore from "../components/LearnMore";

const Home = (props) => {

  return (
    <>
      <HeroBanner />
      <Success dogs={props.dogs}/>
      <Search dogs={props.dogs} />
      <LearnMore />
    </>
  );
};

export default Home;
