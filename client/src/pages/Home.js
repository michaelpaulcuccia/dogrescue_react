import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import Success from "../components/Success";

const Home = (props) => {

  return (
    <>
      <Header />
      <HeroBanner />
      <Search dogs={props.dogs} />
      <Success dogs={props.dogs}/>
    </>
  );
};

export default Home;
