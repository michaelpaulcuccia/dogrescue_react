import React from 'react';
import styled from "styled-components";
import * as palette from "../constants/palette";

const Container = styled.div`
  width: 100%;
  height: 175px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${palette.BLUE};
  color: ${palette.OFF_WHITE};

  @media (max-width: 875px) {
    height: 125px;
  }

  p {
      font-size: 12px;
      font-weight: 600;
      word-spacing: 3px;
      padding-bottom: 10px;
    }

`;

const LogoAndIcon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 875px) {
    width: 100%;
  }

  h2 {
    color: ${palette.PURPLE};
    font-size: 45px;
    font-family: "Gochi Hand", cursive;
    z-index: 1;
  }

  i {
    font-size: 100px;
    color: ${palette.WHITE};
    z-index: 0;
    position: absolute;
    top: 30px;
    left: auto;

    @media (max-width: 875px) {
      display: none;
    }

  }
`;

const Footer = () => {
    return (
        <Container>
            <LogoAndIcon>
                <h2>Dog Rescue</h2>
                <i className="fas fa-paw"></i>
            </LogoAndIcon>
            <p>2021 &copy; Dog Rescue</p>
        </Container>
    )
}

export default Footer
