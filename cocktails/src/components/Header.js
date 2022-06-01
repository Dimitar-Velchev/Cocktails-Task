import styled from "styled-components";
import { Link } from "react-router-dom";

import LocalBarIcon from "@mui/icons-material/LocalBar";

function Header({ clearSearched }) {
  return (
    <>
      <StyledHeader>
        <StyledLogoConteiner onClick={clearSearched} className="logo-container">
          <LocalBarIcon className="logo-img" />
          <Link to="/" className="logo-text">
            CocktaiLs
          </Link>
        </StyledLogoConteiner>
        <StyledNav>
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
        </StyledNav>
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
`;
const StyledLogoConteiner = styled.div`
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
`;

const StyledNav = styled.nav`
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
  }
`;

export default Header;
