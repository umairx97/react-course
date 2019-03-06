import React,{Component} from "react";

const App = () => {
  return (
    <div>
      <Umair name="asdas" id="2101" Profession="developer" />
    </div>
  );
};

export default App;

class Umair extends Component {
  render() {
    return (
      <h1>
        Hello my name is {this.props.name} my id is {this.props.id} and my profession is{" "}
        {this.props.Profession}
        {" "}
      </h1>
    );
  }
}

const Umair = (props) => {
  return (
    <h1>
      Hello my name is {props.name} my id is {props.id} and my profession is {props.Profession}
    </h1>
  )
}
