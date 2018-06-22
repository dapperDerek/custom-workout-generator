import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Exercises from './Components/Exercises/Exercises';


export default (
  <Switch>
    <Route exact path="/" component={Exercises} />
  </Switch>
);

