import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import './App.scss';
import Container from './components/layout/Container';
import Details from './components/layout/Details';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import Overview from './components/layout/Overview';
import './fontawesome/css/all.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movie-list' component={Overview} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      </Container>
    </div>
  );
}

export default withRouter(App);
