import styled from "styled-components";
import { useEffect, useState, useContext } from "react";

import LiquorIcon from "@mui/icons-material/Liquor";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplayIcon from "@mui/icons-material/Replay";
import CategoryIcon from "@mui/icons-material/Category";
import WineBarIcon from "@mui/icons-material/WineBar";

import { CocktailContext } from "../context/AuthContext";
import { getRandomCocktail } from "../services/cocktailService";

function Random({ handleFavorite }) {
  const [random, setRandom] = useState([]);

  const { favs } = useContext(CocktailContext);

  let addedFavs = favs?.find((x) => x.idDrink === random.idDrink);
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
      <StyledImageConteiner className="img-container">
        <img src={random.strDrinkThumb} alt="" />
      </StyledImageConteiner>
      <InfoConteiner className="info-container">
        <h1>{random.strDrink}</h1>
        <div className="additional-info">
          <StyledInfo>
            <CategoryIcon /> {random.strCategory}
          </StyledInfo>
          <StyledInfo>
            <LiquorIcon /> {random.strAlcoholic}
          </StyledInfo>
          <StyledInfo>
            <WineBarIcon /> {random.strGlass}
          </StyledInfo>
        </div>
        <StyledInstruction>{random.strInstructions}</StyledInstruction>
        <StyledInstruction className="reload">
          Not what you are looking for?{" "}
          <StyledReloadBtn className="reload-btn" onClick={handleResults}>
            {" "}
            TRY AGAIN <ReplayIcon sx={{ fontSize: 20 }} />
          </StyledReloadBtn>
          <StyledOverlayBtn
            onClick={() => handleFavorite(random)}
            className="overlay"
            disabled={btnDisabled}
          >
            <FavoriteIcon
              sx={{ color: "red", fontSize: 25, margin: 1 }}
            ></FavoriteIcon>
          </StyledOverlayBtn>
        </StyledInstruction>
      </InfoConteiner>
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

const StyledImageConteiner = styled.div`
  min-height: 60vh;
  flex: 1;

  img {
    width: 400px;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  }
`;

const InfoConteiner = styled.div`
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
`;

const StyledOverlayBtn = styled.button`
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

const StyledInfo = styled.h3`
  font-size: 1.2rem;
  padding: 1.5rem 0rem;
`;

const StyledInstruction = styled.p`
 font-size: 1.2rem;
    line-height: 160%;
    font-size: 0.9rem;
    margin: 1rem;
`;

const StyledReloadBtn = styled.button`
  border: none;
  text-decoration: underline;
  color: rgb(68, 0, 99);
  font-size: 0.8rem;
  font-weight: 700;

  background: white;
  cursor: pointer;
`;

export default Random;
