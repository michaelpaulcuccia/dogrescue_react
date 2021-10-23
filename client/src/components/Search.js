import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
  height: 175px;
  width: 100%;
  background-color: green;
`;

const Search = () => {
  const { register, handleSubmit } = useForm();
  const [gender, setGender] = useState("");

  let search = {};

  const handleGender = async (data) => {
    console.log(data.gender);
    search.gender = data.gender;
    console.log(search);
    setGender(data.gender);
    console.log(gender);
  };

  return (
    <Container>
      <h3>Good Boy? Or, Good Girl?</h3>
      <form onSubmit={handleSubmit(handleGender)}>
        <select {...register("gender")}>
          <option value="" disabled selected>
            Choose Boy or Girl
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <input type="submit" />
      </form>
    </Container>
  );
};

export default Search;
