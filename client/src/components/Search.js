import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 175px;
  width: 100%;
  background-color: green;
`;

const Search = () => {
  const [field, setField] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(field);
  };

  return (
    <Container>
      <h3>What type of dog are you interested in adopting?</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter data"
          value={field}
          onChange={(event) => setField(event.target.value)}
        />
        <input type="submit" />
      </form>
    </Container>
  );
};

export default Search;
