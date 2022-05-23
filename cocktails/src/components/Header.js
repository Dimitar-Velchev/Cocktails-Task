import { Link } from "react-router-dom";

//import { useEffect, useState } from "react";
import styled from "styled-components";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SportsBarIcon from "@mui/icons-material/SportsBar";
//import Random from "./Random";
//import getAllCocktails from "../services/getAllCocktails";

function Header({ clearSearched }) {
  return (
    <>
      <StyledHeader>
        <div onClick={clearSearched} className="logo-container">
          <LocalBarIcon className="logo-img" />
          <Link to="/" className="logo-text">
            CocktaiLs
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/fav" className="nav-link">
                Favourites
              </Link>
            </li>
            <li>
              <Link to="/random" className="nav-link btn">
                Random suggestion
              </Link>
            </li>
          </ul>
        </nav>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  min-height: 10vh;
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  color: rgb(255, 194, 68);
  .logo-container {
    display: flex;
    flex: 5;
    .logo-img {
      font-size: 3rem;
      font-weight: 700;
      margin: 0.2rem 0.5rem;
      cursor: pointer;
      color: rgb(68, 0, 99);
    }
    .logo-text {
      letter-spacing: 0.5rem;
      color: rgb(68, 0, 99);
      font-size: 3rem;
      cursor: pointer;
    }
  }
  nav {
    /* background-color: rgb(0, 160, 130); */
    flex: 2;
    margin-right: 2rem;
    font-weight: 500;
    .nav-links {
      letter-spacing: 0.1rem;
      justify-content: space-around;
      align-items: center;
      display: flex;
      list-style: none;
      .nav-link {
        font-size: 1rem;
        text-decoration: none;
        color: rgb(68, 0, 99);
        border: 2px ridge white;
        background-color: white;
        padding: 0.2rem 1rem;
        border-radius: 2rem;
      }
      .btn {
        font-size: 0.8rem;
        font-weight: bold;
        border: none;
        &:hover {
          border-radius: 2rem;
          background-color: rgb(186, 182, 166);
          font-weight: 600;
          color: white;
        }
      }
    }
  }

  .random-btn-container {
    display: flex;
    flex: 1;
  }
`;

export default Header;
