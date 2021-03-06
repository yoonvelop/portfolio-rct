import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { ProjectProvider } from "./contexts/projects";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <ProjectProvider>
      <BrowserRouter basename="/portfolio-rct">
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
