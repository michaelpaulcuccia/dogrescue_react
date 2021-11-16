import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from "../constants/palette";

const Container = styled.div`
    width: 80%;
    margin: 10px auto;
    padding: 15px 0px;
    border: 10px solid ${palette.BLUE};
`;

const ContentBox = styled.div`
    display: flex;
    justify-content: center;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    width: 20%;
    height: 100%;
    font-size: 85px;
    color: ${palette.BLUE};
`;

const TextContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //justify-content: center;
    font-family: sans-serif;
    font-size: 26px;
    text-shadow: 2px 2px rgb(0 0 0 / 10%);

    h2 {
        span {
            color: ${palette.BLUE};
        }
    }

    p {
        font-size: 26px;
    }
`;

const ImageContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 220px;
        width: 220px;
        border-radius: 5px;
    }
`;

const Success2 = ({ dogs }) => {

    let successDog;
    
    dogs.forEach(dog => {
        if (dog.successDog === true) {
            successDog = dog;
        }
    })

    let history = useHistory();

    const handleLearnMore = () => {
        history.push('/successdog')
    }

    return (
        <>
            <Container>
                <ContentBox>
                  <IconContainer>
                    <i className="fas fa-paw"></i>
                  </IconContainer>
                  <TextContainer>
                  <h2>Every <span>Dog</span> <br/>Deserves Their Day</h2>
                    <p>Learn More About our Featured Dog, <br/> <span>{successDog.name}</span> And Their Success Story</p>
                    <button onClick={handleLearnMore} className='success_button'>Learn More</button>
                  </TextContainer>
                  <ImageContainer>
                    <img src={successDog.image._meta.url} alt={successDog.name} />
                  </ImageContainer>
                </ContentBox>
            </Container>
        </>
    )
}

export default Success2
