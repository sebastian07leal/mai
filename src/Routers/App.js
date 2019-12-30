import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../Styles/app.css';
import 'materialize-css/dist/css/materialize.min.css';

import Home from '../Containers/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
