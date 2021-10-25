import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as palette from '../constants/palette';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
    padding-bottom: 10px;
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
    padding-top: 10px;
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
    padding-bottom: 10px;
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
    padding-top: 10px;
    color: ${palette.PURPLE};
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;

  h2, p {
    font-family: "Gochi Hand", cursive;
    font-size: 28px;
    color: ${palette.PURPLE};
  }
`;

const Search = props => {

  const [dogs, setDogs] = useState([]);
  const [gender, setGender] = useState("");
  const [showGenderSelection, setShowGenderSelection] = useState(false);
  const [showGenderForm, setShowGenderForm] = useState(true);
  const [showSelectBreed, setShowSelectBreed] = useState(false)
  const [breed, setBreed] = useState("");
  const [showBreedForm, setShowBreedForm] = useState(true);
  const [showBreedChoice, setShowBreedChoice] = useState(false);
  const [numberOfGenderInBreed, setNumberOfGenderInBreed] = useState('');

  useEffect(()=> {
    setDogs(props.dogs);
  },[props]);

  let boyDogs = dogs.filter(dog => dog.sex === 'male');
  let girlDogs = dogs.filter(dog => dog.sex === 'female');

  const handleGenderSubmit = (event) => {
    event.preventDefault();
    setShowGenderSelection(true);
    setShowGenderForm(false);
    setShowSelectBreed(true);
  };

  const handleBreedSubmit = (event) => {
    event.preventDefault();
    setShowBreedForm(false);
    setShowBreedChoice(true);
    genderAndBreed();
  }

  const genderAndBreed = () => {
    //filter all dogs in by breed
    let rightBreed = dogs.filter(dog => dog.breed === breed);
    console.log(rightBreed);
    //filter breed by gender
    let genderAndBreed = rightBreed.filter(dog => dog.sex === gender);
    console.log(genderAndBreed);

    if (genderAndBreed.length >= 1) {
      setNumberOfGenderInBreed(genderAndBreed.length);
    } else {
      setNumberOfGenderInBreed('nada');
    }

  }

  return (
    <Container>

      <QuestionContainer>
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
                <option value="male">Boy</option>
                <option value="female">Girl</option>
              </select>
              <button type="submit">Submit</button>
            </form>
            </>
          }
        </GenderContainer>

        {
          showSelectBreed &&
          <BreedContainer>
          {
            showBreedForm &&
            <>
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
            </>
          }
        
          </BreedContainer>
        }
      </QuestionContainer>

      <ResultsContainer>
        {showGenderSelection && <h2>You have chosen a {gender}!</h2>}
        {gender !== "" && gender === 'male' && showGenderSelection ? <p>There are {boyDogs.length} boys</p> : 
        gender !== "" && gender === 'female' && showGenderSelection ? <p>There are {girlDogs.length} girls</p>  : 
        "" }
        {showBreedChoice && <h2>You have chosen {breed}!</h2>}
        {numberOfGenderInBreed && numberOfGenderInBreed !== "nada" ? <p>There are {numberOfGenderInBreed} {gender} {breed}s</p> :
        numberOfGenderInBreed && numberOfGenderInBreed === "nada" ? <p>There are no {gender} {breed}s</p> :
        ""}
      </ResultsContainer>

    </Container>

  );
};

export default Search;
