import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";

const Home = props => {
 
  return (
    <>
      <Header />
      <HeroBanner />
      <Search dogs={props.dogs}/>
    </>
  );
};

export default Home;
