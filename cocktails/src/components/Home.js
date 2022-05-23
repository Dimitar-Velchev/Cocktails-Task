import { useContext } from "react";
import { CocktailContext } from "../context/AuthContext";

import styled from "styled-components";
import CocktailCard from "./CocktailCard";

import Search from "./Search";

function Home({ handleSearch, updateSearch, query, search }) {
  const cocktails = useContext(CocktailContext);

  return (
    <>
      <Search
        query={query}
        search={search}
        onSearch={handleSearch}
        onUpdate={updateSearch}
      />
      <CocktailList>
        <Cocktail>
          {cocktails?.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </Cocktail>
      </CocktailList>
    </>
  );
}

const CocktailList = styled.div`
  margin-top: 4rem;
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  p{
    margin: 1rem;
  }
`;

const Cocktail = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
