import { useEffect, useState, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { CocktailContext } from "../context/CocktailContext";

import { getCocktailDetails } from "../services/cocktailService";
import styled from "styled-components";
import LiquorIcon from "@mui/icons-material/Liquor";
import CategoryIcon from "@mui/icons-material/Category";
import WineBarIcon from "@mui/icons-material/WineBar";

function CocktailDetails({ handleFavorite }) {
  const { favs } = useContext(CocktailContext);

  const [cocktail, setCocktail] = useState([]);
  const match = useRouteMatch();

  let addedFavs = favs.find((x) => x.strDrink === cocktail.strDrink);
  const btnDisabled = addedFavs ? true : false;

  useEffect(() => {
    getCocktailDetails(match.params.id).then((result) => {
      setCocktail(result[0]);
    });
  }, [match.params.id]);

  return (
    <StyledDetails className="details-container">
      <div className="img-container">
        <img src={cocktail.strDrinkThumb} alt="" />
      </div>
      <div className="info-container">
        <h1>{cocktail.strDrink}</h1>
        <div className="additional-info">
          <h3>
            <CategoryIcon /> {cocktail.strCategory}
          </h3>
          <h3>
            <LiquorIcon /> {cocktail.strAlcoholic}
          </h3>
          <h3>
            <WineBarIcon /> {cocktail.strGlass}
          </h3>
        </div>
        <p>{cocktail.strInstructions}</p>
        <p className="reload">
          <button
            onClick={() => handleFavorite( cocktail)}
            disabled={btnDisabled}
          >
            Add to favs
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
 
`;

export default CocktailDetails;
