import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import LiquorIcon from "@mui/icons-material/Liquor";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CategoryIcon from "@mui/icons-material/Category";
import WineBarIcon from "@mui/icons-material/WineBar";

import { getCocktailDetails } from "../services/cocktailService";
import { CocktailContext } from "../context/AuthContext";

function CocktailDetails({ handleFavorite }) {
  const { favs } = useContext(CocktailContext);

  const [cocktail, setCocktail] = useState([]);
  const match = useRouteMatch();

  let addedFavs = favs.find((x) => x.idDrink === cocktail.idDrink);
  const btnDisabled = addedFavs ? true : false;

  useEffect(() => {
    getCocktailDetails(match.params.id).then((result) => {
      setCocktail(result[0]);
    });
  }, [match.params.id]);

  return (
    <StyledDetails className="details-container">
      <StyledImageCointeiner className="img-container">
        <StyledImage src={cocktail.strDrinkThumb} alt="coctailImage" />
      </StyledImageCointeiner>
      <StyledInfoContainer className="info-container">
        <h1>{cocktail.strDrink}</h1>
        <StyledAditionalContainer className="additional-info">
          <h3>
            <CategoryIcon /> {cocktail.strCategory}
          </h3>
          <h3>
            <LiquorIcon /> {cocktail.strAlcoholic}
          </h3>
          <h3>
            <WineBarIcon /> {cocktail.strGlass}
          </h3>
        </StyledAditionalContainer>
        <p>{cocktail.strInstructions}</p>
        <p className="reload">
          <StyledButton
            onClick={() => handleFavorite(cocktail)}
            className="overlay"
            disabled={btnDisabled}
          >
            <FavoriteIcon
              sx={{ color: "red", fontSize: 25, margin: 1 }}
            ></FavoriteIcon>
          </StyledButton>
        </p>
      </StyledInfoContainer>
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
`;

const StyledInfoContainer = styled.div`
  flex: 2;
  margin-left: 2rem;
`;

const StyledButton = styled.button`
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
  background: white;
  cursor: pointer;
  &:hover {
    opacity: 1;
    padding: 0.5rem;
    
  }
  &:disabled {
    opacity: 0.2;
    padding: 0.1rem;
  }
`;

const StyledImageCointeiner = styled.div`
  min-height: 60vh;
  flex: 1;
`;

const StyledImage = styled.img`
  width: 400px;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
`;


const StyledAditionalContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 1rem;

  .reload {
    margin-top: 2rem;
  }
`;




export default CocktailDetails;
