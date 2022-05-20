import styled from "styled-components";
import backgrd from "../img/backgrd.svg";
import cow from "../img/cow.svg";

function Search() {
  return (
    <StyledSearch>
      <div className="form-wrapper">
        <h1>
          Find your favourite cocktail recipes and new ones to inspire you
        </h1>
        <form className="form-field">
          <input
            type="text"
            className="search-input"
            placeholder="Insert a cocktail name"
          />
          <button type="submit" className="search-btn">
            Search now
          </button>
        </form>
      </div>
      <div className="search-svg">
        <img src={cow} alt="" />
      </div>
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
  background-image: url(${backgrd});
  min-height: 80vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  .form-wrapper {
    flex: 1 1 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem;
    h1 {
      font-weight: 600;
      color: rgb(68, 0, 99);
      margin-bottom: 2rem;
    }
    .form-field {
      display: flex;
      flex-direction: column;
      box-shadow: 0px 0px 10px #888888;
      align-items: center;
      width: 70%;
      input {
        padding: 0.8rem;
        border: none;
        border-radius: 1rem;
        box-shadow: 0px 0px 10px #888888;
        margin: 1rem 0.5rem;
        outline-color: rgb(68, 0, 99);
        width: 60%;
      }
      button {
        box-shadow: 0px 0px 10px #888888;
        width: 60%;
        margin: 0.5rem 1.5rem 1rem;
      }
      
    }
  }
  .search-svg {
    flex: 1 1 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
    }
  }
`;

export default Search;
