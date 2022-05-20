import { Link } from "react-router-dom";
import styled from "styled-components";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BungalowIcon from "@mui/icons-material/Bungalow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SportsBarIcon from '@mui/icons-material/SportsBar';

function Header() {
  return (
    <StyledHeader>
      <div className="logo-container">
        <LocalBarIcon className="logo-img" />
        <h2 className="logo-text">CocktaiLs</h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              <BungalowIcon sx={{ fontSize: 20 }} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/fav" className="nav-link">
              <FavoriteIcon sx={{ fontSize: 20 }} />
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
      <div className="random-btn-container">
        <button className="random-btn"><SportsBarIcon />  Random recipe for you </button>
      </div>
    </StyledHeader>
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
    flex: 3;
    .logo-img {
      font-size: 2.5rem;
      font-weight: 500;
      margin: 1rem;
      cursor: pointer;
    }
    .logo-text {
      letter-spacing: 0.5rem;
      color: rgb(0,160,130);

      cursor: pointer;
    }
  }
  nav {
    background-color: rgb(0,160,130);
    flex: 2;
    margin-right: 2rem;
    letter-spacing: 0.2rem;
    font-weight: 500;
    .nav-links {
      justify-content: space-around;
      display: flex;
      list-style: none;
      .nav-link {
        font-size: 1.4rem;
        text-decoration: none;
        color: rgb(255, 194, 68);
      }
    }
  }

  .random-btn-container {
    display: flex;
    flex: 1;
  }
`;

export default Header;
