import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //also import Navigate for default routing

import Contact from "./patients/pages/Contact";
import NewPatient from "./patients/pages/NewPatient";
import About from "./practice/pages/About";
import Services from "./practice/pages/Services";
import Welcome from "./practice/pages/Welcome";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  //return <h1>Let's start!</h1>;
  console.log("test");
  let routes;
  routes = (
    <Routes>
      <Route path="/" exact element={<Welcome />} />
      <Route path="/About" exact element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" exact element={<Contact />} />
      <Route path="/NewPatient" exact element={<NewPatient />} />
    </Routes>
  );
  return (
    <Router>
      <MainNavigation />
      <main>{routes}</main>
      <footer className="Footer">
        Copyright 2016. Monument Dental. All Rights Reserved.
      </footer>
    </Router>
  );
}

export default App;
