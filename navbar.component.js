import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          AvailableSurveys
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                CreateSurvey
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/attempt" className="nav-link">
                AttemptSurvey
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/results" className="nav-link">
                SurveyResults
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/reg" className="nav-link">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
