import React,{Suspense,lazy} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Loader from './component/Loader'

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));


function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
    <Switch>
         <Route path="/" exact  component={Home}/>
         <Route path="*" component={NotFound}/>
     </Switch>
     </Suspense>
 </Router>
  );
}

export default App;
