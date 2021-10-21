import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  
  return (
    <Router>
      <Wrapper>
        <Route path='/' component={Home} exact />
      </Wrapper>
    </Router>
  
  )
}

export default App

