import React, { Component } from 'react'
import {connect} from 'react-redux'
import User from './User';


class App extends Component {

  render() {
    return (
      <div>
        Hello my name is {this.props.isLoggedin}
        <User/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { 
    isLoggedin: state.user_reducer.isLoggedin
  }

}

export default connect(mapStateToProps,null)(App)