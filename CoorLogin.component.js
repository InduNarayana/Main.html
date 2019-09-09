import React, { Component } from "react";
import "./Reg.css";
import axios from "axios";
const emailRegEx = RegExp(
  /^[a-zA-Z0-9.!#$%&*/?^_`{\}"~.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
};
class CoorLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      organisation: null,
      formErrors: {
        email: "",
        password: "",
        organisation: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
        --SUBMITTING--
        email: ${this.state.email}
        Password: ${this.state.password}
        organisation: ${this.state.organisation}
      `);
    } else {
      console.error("Form invalid - Display error msg");
    }
    const user={
        email:this.state.email,
        password: this.state.password,
        organisation:this.state.organisation
    }
      axios.get('http://localhost:5000/users/',user)
      .then(response => {
        if (user.email in response.data) {
          console.log("Valid user");
        }
        //console.log(response.data);
      })
    
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "organisation":
        formErrors.organisation =
          value.length < 3 && value.length > 0 ? "Not a valid ID" : "";
        break;
      case "email":
        formErrors.email =
          emailRegEx.test(value) && value.length > 0
            ? ""
            : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 && value.length > 0
            ? "Minimum 6 characters required"
            : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Coordinator Login</h1>
          
            <div className="email">
              <label htmlFor="email"> E-mail:</label>
              <input
                type="email"
                className=""
                placeholder="email@gmail.com"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className=""
                placeholder="Password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <form onSubmit={this.handleSubmit} noValidate>
            <div className="organisation">
              <label htmlFor="organisation">organisation:</label>
              <input
                type="text"
                className=""
                placeholder="organisation"
                name="organisation"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="Login">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CoorLogin;