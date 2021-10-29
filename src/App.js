import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/competences" exact component={Knowledges} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
