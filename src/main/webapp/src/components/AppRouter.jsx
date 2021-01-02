import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from '../App';
import Login from '../components/login';
import Home from '../components/Home/home';

export default class AppRouter extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    )
  }
}
