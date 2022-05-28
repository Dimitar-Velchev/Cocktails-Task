import styled from "styled-components";
import { useEffect, useState, useContext } from "react";

import LiquorIcon from "@mui/icons-material/Liquor";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplayIcon from "@mui/icons-material/Replay";
import CategoryIcon from "@mui/icons-material/Category";
import WineBarIcon from "@mui/icons-material/WineBar";

import { CocktailContext } from "../context/CocktailContext";
import { getRandomCocktail } from "../services/cocktailService";

function Random({ handleFavorite }) {
  const [random, setRandom] = useState([]);

  const { favs } = useContext(CocktailContext);

  let addedFavs = favs.find((x) => x.strDrink === random.strDrink);
  const btnDisabled = addedFavs ? true : false;

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
          <button className="reload-btn" onClick={handleResults}>
            {" "}
            TRY AGAIN <ReplayIcon sx={{ fontSize: 20 }} />
          </button>
          <button
            onClick={() => handleFavorite(random)}
            className="overlay"
            disabled={btnDisabled}
          >
            <FavoriteIcon
              sx={{ color: "red", fontSize: 25, margin: 1 }}
            ></FavoriteIcon>
          </button>
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
  .overlay {
    position: absolute;
    width: 60%;
    transition: 0.5s ease;
    opacity: 0.7;
    top: 0;
    right: 0;
    padding: 0.1rem;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: none;
    &:hover {
      opacity: 1;
      padding: 0.5rem;
    }
    &:disabled {
      opacity: 0.2;
      padding: 0.1rem;
    }
  }
  .reload-btn {
    border: none;
    text-decoration: underline;
    color: rgb(68, 0, 99);
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

export default Random;
