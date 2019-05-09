import React, { Component } from 'react'
import { connect } from 'react-redux';
import {changeUser} from './action/user_action'

 class User extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        Hello this is user component {this.props.name} {this.props.age}

        <button onClick = {this.props.changeUser}>Click me to change state</button>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
    return { 
      name: state.user_reducer.isLoggedin,
      age: state.user_reducer.age
    }
  
  }
  
  export default connect(mapStateToProps,{changeUser})(User)