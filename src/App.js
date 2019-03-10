import React, { Component } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="card">
        <img src="/images/img_avatar.png" alt="Avatar" style = {{width: '100%'}} />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default App;
