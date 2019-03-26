import React, { Component } from "react";
import "./App.css";

class Conditional extends Component {
  state = {
    name: "Ashir",
    data: []
  };

  handleName = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json =>
        this.setState({
          data: [...this.state.data, json]
        })
      );
  };

  render() {
    return (
      <div>
        <button className="btn">Click me to change state</button>

        {/* <br />
        {this.state.name}

        {this.state.data.map(item => (
          <p key={item.id}>{item.title}</p>
        ))} */}
      </div>
    );
  }
}

export default Conditional;
