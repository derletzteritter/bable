import React from 'react';
import './App.css';
import Dashboard from './dashboard/components/Dashboard';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div>
      <Router>
        <Switch>
        {isAuthenticated ? (
          <>
            <Route path="/" exact component={Dashboard} />
          </>
        ) : (
          <>
            <Route path="/" exact component={Home} />
          </>
        )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
