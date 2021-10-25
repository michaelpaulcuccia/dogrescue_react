import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as palette from '../constants/palette';

const Container = styled.div`
  height: 175px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const GenderContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;

  h3 {
    font-family: "Gochi Hand", cursive;
    font-size: 28px;
    color: ${palette.PURPLE};
  }

  select {
    border-radius: 5px;
    padding: 3px;
    margin-right: 2.5px;
  }

  button {
    border-radius: 5px;
    padding: 3px;
    background-color: ${palette.PURPLE};
    color: ${palette.WHITE};
    margin-left: 2.5px;
  }

  h2 {
    font-family: "Gochi Hand", cursive;
    font-size: 28px;
    color: ${palette.PURPLE};
  }
`;

const BreedContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 15px;

  h3 {
    font-family: "Gochi Hand", cursive;
    font-size: 28px;
    color: ${palette.PURPLE};
  }

  select {
    border-radius: 5px;
    padding: 3px;
    margin-right: 2.5px;
  }

  button {
    border-radius: 5px;
    padding: 3px;
    background-color: ${palette.PURPLE};
    color: ${palette.WHITE};
    margin-left: 2.5px;
  }

  h2 {
    font-family: "Gochi Hand", cursive;
    font-size: 28px;
    color: ${palette.PURPLE};
  }
`;

const Search = props => {

  const [dogs, setDogs] = useState([])
  const [gender, setGender] = useState("");
  const [showGenderSelection, setShowGenderSelection] = useState(false);
  const [showGenderForm, setShowGenderForm] = useState(true);
  const [showSelectBreed, setShowSelectBreed] = useState(false)
  const [breed, setBreed] = useState("");
  const [showBreedChoice, setShowBreedChoice] = useState(false)

  useEffect(()=> {
    setDogs(props.dogs);
  },[props]);
  
  const handleGenderSubmit = (event) => {
    event.preventDefault();
    setShowGenderSelection(true);
    setShowGenderForm(false);
    setShowSelectBreed(true);
  };

  const handleBreedSubmit = (event) => {
    event.preventDefault();
    setShowBreedChoice(true);
  }

  return (
    <Container>

      <GenderContainer>
        {
          showGenderForm &&
          <>
          <h3>Good Boy? Or, Good Girl?</h3>
          <form onSubmit={handleGenderSubmit}>
            <select onChange={(e) => setGender(e.target.value)}>
              <option disabled selected>
                Select your option
              </option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>
            <button type="submit">Submit</button>
          </form>
          </>
        }
      {showGenderSelection && <h2>You have chosen a {gender}!</h2>}
      </GenderContainer>

      {
        showSelectBreed &&
        <BreedContainer>
         <h3>Choose a Breed</h3>
        <form onSubmit={handleBreedSubmit}>
          <select onChange={(e) => setBreed(e.target.value)}>
            <option disabled selected>
              Select a Breed
            </option>
            {dogs.map((item, i)=> (
              <option key={i} value={item.breed}>{item.breed}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
        {showBreedChoice && <h2>You have chosen {breed}!</h2>}
        </BreedContainer>
      }

    </Container>

  );
};

export default Search;
