import React, { Component } from "react";
import "./App.css";
const User = [
  {
    id: 1,
    name: "aashir",
    profession: "developer",
    imageUrl: "/images/img_avatar.png"
  },
  {
    id: 2,
    name: "faizan",
    profession: "teaching",
    imageUrl: "/images/img_avatar.png"
  },
  {
    id: 3,
    name: "umair",
    profession: "racer",
    imageUrl: "/images/img_avatar.png"
  },
  {
    id: 4,
    name: "umair",
    profession: "racer",
    imageUrl: "/images/img_avatar.png"
  },
];

class Users extends Component {
  render() {
    return (
      <div>
        {User.map(item => {
          return (
            <div className="card" key = {item.id}>
              <img src={item.imageUrl} style={{ width: "100%" }} alt = {item.name} />
              <div className="container">
                <h4>
                  <b>{item.name}</b>
                </h4>
                <p>{item.profession}</p>
              </div>
            </div>
          );
        })}
      </div>

    );
  }
}



export default Users;
