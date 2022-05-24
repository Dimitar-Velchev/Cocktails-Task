import { useEffect, useState } from "react";

import {getRandomCocktail} from "../services/cocktailService";
import styled from "styled-components";
import LiquorIcon from "@mui/icons-material/Liquor";
import CategoryIcon from "@mui/icons-material/Category";
import WineBarIcon from "@mui/icons-material/WineBar";

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
        <div className="additional-info">
          <h3>
            <CategoryIcon /> {random.strCategory}
          </h3>
          <h3>
            <LiquorIcon /> {random.strAlcoholic}
          </h3>
          <h3>
            <WineBarIcon /> {random.strGlass}
          </h3>
        </div>
        <p>{random.strInstructions}</p>
        <p className="reload">
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
    .additional-info {
      display: flex;
      width: 80%;
      justify-content: space-between;
      padding: 1rem;
    }
    .reload {
      margin-top: 2rem;
    }
  }
`;

export default Random;
