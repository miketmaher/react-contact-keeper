import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import { Home, About } from './components/pages';
import AlertState from './context/alert/AlertState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ContactState>
          <Router>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Router>
        </ContactState>
      </AlertState>
    </AuthState>
  );
};

export default App;
