import { Route } from "react-router-dom";

//Components
import HeaderComponent from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";

//CSS
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <HeaderComponent />
      <Search />
      <Route path={'/'}><Home /></Route>
    </div>
  );
}

export default App;
