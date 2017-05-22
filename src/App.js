import React, { Component } from 'react';
import array from './array.js';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Login from'./Login.js';
import { Switch } from 'react-router-dom'
import { Route, Redirect } from 'react-router'


console.log('array:', array);

class App extends Component {

  render() {
    return (
      <div>
             <Switch>
              <Route exact path='/' render={() => (
                false ? (
                  <Redirect to="/login"/>
                ) : (
                  <Page1/>
                )
              )}/>
              <Route path='/login' component={Login}/>
              <Route path='/page1' exactly component={Page1}/>
              <Route path='/page2' exactly component={Page2}/>
            </Switch>
          </div>
    );
  }
}

export default App;
