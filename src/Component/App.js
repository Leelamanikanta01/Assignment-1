import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Home, Service, Contact, ImageCarousel } from "./Pages";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/carousel" component={ImageCarousel} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
