import React,{Suspense,lazy} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Loader from './component/Loader'

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Map = lazy(() => import('./pages/GoogleMap'));
const Help = lazy(() => import('./pages/Help'));
const About = lazy(() => import('./pages/About'));


function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
    <Switch>
         <Route path="/" exact  component={Home}/>
         <Route path="/lab" exact  component={Map}/>
         <Route path="/help" exact  component={Help}/>
         <Route path="/about" exact  component={About}/>
         <Route path="*" component={NotFound}/>
     </Switch>
     </Suspense>
 </Router>
  );
}

export default App;
