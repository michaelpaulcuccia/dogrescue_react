import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 175px;
  width: 100%;
  background-color: green;
`;

const Search = () => {
  const [gender, setGender] = useState("");
  const [showSelection, setShowSelection] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    //show selection
    setShowSelection(true);
  };

  return (
    <Container>
      <h3>Good Boy? Or, Good Girl?</h3>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setGender(e.target.value)}>
          <option disabled selected>
            Select your option
          </option>
          <option value="boy">Boy</option>
          <option value="girl">Girl</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {showSelection && <h2>You have chosen {gender}!</h2>}
    </Container>
  );
};

export default Search;
