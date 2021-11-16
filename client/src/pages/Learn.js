import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 10px;
    margin: 10px auto;
   
   p {
    font-family: sans-serif;
    font-size: 18px;
    padding-bottom: 8px;
   }
`;

const Learn = () => {
    return (
        <Container>
            <h2>COMING SOON!</h2>
            <p>We look forward to providing articles, videos, and links to helpful information. Stay tuned!</p>
        </Container>
    )
}

export default Learn
