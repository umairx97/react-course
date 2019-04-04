import React, { Component } from "react";
import "./App.css";

class Conditional extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  // componentWillMount() {
  //   let name = "Umair";
  //   localStorage.setItem("abc", name);
  // }

  // checkLogin = () => {
  //   let a = localStorage.getItem("abc");
  //   if (a === "Umair") {
  //     this.setState({
  //       loggedin: 'Yes'
  //     });
  //     console.log("you are already logged in");
  //   } else {
  //     console.log("Sorry please log in");
  //   }
  // };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  isFormEmpty = () => {
    return this.state.username && this.state.password;
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormEmpty()) {
      console.log("Form is not empty");
    } else {
      this.setState({
        error: "Your form is empty"
      });
    }
    if (this.state.username.length > 5 && this.state.password.length > 5) {
      console.log("Good Username and password");
      this.setState({
        error: ""
      });
    } else {
      this.setState({
        error: "Fix your username or password"
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />

          <button>Login</button>

          <p style={{ color: "red" }}>{this.state.error}</p>
        </form>
      </div>
    );
  }
}

export default Conditional;
