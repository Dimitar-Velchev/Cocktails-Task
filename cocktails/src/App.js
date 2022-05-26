import { Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { CocktailContext } from "./context/CocktailContext";
import { getAllCocktails } from "./services/cocktailService";

//Components
import HeaderComponent from "./components/Header";
import Home from "./components/Home";
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

  const addFavorite = (cocktail) => {
    const newFavorites = [...favs, cocktail];
    setFavs(newFavorites);
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
          />
        </Route>
        <Route path={"/fav"}>
          <Favorite />
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
