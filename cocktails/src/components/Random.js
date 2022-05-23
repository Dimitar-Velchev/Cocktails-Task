import { useEffect, useState } from "react";
import getRandomCocktail from "../services/getRandomCocktail";
import styled from "styled-components";

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandomCocktail().then((result) => {
      setRandom(result[0]);
    });
  }, []);

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
      </div>
    </StyledDetails>
  );
}

const StyledDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .img-container {
    min-height: 60vh;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    img {
      width: 80%;
      margin: auto;
      object-fit: cover;
    }
  }
`;

export default Random;
