import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/detail/:projectId">
          <DetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
