import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 150px;
    display: flex;

    background-color: red;
`;

const LogoAndIcon = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: yellow;
`;

const Header = () => {
    return (
        <Container>
            <LogoAndIcon>
            <i class="fas fa-paw fa-3x"></i>
            </LogoAndIcon>
        </Container>
    )
}

export default Header
