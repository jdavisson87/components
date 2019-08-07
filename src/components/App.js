import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import Nav from "./Nav";
import Home from "./Home";
import Components from "./Components";
import SocialCard from "./SocialCard/SocialCard";
import CustomizedTabs from "./CustomizedTabs/CustomizedTabs";
import RecipeCard from "./RecipeCard/RecipeCard";
import Calculator from "./Calculator/Calculator";
import ListFilter from "./ListFilter/ListFilter";
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
  const socialInfo = AppData.SocialCard;
  const tabInfo = AppData.CustomizedTabs;
  const recipeInfo = AppData.RecipeCard;
  const listInfo = AppData.ListFilter;

  return Loading ? (
    <p>Loading</p>
  ) : (
    <Router>
      <AppCtr>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/components"
            exact
            render={props => <Components {...props} LinkInfo={linkInfo} />}
          />
          <Route
            path="/components/SocialCard"
            render={props => <SocialCard {...props} SocialInfo={socialInfo} />}
          />
          <Route
            path="/components/CustomizedTabs"
            render={props => <CustomizedTabs {...props} TabInfo={tabInfo} />}
          />
          <Route
            path="/components/RecipeCard"
            render={props => <RecipeCard {...props} RecipeInfo={recipeInfo} />}
          />
          <Route path="/components/Calculator" component={Calculator} />
          <Route
            path="/components/ListFilter"
            render={props => <ListFilter {...props} PlayerInfo={listInfo} />}
          />
        </Switch>
      </AppCtr>
    </Router>
  );
}

export default App;

const AppCtr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
