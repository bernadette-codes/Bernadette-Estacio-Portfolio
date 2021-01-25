import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Portfolio from "./components/pages/portfolio/portfolio";
import Contact from "./components/pages/contact/contact";
import Submitted from "./components/pages/submitted/submitted";

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/submitted" component={Submitted} />
  </Switch>
);

export default App;
