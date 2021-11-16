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

const About = () => {
    return (
        <Container>
            <p>Dog Rescue was founded  to care for homeless, neglected and abused dogs We are not affiliated with any other shelter or welfare organization. We are not affiliated with, nor do we receive our funding from the Humane Society of the United States, the ASPCA,  or the Associated Humane Societies, Inc.</p>
            <p>Our Mission is to protect, care and advocate for dogs in need. We are dedicated to enforcing animal cruelty laws; providing a safe haven for homeless, abused and abandoned dogs while they await adoption; reducing over-population through spay/neutering; and cultivating their humane treatment through education and advocacy services as a valuable community resource.</p>
        </Container>
    )
}

export default About
