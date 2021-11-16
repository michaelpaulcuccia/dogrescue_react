import React from 'react';
import styled from 'styled-components';
import LearnMoreButton from './LearnMoreButton';
import * as palette from "../constants/palette";

const Container = styled.div`
    width: 80%;
    margin: 15px auto;
    padding: 15px 0px;
    border: 10px solid ${palette.BLUE};
`;

const ContentBox = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 875px) {
        flex-direction: column;
        //align-content: center;
        //justify-content: center;
    }
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    width: 20%;
    height: 100%;
    font-size: 85px;
    color: ${palette.BLUE};

    @media (max-width: 875px) {
        display: none;
    }
`;

const TextContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: sans-serif;
    text-shadow: 2px 2px rgb(0 0 0 / 10%);

    @media (max-width: 875px) {
        width: 100%;
        padding-left: 20px;
    }

    h2 {
        //https://css-tricks.com/snippets/css/fluid-typography/
        font-size: calc(22px + 6 * ((100vw - 320px) / 680));
        padding-bottom: 10px;
        span {
            color: ${palette.BLUE};
        }
    }

    p {
        //https://css-tricks.com/snippets/css/fluid-typography/
        font-size: calc(16px + 6 * ((100vw - 320px) / 680));
        //Space for button
        padding-bottom: 15px;

        @media (max-width: 875px) {
            padding-bottom: 5px;
            padding-right: 10px;
        }

        span {
            color: ${palette.BLUE};
        }
    }
`;

const ImageContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 875px) {
        width: 100%;
        padding-top: 10px;
    }

    img {
        width: 60%;
        height: 60%;
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

    return (
        <>
            {
                dogs && successDog ?  
                <Container>
                <ContentBox>
                  <IconContainer>
                    <i className="fas fa-paw"></i>
                  </IconContainer>
                  <TextContainer>
                  <h2>Every <span>Dog</span> <br/>Deserves Their Day</h2>
                    <p>Learn More About our Featured Success Dog, <span>{successDog.name}</span> And Their Story</p>
                    <LearnMoreButton page={'successdog'} />
                  </TextContainer>
                  <ImageContainer>
                    <img src={successDog.image._meta.url} alt={successDog.name} />
                  </ImageContainer>
                </ContentBox>
            </Container>
            :
            <p>Loading</p>
            }
           
        </>
    )
}

export default Success2
