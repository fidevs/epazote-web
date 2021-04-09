import React from 'react';
import Home from './components/home';
import Menus from './components/menus';

import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menus" exact component={Menus} />
      <Route><Redirect to="/" /></Route>
    </Switch>
  )
}
