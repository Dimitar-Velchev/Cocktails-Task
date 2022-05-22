import { Route } from "react-router-dom";

//Components

import Home from "./components/Home";

//CSS
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
     
      <Route path={'/'}><Home /></Route>
    </div>
  );
}

export default App;
