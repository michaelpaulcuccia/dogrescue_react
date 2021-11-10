import React from 'react';
import styled from 'styled-components';
import * as palette from "../constants/palette";
import meatball from '../images/meatball.png'

const Container = styled.div`
    height: 300px;
    width: 70%;
    margin: 10px auto;
    border: 3px solid ${palette.PURPLE};
    display: flex;
`;

const ImageContainer = styled.div`
    height: 100%;
    width: 40%;

    img {
        height: 100%;
        width: 100%;
    }
    
`;

const TextContainer = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;

    h2{
        font-family: sans-serif;
        font-size: 26px;
        text-shadow: 2px 2px rgb(0 0 0 / 10%);
        span{
            color: ${palette.BLUE};
        }
    }
`;

const LearnMore = () => {
    return (
        <Container>
            <ImageContainer>
                <img src={meatball} alt='meatball' />
            </ImageContainer>
            <TextContainer>
                <h2>Learn more about <span>adopting</span> and raising a dog</h2>
                <p>Bringing home a new dog is exciting, but there can be challenges. It's important to be equipped with the right tools and understanding. We offer learning resources and forums to guide you through the process of adoption and adapting to a new life with your dog.</p>
            </TextContainer>
        </Container>
    )
}

export default LearnMore
