import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  state = {
    users: []
  }


  componentDidMount() {
    axios.get('https://express-heroku-dev.herokuapp.com/users').then(res => {
      this.setState({ 
        users: res.data.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  send = () => {
    axios.post('https://express-heroku-dev.herokuapp.com/api/users', {
      username: 'AshirArain',
      email: 'ashirarain@axiom.com',
      age: 20,
      profession: 'Developer'
    }).then(res => {
      this.setState({ 
        users: [...this.state.users, res.data.data]
      })
    }).catch(err => console.log(err.response.data))
  }

  render() {
    console.table(this.state.users)

    const {users} = this.state;
    return (
      <div>
      


      {users.map(item => ( 
        <div key = {item._id}>
          <h1>Username: {item.username}</h1>
          <h2>Email: {item.email}</h2>
          <h2>Profession: {item.profession}</h2>
        </div>
      ))}
        <button onClick={this.send}>Click me to post data</button>
      </div>
    )
  }
}
