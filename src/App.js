import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Home from '../src/pages/Home'
import NotFound from '../src/pages/NotFound'



function App() {
  return (
    <Router>
    <Switch>
         <Route path="/" exact  component={Home}/>
         <Route path="*" component={NotFound}/>
     </Switch>
 </Router>
  );
}

export default App;
