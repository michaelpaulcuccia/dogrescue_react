import React from "react";
import styled from "styled-components";
import * as palette from "../constants/palette";

const Container = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 3px;
  display: flex;
  background-color: ${palette.BLUE};

  @media (max-width: 875px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LogoAndIcon = styled.div`
  height: 100%;
  width: 30%;
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
    left: calc(100% - 61%);

    @media (max-width: 875px) {
      display: none;
    }

    @media (max-width: 1275px) {
      left: calc(100% - 65%);
    }
  }
`;

const MidSection = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EyebrowContainer = styled.div`
  color: ${palette.OFF_WHITE};
  font-size: 17px;
  text-align: center;
  font-family: "Gochi Hand", cursive;
  padding-top: 5px;
  height: 50%;
  width: 100%;
  position: relative;

  @media (max-width: 875px) {
    font-size: 14px;
  }
`;

const TabContainer = styled.div`
  height: 50%;
  width: 100%;
`;

const RightContainer = styled.div`
  height: 100%;
  width: 30%;
`;

const Header = () => {
  return (
    <Container>
      <LogoAndIcon>
        <h2>Dog Rescue</h2>
        <i className="fas fa-paw"></i>
      </LogoAndIcon>
      <MidSection>
        <EyebrowContainer>
          “A dog is the only thing on earth that loves you more than he loves
          himself.”
        </EyebrowContainer>
        <TabContainer></TabContainer>
      </MidSection>
      <RightContainer></RightContainer>
    </Container>
  );
};

export default Header;
