import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import './App.scss';
import Details from './components/layout/Details';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import Overview from './components/layout/Overview';
import './fontawesome/css/all.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movie-list' component={Overview} />
        <Route path='/details/:id' component={Details} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
