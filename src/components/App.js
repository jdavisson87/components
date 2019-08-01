import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Components from "./Components";
import SocialCard from "./SocialCard/SocialCard";
import CustomizedTabs from "./CustomizedTabs/CustomizedTabs";
import Data from "../utils/_Data.json";

function App() {
  const [AppData, setAppData] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchAppData = async () => {
    setAppData(Data);
  };

  useEffect(() => {
    fetchAppData();
    setLoading(false);
  }, []);

  const linkInfo = Object.keys(AppData).map(data => AppData[data].link);
  const tabInfo = AppData.CustomizedTabs;
  return Loading ? (
    <p>Loading</p>
  ) : (
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
          <Route
            path="/components/CustomizedTabs"
            render={props => <CustomizedTabs {...props} TabInfo={tabInfo} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
