import React from 'react';
import { BrowserRouter as Router, Route , Navigate, Routes} from 'react-router-dom';

//import MainNavigation from './shared/components/Navigation/MainNavigation';
import Welcome from './practice/pages/Welcome';
import MainNavigation from './shared/components/Navigation/MainNavigation';


function App() {
  //return <h1>Let's start!</h1>;
  console.log("test")
  let routes;
  routes = (
    <Routes>
      <Route path="/" exact element={<Welcome/>}/>
      
    </Routes>
    );
    return(
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    )
}

export default App;
