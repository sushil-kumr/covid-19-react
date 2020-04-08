import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound  from'./pages/NotFound'
import Tabs  from './pages/Tabs'
import Help  from './pages/Help'
import About  from './pages/About'
import SampleMap from './pages/SampleMap'
import Updates from './pages/Updates'
import Login from './pages/login'
import AddUpdate from './pages/AddUpdate'

function App() {
  return (
    <Router>
        {/* <Suspense fallback={<Loader/>}> */}
      <Switch>
          <Route path="/" exact component={() => (<Tabs tabValue={0} />)}/>
          <Route path="/analytics" exact component={() => (<Tabs tabValue={1} />)}/>
          <Route path="/india" exact component={() => (<Tabs tabValue={3} />)}/>
          <Route path="/world" exact  component={() => (<Tabs tabValue={2} />)}/>
          <Route path="/help" exact  component={Help}/>
          <Route path="/about" exact  component={About}/>
          <Route path="/updates" exact  component={Updates}/>
          <Route path="/login" exact  component={Login}/>
          <Route path="/addupdate" exact  component={AddUpdate}/>
          <Route path="*" component={NotFound}/>
      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
