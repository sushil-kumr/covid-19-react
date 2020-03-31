import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import Loader from './component/Loader'
import Tab  from'./pages/CountryTabs'
import NotFound  from'./pages/NotFound'
import WorldTab  from './pages/WorldTab'
import Tabs  from './pages/GlobalTabs'
import Help  from './pages/Help'
import About  from './pages/About'


function App() {
  return (
    <Router>
      {/* <Suspense fallback={<Loader/>}> */}
    <Switch>
         <Route path="/" exact  component={Tab}/>
         <Route path="/analytics" exact component={Tabs}/>
         <Route path="/world" exact  component={WorldTab}/>
         <Route path="/help" exact  component={Help}/>
         <Route path="/about" exact  component={About}/>
         <Route path="*" component={NotFound}/>
     </Switch>
     {/* </Suspense> */}
 </Router>
  );
}

export default App;
