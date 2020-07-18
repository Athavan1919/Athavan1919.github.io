import React, {Component} from 'react';
import Navigation from './components/Navigation'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Courts from './components/Courts'
import Lessons from './components/Lessons'
import Booking from './components/Booking'
import ErrorPage from './components/ErrorPage'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/courts' component={Courts}></Route>
          <Route path='/lessons' component={Lessons}></Route>
          <Route path='/booking' component={Booking}></Route>
          <Route component={ErrorPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
