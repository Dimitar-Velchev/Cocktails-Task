import styled from "styled-components";
import { useContext } from "react";

import CocktailCard from "./CocktailCard";
import { CocktailContext } from "../context/AuthContext";

function Favorite({ removeFavorite }) {
  const { favs } = useContext(CocktailContext);

  return (
    <CocktailList>
      {favs.length ? (
        favs.map((x) => (
          <CocktailCard
            removeFavorite={removeFavorite}
            key={x.idDrink}
            cocktail={x}
          />
        ))
      ) : (
        <StyledInfo>You haven't added any favourite cocktails yet.</StyledInfo>
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
`;

const StyledInfo = styled.h1`
  margin: auto;
`;

export default Favorite;
