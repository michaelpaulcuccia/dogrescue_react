import React from 'react';
import styled from 'styled-components';
import LearnMoreButton from './LearnMoreButton';
import * as palette from "../constants/palette";
import meatball from '../images/meatball.png'

const Container = styled.div`
    width: 80%;
    margin: 10px auto;
    padding: 15px 15px 0 15px;
    border: 3px solid ${palette.PURPLE};
`;

const ContentBox = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 875px) {
        flex-direction: column;
    }
`;

const TextContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    text-shadow: 2px 2px rgb(0 0 0 / 10%);
    //extra top padding to center text
    padding-top: 15px;
    //extra bottom padding to contain Learn More Button
    padding-bottom: 3px;

    @media (max-width: 875px) {
        width: 100%;
    }

    h2 {
        //https://css-tricks.com/snippets/css/fluid-typography/
        font-size: calc(18px + 6 * ((100vw - 320px) / 680));
        padding-bottom: 10px;
        span {
            color: ${palette.BLUE};
        }
    }

    p {
        //https://css-tricks.com/snippets/css/fluid-typography/
        font-size: calc(14px + 6 * ((100vw - 320px) / 680));
        //Margin for button
        padding-bottom: 15px;
    }
`;

const ImageContainer = styled.div`
    width: 40%;
    height: 100%;

    @media (max-width: 875px) {
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

const LearnMore2 = () => {
    return (
        <Container>
            <ContentBox>
                <ImageContainer>
                    <img src={meatball} alt='meatball' />
                </ImageContainer>
                <TextContainer>
                    <h2>Learn more about <span>adopting</span> and find helpful tips on raising a dog</h2>
                    <p>Bringing home a new dog is exciting, but there can be challenges! It's important to be equipped with the right mindset. We offer learning resources to help guide you through the process of adoption and adapting to a new life with your dog.</p>
                <LearnMoreButton page={'learn'} />
            </TextContainer>
            </ContentBox>
        </Container>
    )
}

export default LearnMore2
