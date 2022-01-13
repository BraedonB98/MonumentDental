import React from 'react';
import { BrowserRouter as Router, Route , Redirect, Switch} from 'react-router-dom';

//import MainNavigation from './shared/components/Navigation/MainNavigation';
function App() {
  //return <h1>Let's start!</h1>;
  let routes;
  routes = (
    <Switch>
      <Route path="/" exact>
        
      </Route>
      <Redirect to="/" />
    </Switch>
    );
    return
}

export default App;
