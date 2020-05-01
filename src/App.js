import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound  from'./pages/NotFound'
import Tabs  from './pages/Tabs'
import Help  from './pages/Help'
import About  from './pages/About'
import SampleMap from './pages/SampleMap'
import Updates from './pages/Updates'
import Login from './pages/Login'
import AddUpdate from './pages/AddUpdate'

// Initialize Firebase
import * as firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBRI8rqW0bgU_0btOffDib2_CHj9x12DOA",
  authDomain: "covid-39b72.firebaseapp.com",
  databaseURL: "https://covid-39b72.firebaseio.com",
  projectId: "covid-39b72",
  storageBucket: "covid-39b72.appspot.com",
  messagingSenderId: "42215066759",
  appId: "1:42215066759:web:06744818a94c7d7f5afc22",
  measurementId: "G-DN2L23PLYQ"
};

function App() {

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

  return (
    <Router>
        {/* <Suspense fallback={<Loader/>}> */}
      <Switch>
          <Route path="/" exact component={() => (<Tabs tabValue={0} />)}/>
          <Route path="/usa" exact component={() => (<Tabs tabValue={1} />)}/>
          <Route path="/world" exact  component={() => (<Tabs tabValue={2} />)}/>
          <Route path="/analytics" exact component={() => (<Tabs tabValue={3} />)}/>
          <Route path="/help" exact  component={Help}/>
          <Route path="/about" exact  component={About}/>
          <Route path="/updates" exact  component={Updates}/>
          <Route path="/login" exact  component={Login}/>
          <Route path="/addupdate" exact  component={AddUpdate}/>
          {/* <Route path="/share" exact  component={SampleMap}/> */}
          <Route path="*" component={NotFound}/>
      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
