
import styled from "styled-components";

const CocktailCard = ({ cocktail }) => {
  return (
    <StyledCocktail>
      <h3>{cocktail.strDrink}</h3>
      <img src={cocktail.strDrinkThumb} alt="imageCocktail"/>
      <p>{cocktail.strInstructions}</p>
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
  p{
      font-size: 0.8rem;
  }
  &:hover{
  box-shadow: 0px 5px 30px rgb(255, 194, 68);
  }

`;

export default CocktailCard;
