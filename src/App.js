import React, { Component } from "react";
import { connect } from "react-redux";
import { userAction } from "./Store/actions/userAction";

class App extends Component {
  handleClick = () => {
    const obj = {
      name: "Umair",
      age: 20,
      profession: "Developer"
    };
    this.props.abc(obj);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        Hello my name is {this.props.myName}
        <button onClick={this.handleClick}>Click me to change the state</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myName: state.user_reducer.name,
    currentUser: state.user_reducer.currentUser
  };
};

const mapDipatchToProps = dispatch => {
  return {
    abc: data => {
      dispatch(userAction(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(App);
