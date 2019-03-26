import React, { Component } from "react";
import "./App.css";

class Conditional extends Component {
  state = {
    time: ""
  };

  componentDidMount = () => {
    setInterval(()=> {
        this.setState({
            time: new Date().getSeconds()
        })
    }, 1000)
  };

  render() {
      console.log(this.state.time)
    return <div>
        {this.state.time}
    </div>;
  }
}

export default Conditional;
