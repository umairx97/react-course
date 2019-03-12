import React from "react";
import "./mycard.css";

const Users = [
  {
    id: 1,
    imageUrl: "/images/team2.jpg",
    name: "Umair",
    designation: "developer",
    University: "Indus University"
  },
  {
    id: 2,
    imageUrl: "/images/team2.jpg",
    name: "Asad",
    designation: "developer",
    University: "Indus University"
  },
  {
    id: 3,
    imageUrl: "/images/team2.jpg",
    name: "Shahbaz",
    designation: "developer",
    University: "Indus University"
  }
];

const Practice = () => {
  return (
    <div>
      {Users.map(user => (
        <div className="card">
          <img src={user.imageUrl} alt="John" style={{ width: "100%" }} />
          <h1>{user.name}</h1>
          <p class="title">{user.designation}</p>
          <p>{user.University}</p>
          <a href="#">
            <i class="fa fa-dribbble" />
          </a>
          <a href="#">
            <i class="fa fa-twitter" />
          </a>
          <a href="#">
            <i class="fa fa-linkedin" />
          </a>
          <a href="#">
            <i class="fa fa-facebook" />
          </a>
          <p>
            <button>Contact</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Practice;
