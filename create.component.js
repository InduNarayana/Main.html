import React from "react";
import "./Create.css";
import axios from "axios";
//import { Route, NavLink, HashRouter } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Text from "./Text";
//import CheckboxApp from "./CheckboxApp";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyname: "",
      noofqsns: 0,
      question: "",
      optiontype: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const survey = {
      surveyname: this.state.surveyname,
      noofqsns: this.state.noofqsns,
      question: this.state.question,
      optiontype: this.state.optiontype
    };
    axios
      .post("http://localhost:5000/survey/add", survey)
      .then(res => console.log(res.data));
    //alert(`You chose the ${this.state.option} option.`);
  }

  /*showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }
  anotherName() {
    this.setState({
      aname: this.state.achange
    });
  }*/
  /*activateText = Text.bind(this);*/
  render() {
    /*const {
      //state: {},
      activateText
    } = this;*/
    return (
      <div className="wrapper">
        <div className="wrapper3">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="surveyname">
              <label htmlFor="surveyname">SurveyName:</label>
              <input
                type="text"
                value={this.state.surveyname}
                name="surveyname"
                placeholder="Enter the name of survey"
                onChange={this.handleChange}
              />
            </div>
            <div className="noofqsns">
              <label htmlFor="noofqsns">noofqsns:</label>
              <input
                type="Number"
                value={this.state.noofqsns}
                name="noofqsns"
                placeholder="Enter no. of qsns"
                onChange={this.handleChange}
              />
            </div>
            <div className="question">
              <label htmlFor="question">Question:</label>
              <input
                type="text"
                value={this.state.question}
                name="question"
                placeholder="Enter Question"
                onChange={this.handleChange}
              />
            </div>
            <div className="optiontype">
              <label htmlFor="optiontype">Select optiontype:</label>
              <input
                type="text"
                value={this.state.optiontype}
                name="optiontype"
                placeholder="Enter optiontype"
                onChange={this.handleChange}
              />
            </div>
            <div className="next">
              <button type="submit">NextQsn</button>
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
/*<Router>
            <div>
              <h3>Select option type</h3>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                  <li>
                    <Link to={"/Text"} className="nav-link">
                      Text
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Checkbox"} className="nav-link">
                      Checkbox
                    </Link>
                  </li>
                </ul>
              </nav>
              <hr />
              <Switch>
                <Route exact path="/Text" component={Text} />
                <Route path="/Checkbox" component={CheckboxApp} />
              </Switch>
            </div>
          </Router>*/
