import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Registration from "./components/Registration"
import ResLogin from './components/ResLogin.component';
import CoordLogin from './components/CoorLogin.component';
function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={Registration} />
      <Route path="/" exact component={ResLogin.component} />
      <Route path="/" exact component={CoordLogin.component} />
      </div>
    </Router>
  );
}

export default App;
