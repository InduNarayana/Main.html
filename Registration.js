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
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      password: null,
      email: null,
      organisation:null,
      formErrors: {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        organisation: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("Form invalid - Display error msg");
      
    }
    const user={
        firstname: this.state.firstName,
        lastname:this.state.lastName,
        password: this.state.password,
        email:this.state.email,
        organisation:this.state.organisation
    }
    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "Minimum 3 characters required"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 && value.length > 0
            ? "Minimum 3 characters required"
            : "";
        break;
      case "email":
        formErrors.email =
          emailRegEx.test(value) && value.length > 0
            ? ""
            : "Invalid email address";
        break;
      case "organisation":
        formErrors.organisation =
          value.length < 3 && value.length > 0 ? "Not a valid ID" : "";
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
          <h1>Registration</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className=""
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
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
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email"> email:</label>
              <input
                type="email"
                className=""
                placeholder="email@gmail.com"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="organisation">
              <label htmlFor="organisation">organisation:</label>
              <input
                type="text"
                className=""
                placeholder="organisation_name"
                name="organisation"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.organisation.length > 0 && (
                <span className="errorMessage">{formErrors.organisation}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already have an account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;