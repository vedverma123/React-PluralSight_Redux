import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PageNotFound from "./PageNotFound";
import HeaderPage from "./common/HeaderPage";
import CoursesPage from "./course/CoursesPage";

function App() {
  return (
    <div className="container-fluid">
      <HeaderPage />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
