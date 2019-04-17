import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
// import Users from './Users';
// import App2 from './App2';

// import Practice from './Practice'
// import Areeb from './Areeb';
// import EighteenMarch from "./eighteen-march";
// import Conditional from "./Conditional";

class App extends React.Component {
  state = {
    loggedin: false
  };

  handleLogin = () => {
    this.setState({ loggedin: !this.state.loggedin });
  };

  render() {
    return (
      <div>
        {this.state.loggedin ? (
          <Dashboard handleLogin={this.handleLogin} />
        ) : (
          <Login handleLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleLogin}>
          Username
          <br />
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          Password
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <button>Click me</button>
        </form>
      </div>
    );
  }
}

const Dashboard = props => {
  return (
    <div>
      Dashboard Page
      <button onClick={props.handleLogin}> Log out</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
