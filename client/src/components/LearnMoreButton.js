import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from "../constants/palette";

const Button = styled.button`
    height: 30px;
    width: 85px;
    font-size: 12px;
    padding: 3px;
    border-radius: 5px;
    background-color: ${palette.PURPLE};
    color: ${palette.OFF_WHITE};
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
