import styled from "styled-components";
import { useContext } from "react";

import CocktailCard from "./CocktailCard";
import Search from "./Search";

import { CocktailContext } from "../context/CocktailContext";


function Home({ handleSearch, updateSearch, query, search, handleFavorite }) {
  const { cocktails } = useContext(CocktailContext);

  return (
    <>
      <Search
        query={query}
        search={search}
        onSearch={handleSearch}
        onUpdate={updateSearch}
      />
      <CocktailList>
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
            handleFavorite={handleFavorite}
          />
        ))}
      </CocktailList>
    </>
  );
}

const CocktailList = styled.div`
  margin-top: 4rem;
  padding: 0rem 5rem;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
