import { useEffect, useState } from "react";
import styled from "styled-components";
import CocktailCard from "./CocktailCard";

function Home() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getAllCocktails();
  }, []);

  const getAllCocktails = async () => {
    const api = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s`
    );

    const data = await api.json();
    setCocktails(data.drinks);
  };

  return (
    <CocktailList>
      <Cocktail>
        {cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </Cocktail>
    </CocktailList>
  );
}

const CocktailList = styled.div`
  margin-top: 4rem;
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
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
