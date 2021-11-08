import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import Success from "../components/Success";
import Footer from "../components/Footer";

const Home = (props) => {

  return (
    <>
      <Header />
      <HeroBanner />
      <Search dogs={props.dogs} />
      <Success dogs={props.dogs}/>
      <Footer />
    </>
  );
};

export default Home;
