import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {

  const [dogs, setDogs] = useState([]);

  const fetchDoggies = async () => {
    const res = await fetch('/api/allDogs');
    const resjson = await res.json();
    console.log(resjson)
    setDogs(resjson)
  }

  useEffect(() => {
    fetchDoggies();
  }, [])

  
  return (
    <Wrapper>
      <Header />
      Hello World
      {/* {dogs.map(d => (
        <>
        <p key={d._id}>{d.name}</p>
        <img src={d.image._meta.url} alt={d.name} />
        </>
      ))} */}
    </Wrapper>
  )
}

export default App

