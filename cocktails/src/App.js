import { Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { CocktailContext } from "./context/AuthContext";
import getAllCocktails from "./services/getAllCocktails";

//Components
import HeaderComponent from "./components/Header";
import Home from "./components/Home";
import Favorite from "./components/Fav";
import Random from "./components/Random";

//CSS
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllCocktails(query).then((result) => {
      setCocktails(result);
    });
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const clearSearched = () =>{
    getAllCocktails().then((result) => {
      setCocktails(result);
    });
  
  }
  return (
    <CocktailContext.Provider value={cocktails}>
      <div className="App">
        <GlobalStyles />
        <HeaderComponent clearSearched={clearSearched} />
        <Route path={"/"} exact>
          <Home query={query} search={search} handleSearch={handleSearch} updateSearch={updateSearch}/>
        </Route>
        <Route path={"/fav"}>
          <Favorite />
        </Route>
        <Route path={"/random"}>
          <Random />
        </Route>
      </div>
    </CocktailContext.Provider>
  );
}

export default App;
