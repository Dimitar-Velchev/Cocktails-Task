import styled from "styled-components";
import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";

import CocktailCard from "../CocktailCard";
import Search from "../Search";

import { CocktailContext } from "../../context/AuthContext";

import "./Pagination.css";

function Home({
  handleSearch,
  updateSearch,
  query,
  search,
  handleFavorite,
  removeFavorite,
}) {
  const { cocktails } = useContext(CocktailContext);

  const [pageNumber, setPageNumber] = useState(0);

  const cocktailsPerPage = 4;
  const cocktailsSeen = pageNumber * cocktailsPerPage;
  const pageCount = Math.ceil(cocktails.length / cocktailsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  
  const showCocktails = cocktails
    .slice(cocktailsSeen, cocktailsSeen + cocktailsPerPage)
    .map((cocktail) => {
      return (
        <CocktailCard
          key={cocktail.idDrink}
          cocktail={cocktail}
          handleFavorite={handleFavorite}
          removeFavorite={removeFavorite}
        />
      );
    });

  return (
    <>
      <Search
        query={query}
        search={search}
        onSearch={handleSearch}
        onUpdate={updateSearch}
      />
      <CocktailList>
        {cocktails.length !== 0 ? showCocktails : <StyledInfo> No results found </StyledInfo>}
      </CocktailList>
      <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination-container"}
          previousLinkClassName={"prev-btn"}
          nextLinkClassName={"next-btn"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
        ></ReactPaginate>
    </>
  );
}

const CocktailList = styled.div`
  margin-top: 4rem;
  padding: 0rem 5rem;
  min-height: 50vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  `;

const StyledInfo = styled.h1`
margin: auto;
`;



export default Home;
