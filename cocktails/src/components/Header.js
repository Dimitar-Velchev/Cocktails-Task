import { Link } from "react-router-dom";
import styled from "styled-components";
import LocalBarIcon from '@mui/icons-material/LocalBar';

function Header() {
  return (
    <StyledHeader>
      <div className="logo-container">
      <LocalBarIcon />
        <h2 className="logo">CocktaiLs</h2>
      </div>
      <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fav">Favourites</Link>
        </li>
      </ul>
      </nav>
      <div>
        <button>Get a random recipe here</button>
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
  flex: 1 1 20rem;
  .logo-container {
    display: flex;
    flex: 1;
  }
  .logo {
    display: flex;
    justify-content: flex-start;
    font-size: 2rem;
    font-weight: 500;
    margin: 1rem;
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    flex: 1;
  }
`;

export default Header;
