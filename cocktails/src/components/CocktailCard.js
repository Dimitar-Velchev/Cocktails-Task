import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { CocktailContext } from "../context/CocktailContext";

const CocktailCard = ({ cocktail, handleFavorite }) => {
  const { favs } = useContext(CocktailContext);
  let addedFavs = favs.find((x) => x.idDrink === cocktail.idDrink);
  const btnDisabled = addedFavs ? true : false;

  return (
    <StyledCocktail>
      <h3>{cocktail.strDrink}</h3>
      <Link to={`/details/${cocktail.idDrink}`}>
        {" "}
        <img src={cocktail.strDrinkThumb} alt="imageCocktail" />
      </Link>

      <p>{cocktail.strInstructions}</p>
      <button
        onClick={() => handleFavorite(cocktail)}
        className="overlay"
        disabled={btnDisabled}
      >
        <FavoriteIcon
          sx={{ color: "red", fontSize: 25, margin: 1 }}
        ></FavoriteIcon>
      </button>
    </StyledCocktail>
  );
};

const StyledCocktail = styled.div`
  min-height: 30vh;
  max-width: 360px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
  p {
    font-size: 0.8rem;
    margin: 1rem;
  }
  h2 {
    padding: 5rem 0rem;
  }

  position: relative;

  &:hover {
    box-shadow: 0px 5px 30px rgb(255, 194, 68);
    cursor: pointer;

    transform: scale(1.1);
    h3 {
      margin-top: 1.5rem;
    }
  }
  &:hover .overlay {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    top: 0;
    font-size: 0.7rem;
    padding: 0.1rem;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    font-size: 0.8rem;
    border: none;
    &:disabled {
      opacity: 0.2;
    }
  }
`;

export default CocktailCard;
