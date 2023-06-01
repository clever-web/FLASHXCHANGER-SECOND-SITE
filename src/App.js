import React from 'react';
import Welcome from './user_pannels/welcome';
import User from './user_pannels/user';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div >
      <Router>
      <Switch>
      <Route exact path="/" component={Welcome}></Route>
      <Route path="/user" component={User}></Route>
      </Switch>
      </Router>
     
    </div>
  );
}


AOS.init();
export default App;
