import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";

const Home = () => {
  const [dogs, setDogs] = useState([]);

  const fetchDoggies = async () => {
    const res = await fetch("/api/allDogs");
    const resjson = await res.json();
    console.log(resjson);
    setDogs(resjson);
  };

  useEffect(() => {
    fetchDoggies();
  }, []);

  return (
    <>
      <Header />
      <Search data={dogs} />
    </>
  );
};

export default Home;
