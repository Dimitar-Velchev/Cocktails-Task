import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState, useContext, useEffect } from "react";

import CocktailCard from "./CocktailCard";
import { CocktailContext } from "../context/AuthContext";

import { getAllCocktails } from "../services/cocktailService";

function Favorite({ removeFavorite }) {
  const { favs } = useContext(CocktailContext);
  const [updatedCocktails, setUpdatedCocktails] = useState([]);

  useEffect(() => {
    getAllCocktails().then((data) => {
      const cocktailIDs = [];
      data.map((x) => cocktailIDs.push(x.idDrink));
      favs.forEach((fav) => {
        const updated = data.find((x) => x.idDrink === fav.idDrink);
        const notify = (drink) =>
          toast.info(`Cocktail ${drink.strDrink} has been updated in the API!`, {
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
        if (
          JSON.stringify(updated) === JSON.stringify(fav) &&
          cocktailIDs.includes(fav.idDrink)
        ) {
          setUpdatedCocktails(updated);
          notify(updated);
        }
      });
    });
  },[]);

  return (
    <>
      {updatedCocktails?.length !== 0 ? <ToastContainer /> : ""}
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
          <StyledInfo>
            You haven't added any favourite cocktails yet.
          </StyledInfo>
        )}
      </CocktailList>
    </>
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
