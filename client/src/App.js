import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home'

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
    setDogs(resjson);
  }

  useEffect(() => {
    fetchDoggies();
  }, []);
  
  return (
    <Router>
      <Wrapper>
        <Switch>
        <Route
              path='/'
              render={(props) => (
                <Home {...props} dogs={dogs} />
              )}
            />
        </Switch>
      </Wrapper>
    </Router>
  
  )
}

export default App

