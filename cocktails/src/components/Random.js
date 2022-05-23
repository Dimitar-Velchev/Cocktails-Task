import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";

import getRandomCocktail from "../services/getRandomCocktail";
import styled from "styled-components";

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandomCocktail().then((result) => {
      setRandom(result[0]);
    });
  }, []);

  const handleResults = () => {
    getRandomCocktail().then((result) => {
      setRandom(result[0]);
    });
  };

  return (
    <StyledDetails className="details-container">
      <div className="img-container">
        <img src={random.strDrinkThumb} alt="" />
      </div>
      <div className="info-container">
        <h1>{random.strDrink}</h1>
        <h1>{random.strCategory}</h1>
        <h1>{random.strAlcoholic}</h1>
        <h1>{random.strGlass}</h1>
        <h1>{random.strInstructions}</h1>
        <p>
          Not what you are looking for?{" "}
          <button onClick={handleResults}>Try again </button>
        </p>
      </div>
    </StyledDetails>
  );
}

const StyledDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  top: 20%;
  left: 10%;
  color: black;

  .img-container {
    min-height: 60vh;
    flex: 1;

    img {
      width: 400px;
      height: 500px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    }
  }
  .info-container {
    flex: 2;
    margin-left: 2rem;

  }
`;

export default Random;
