import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactState from './context/contact/ContactState';
import { Home, About } from './components/pages';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </ContactState>
  );
};

export default App;
