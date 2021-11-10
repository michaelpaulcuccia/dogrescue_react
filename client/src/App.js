import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllDogs from './pages/AllDogs';
import About from './pages/About';
import SuccessDog from './pages/SuccessDog';
import Learn from './pages/Learn';

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
        <Header/>
        <Switch>
        <Route
              exact
              path='/'
              render={(props) => (
                <Home {...props} dogs={dogs} />
              )}
        />
        <Route
              exact
              path='/alldogs'
              render={(props) => (
                <AllDogs {...props} dogs={dogs} />
              )}
        />        
        <Route
              exact
              path='/about'
              render={(props) => (
                <About {...props} dogs={dogs} />
              )}
        />        
        <Route
              exact
              path='/successdog'
              render={(props) => (
                <SuccessDog {...props} dogs={dogs} />
              )}
        />        
        <Route
              exact
              path='/learn'
              render={(props) => (
                <Learn {...props} dogs={dogs} />
              )}
        />        
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  
  )
}

export default App

