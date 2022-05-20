import styled from "styled-components";
import backgrd from '../img/backgrd.svg';

function Search() {
  return (
    <StyledSearch>
      <form className="search-form">
        <input type="text" className="search-input" />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
 background-image: url(${backgrd});
  min-height: 80vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Search;
