import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";

const Home = props => {
 
  return (
    <>
      <Header />
      <Search dogs={props.dogs}/>
    </>
  );
};

export default Home;
