import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from "../constants/palette";
import meatball from '../images/meatball.png'

const Container = styled.div`
    height: 300px;
    width: 70%;
    margin: 10px auto;
    border: 3px solid ${palette.PURPLE};
    display: flex;

    @media(max-width: 875px) {
        flex-direction: column;
        width: 90%;
        height: 275px;
        justify-content: center;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    height: 100%;
    width: 40%;

    @media(max-width: 875px) {
        display: none;
    }

    img {
        height: 100%;
        width: 100%;
    }
    
`;

const TextContainer = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    padding-right: 5px;
    flex-direction: column;
    font-family: sans-serif;
    text-shadow: 2px 2px rgb(0 0 0 / 10%);

    @media(max-width: 875px) {
        width: 100%;
        padding: 7.5px;
    }
   
    h2{
        font-size: 26px;
        padding-bottom: 10px;

        span{
            color: ${palette.BLUE};
        }

        @media (max-width: 875px){
            font-size: 20px;
        }
    }

    p {
        font-size: 20px;

        @media (max-width: 1000px){
            font-size: 18px;
        }

        @media (max-width: 875px){
            font-size: 16px;
        }
    }

    .learn_button {
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

const LearnMore = () => {

    let history = useHistory();

    const handleLearnMore = () => {
        history.push('/learn')
    }

    return (
        <Container>
            <ImageContainer>
                <img src={meatball} alt='meatball' />
            </ImageContainer>
            <TextContainer>
                <h2>Learn more about <span>adopting</span> and find helpful tips on raising a dog</h2>
                <p>Bringing home a new dog is exciting, but there can be challenges! It's important to be equipped with the right mindset. We offer learning resources to help guide you through the process of adoption and adapting to a new life with your dog.</p>
                <button onClick={handleLearnMore} className='learn_button'>Learn More</button>
            </TextContainer>
        </Container>
    )
}

export default LearnMore
