import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import SecondaryHero from "../components/SecondaryHero";

const Home = (props) => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Search dogs={props.dogs} />
      <SecondaryHero />
    </>
  );
};

export default Home;
