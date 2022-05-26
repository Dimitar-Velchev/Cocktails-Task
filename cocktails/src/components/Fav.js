import { useContext } from "react";
import { CocktailContext } from "../context/CocktailContext";
import styled from "styled-components";
import CocktailCard from "./CocktailCard";

function Favorite() {
  const { favs } = useContext(CocktailContext);

  return (
    <CocktailList>
      {favs.length ? (
        favs.map((x) => <CocktailCard key={x.strDrink} cocktail={x} />)
      ) : (
        <h1>You haven't added any favourite cocktails yet.</h1>
      )}
    </CocktailList>
  );
}

const CocktailList = styled.div`
  margin-top: 4rem;
  padding: 0rem 5rem;
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  h1{
      margin: auto;
  }
`;

export default Favorite;
