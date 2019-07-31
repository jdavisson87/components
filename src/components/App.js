import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Components from "./Components";
import SocialCard from "./SocialCard/SocialCard";
import Data from "../utils/_Data.json";

function App() {
  const [linkInfo, setLinkInfo] = useState([]);

  const fetchLinkInfo = async () => {
    setLinkInfo(Object.keys(Data).map(data => Data[data].link));
  };

  useEffect(() => {
    fetchLinkInfo();
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/components"
            exact
            render={props => <Components {...props} LinkInfo={linkInfo} />}
          />
          <Route path="/components/SocialCard" component={SocialCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
