import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
`;

const BreedContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Search = props => {

  const [dogs, setDogs] = useState([])
  const [gender, setGender] = useState("");
  const [showGenderSelection, setShowGenderSelection] = useState(false);
  const [showSelectBreed, setShowSelectBreed] = useState(false)
  const [breed, setBreed] = useState("");
  const [showBreedChoice, setShowBreedChoice] = useState(false)

  useEffect(()=> {
    setDogs(props.dogs);
  },[props]);
  
  const handleGenderSubmit = (event) => {
    event.preventDefault();
    setShowGenderSelection(true);
    setShowSelectBreed(true);
  };

  const handleBreedSubmit = (event) => {
    event.preventDefault();
    setShowBreedChoice(true);
  }

  return (
    <Container>
      <GenderContainer>
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
      {showGenderSelection && <h2>You have chosen {gender}!</h2>}
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
