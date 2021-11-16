import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from "../constants/palette";

const Button = styled.button`
    height: 40px;
    width: 95px;
    font-size: 12px;
    padding: 3px;
    border-radius: 5px;
    background-color: ${palette.PURPLE};
    color: ${palette.OFF_WHITE};

    @media (max-width: 875px) {
        height: 30px;
        width: 75px;
        font-size: 11px;
    }
`;

const LearnMoreButton = ({ page }) => {

    let history = useHistory();

    const handleLearnMore = () => {
        history.push(`/${page}`)
    }
    return (
        <Button onClick={handleLearnMore}>
            Learn More
        </Button>
    )
}

export default LearnMoreButton
