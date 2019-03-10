import React, { Component } from "react";

const Product = [
  {
    id: 1,
    name: "sunsilk",
    price: 20,
    quantity: 2,
    total: null
  },
  {
    id: 2,
    name: "shoe polish",
    price: 30,
    quantity: 4,
    total: null
  },
  {
    id: 3,
    name: "biscuit",
    price: 40,
    quantity: 5,
    total: null
  }
];

let maxTotal = null;

// const Product = {
//   id: 1,
//   name: "sunsilk",
//   price: 20,
//   quantity: 3,
//   total: null
// };

class App2 extends Component {
  render() {
    return (
      <div>
        {Product.map(item => {
          return (
            <div key={item.id}>
              {item.name}

              {item.price * item.quantity}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App2;
