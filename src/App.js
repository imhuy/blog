import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <div>  
                <Link to="/feed">Home</Link>
          <Switch>
            <Route path="/feed" component={Header} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
 
export default App;
