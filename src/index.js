import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const Home = props => {
  console.log(props);
  return <div>This is a home page</div>;
};

const About = props => {
  console.log(props);

  return <div>This is a about page</div>;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/about">Goto about page</Link>
          <Link to="/">Goto Home page</Link>
          <Switch>
            <Route path="/" exact render={() => <Home name="umair" />} />
            <Route path="/about" exact component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
