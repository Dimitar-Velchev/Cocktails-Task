import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
//import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CocktailCard = ({ cocktail,handleFavorite }) => {


  return (
    <StyledCocktail>
      <h3>{cocktail.strDrink}</h3>
      <img src={cocktail.strDrinkThumb} alt="imageCocktail" />
      <p>{cocktail.strInstructions}</p>
      <div onClick={()=>handleFavorite(cocktail)} className="overlay">
        <span>Add to Favourites</span>
        <FavoriteIcon
          sx={{ color: "red", fontSize: 25, margin: 1 }}
        ></FavoriteIcon>
      </div>
    </StyledCocktail>
  );
};

const StyledCocktail = styled.div`
  min-height: 30vh;
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
    background-color: rgba(186, 182, 160, 0.3);
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
  }
`;

export default CocktailCard;
