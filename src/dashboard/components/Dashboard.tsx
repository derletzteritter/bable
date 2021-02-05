import React from 'react'
import Header from '../../header/Header'
import Home from './home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Images from './images/Images';

export default function Dashboard() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/images" component={Images} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
