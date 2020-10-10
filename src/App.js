import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import { ProjectProvider } from "./contexts/projects";
function App() {
  return (
    <ProjectProvider>
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
    </ProjectProvider>
  );
}

export default App;
