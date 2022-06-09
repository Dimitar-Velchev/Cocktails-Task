import { Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { CocktailContext } from "./context/CocktailContext";
import { getAllCocktails } from "./services/cocktailService";

//Components
import HeaderComponent from "./components/Header";
import Home from "./components/Home/Home";
import Favorite from "./components/Fav";
import Random from "./components/Random";
import CocktailDetails from "./components/CoktailDetailsCard";

//CSS
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [favs, setFavs] = useState([]);

  const values = {
    cocktails,
    favs,
  };

  useEffect(() => {
    getAllCocktails(query).then((result) => {
      setCocktails(result);
    });
  }, [query]);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("react-cocktail-app"));
    favourites ? setFavs(favourites) : setFavs([]);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-cocktail-app", JSON.stringify(items));
  };

  const addFavorite = (cocktail) => {
    const newFavoriteList = [...favs, cocktail];
    setFavs(newFavoriteList);

    saveToLocalStorage(newFavoriteList);
  };

  const handleSearch = (e) => {
    e.preventDefault();
     setQuery(search);

    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const clearSearched = () => {
    getAllCocktails().then((result) => {
      setCocktails(result);
    });
  };

  const removeFavoriteCocktail = (cocktail) => {
    const newFavoriteList = favs.filter(
      (fav) => fav.idDrink !== cocktail.idDrink
    );
    setFavs(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };



  return (
    <CocktailContext.Provider value={values}>
      <div className="App">
        <GlobalStyles />
        <HeaderComponent clearSearched={clearSearched} />
        <Route path={"/"} exact>
          <Home
            query={query}
            search={search}
            handleSearch={handleSearch}
            updateSearch={updateSearch}
            handleFavorite={addFavorite}
            removeFavorite={removeFavoriteCocktail}
          />
        </Route>

        <Route path={"/fav"}>
          <Favorite removeFavorite={removeFavoriteCocktail} />
        </Route>
        <Route path={"/random"}>
          <Random handleFavorite={addFavorite} />
        </Route>
        <Route path="/details/:id" exact>
          <CocktailDetails handleFavorite={addFavorite} />
        </Route>
      </div>
    </CocktailContext.Provider>
  );
}

export default App;
