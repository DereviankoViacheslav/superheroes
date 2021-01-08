import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Hero from "../pages/hero";
import CreateHero from "../pages/create-hero";

const routes = () => {

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/create-hero" component={CreateHero} />
      <Route path="/hero/:nickname/:heroId" component={Hero} />
    </Switch>
  )
}

export default routes;
