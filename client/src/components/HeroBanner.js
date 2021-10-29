import React from 'react';
import styled from 'styled-components';
import Hero from '../images/pexels-helena-lopes-1904105.jpg';
import * as palette from '../constants/palette';

const Container = styled.div`
    height: 400px;
    width: 100%;
    margin-top: 10px;
    background-image: url(${Hero});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${palette.OFF_WHITE};
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 875px) {
        flex-direction: column;
    }
`;

const HeroText = styled.p`
    margin-left: 75px;
    font-size: 60px;
    font-weight: 900;
    font-family: sans-serif;
    color: ${palette.OFF_WHITE};
    text-shadow: 2px 2px rgb(0 0 0 / 10%);

    @media (max-width: 875px) {
        margin-left: 0px;
        padding-top: 5px;
        font-size: 30px;
    }

    .best_friend {
        margin-left: 55px;

        @media (max-width: 875px) {
            margin-left: 10px;
        }
    }

    .home {
        font-size: 65px;
        font-weight: 900;
        color: ${palette.BLUE};
        margin-left: 95px;

        @media (max-width: 875px) {
            margin-left: 20px;
            font-size: 35px;
        }
    }
`;

const HeroBanner = () => {
    return (
        <Container>
            <HeroText>
                Bring Your New <br/><span className='best_friend'>Best Friend</span> <br/><span className='home'>HOME</span>
            </HeroText>
        </Container>
    )
}

export default HeroBanner
