import React from 'react';
import styled from 'styled-components';
import * as palette from "../constants/palette";

const Container = styled.div`
    width: 70%;
    height: 275px;
    margin: 10px auto;
    border: 10px solid ${palette.BLUE};
`;

const ContentBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

const IconContainer = styled.div`
    height: 100%;
    width: 15%;
    display: flex;
    justify-content: flex-start;
    font-size: 65px;
    color: ${palette.BLUE};

    i {
        margin: 25px;
    }
`;

const TextContainer = styled.div`
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 26px;
    text-shadow: 2px 2px rgb(0 0 0 / 10%);

    h2 {
        padding-top: 10px;
        span {
            color: ${palette.BLUE};
        }
    }

    p {
        padding-top: 10px;
        font-size: 22px;

        span {
            font-weight: bold;
            color: ${palette.BLUE};
        }
    }

    .success_button {
        margin-top: 15px;
        height: 30px;
        width: 85px;
        font-size: 12px;
        padding: 3px;
        border-radius: 5px;
        background-color: ${palette.PURPLE};
        color: ${palette.OFF_WHITE};
    }
 
`;

const ImageContainer = styled.div`
    height: 100%;
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


const Success = props => {

    let successDog;
    let dogs = props.dogs;

    dogs.forEach(dog => {
        if (dog.successDog === true) {
            successDog = dog;
        }
    })

    return (
        <>
        {
            successDog !== undefined ?
            <Container>
            <ContentBox>
                <IconContainer>
                    <i className="fas fa-paw"></i>
                </IconContainer>
                <TextContainer>
                    <h2>Every <span>Dog</span> <br/>Deserves Their Day</h2>
                    <p>Learn More About our Feature Dog, <br/> <span>{successDog.name}</span> And Their Success Story</p>
                    <button className='success_button'>Learn More</button>
                </TextContainer>
                <ImageContainer>
                    <img src={successDog.image._meta.url} alt={successDog.name} />
                </ImageContainer>
            </ContentBox>
        </Container>
        :
        <h2>Loading...</h2>
        }
        </>
    )
}

export default Success
