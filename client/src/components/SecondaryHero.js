import React from "react";
import styled from "styled-components";
import * as palette from "../constants/palette";
import groupPic from "../images/group-pic.png";

const Container = styled.div`
  height: 350px;
  width: 80%;
  margin: 5px auto;
  background-image: url(${groupPic});
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  position: relative;
`;

const Text = styled.div`
  h2 {
    font-family: "Gochi Hand", cursive;
    color: ${palette.PURPLE};
    font-size: 46px;
    position: absolute;
    top: 160px;
    left: 400px;

    @media (max-width: 875px) {
      display: none;
    }
  }

  h3 {
    display: none;

    @media (max-width: 875px) {
      display: block;
      font-family: "Gochi Hand", cursive;
      color: ${palette.PURPLE};
      font-size: 22px;
      text-align: center;
    }
  }
`;

const SecondaryHero = () => {
  return (
    <Container>
      <Text>
        <h2>Help Us Find Our Forever Family</h2>
        <h3>Help Us Find Our Forever Family</h3>
      </Text>
    </Container>
  );
};

export default SecondaryHero;
