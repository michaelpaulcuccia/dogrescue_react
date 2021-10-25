import React from "react";
import Header from "../components/Header";
//import Search from "../components/Search";
import SearchTwo from "../components/SearchTwo";

const Home = props => {
 
  return (
    <>
      <Header />
      {/* <Search dogs={props.dogs}/> */}
      <SearchTwo dogs={props.dogs}/>
    </>
  );
};

export default Home;
