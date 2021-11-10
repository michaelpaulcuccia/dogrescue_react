import React from "react";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import Success from "../components/Success";

const Home = (props) => {

  return (
    <>
      <HeroBanner />
      <Search dogs={props.dogs} />
      <Success dogs={props.dogs}/>
    </>
  );
};

export default Home;
