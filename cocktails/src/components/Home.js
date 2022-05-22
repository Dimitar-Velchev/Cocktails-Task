import { useEffect, useState } from "react";
import styled from "styled-components";
import CocktailCard from "./CocktailCard";

import getAllCocktails from "../services/getAllCocktails";

import HeaderComponent from "./Header";
import Search from "./Search";

function Home() {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllCocktails(query).then((result) => {
      setCocktails(result);
    });
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <HeaderComponent />
      <Search
        query={query}
        search={search}
        onSearch={handleSearch}
        onUpdate={updateSearch}
      />
      <CocktailList>
        <Cocktail>
          {cocktails.map((cocktail) => (
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
`;

const Cocktail = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
