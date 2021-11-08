import React from 'react';
import styled from 'styled-components';
import * as palette from "../constants/palette";

const Container = styled.div`
    width: 70%;
    height: 275px;
    margin: 10px auto;
    border: 10px solid ${palette.BLUE};

    @media (max-width: 875px) {
        width: 350px;
        height: 550px;
    }
`;

const ContentBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    @media (max-width: 875px) {
        flex-direction: column;
    }
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
        @media (max-width: 875px) {
            margin: 15px;
        }
    }

    //in-between sizing
    @media (max-width: 1145px){
        font-size: 50px;
    }

    @media (max-width: 875px) {
        height: 60px;
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

    @media (max-width: 875px) {
        width: 100%;
        margin-left: 10px;
    }

    h2 {
        padding-top: 10px;
        span {
            color: ${palette.BLUE};
        }

        //in-between sizing
        @media (max-width: 1145px){
            font-size: 32px;
            padding-top: 20px;
        }
    }

    p {
        padding-top: 10px;
        font-size: 22px;

        span {
            font-weight: bold;
            color: ${palette.BLUE};
        }

        //in-between sizing
        @media (max-width: 1145px){
            font-size: 18px;
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

    @media (max-width: 875px) {
        width: 100%;
    }

    img {
        height: 220px;
        width: 220px;
        border-radius: 5px;

        @media (max-width: 875px) {
            margin-bottom: 20px;
        }
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
