import styled from "styled-components";
import backgrd from "../img/backgrd.svg";
import cow from "../img/cow.svg";
import splash from "../img/splash.svg";

import Bubbles from "./Bubbles";

function Search({ onSearch, onUpdate, search }) {
  return (
    <StyledSearch>
      <Bubbles />
      <StyledFormWraper className="form-wrapper">
        <h1>
          Find your favourite cocktail recipes and new ones to inspire you
        </h1>
        <StyledFormFiled onSubmit={onSearch} className="form-field">
          <StyledInput
            type="text"
            className="search-input"
            placeholder="Insert a cocktail name"
            value={search}
            onChange={onUpdate}
          />
          <StyledButton type="submit" className="search-btn">
            Search now
          </StyledButton>
        </StyledFormFiled>
      </StyledFormWraper>
      <div className="search-svg">
        <img src={cow} alt="" />
      </div>
      <div className="splash">
        <img src={splash} alt="" />
      </div>
    </StyledSearch>
  );
}

const StyledFormWraper = styled.div`
  flex: 1 1 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 8rem;

  h1 {
    font-weight: 600;
    color: rgb(68, 0, 99);
    margin: 1rem 0rem 3rem 0rem;
  }
`;

const StyledFormFiled = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #888888;
  align-items: center;
  width: 90%;
`;

const StyledInput = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px #888888;
  margin: 2rem 0.5rem;
  outline-color: rgb(68, 0, 99);
  width: 60%;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
`;

const StyledButton = styled.button`
  box-shadow: 0px 0px 10px #888888;
  width: 60%;
  margin: 0rem 0rem 2rem;
  
  font-size: 0.8rem;
  color: rgb(68, 0, 99);
  background: white;
  border: 2px solid rgb(186, 182, 166);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 400;
  cursor: pointer;
`;

const StyledSearch = styled.div`
  background-image: url(${backgrd});
  min-height: 60vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;

  .search-svg {
    flex: 1 1 20rem;
    display: flex;
    justify-content: center;
   }
  `;

export default Search;
