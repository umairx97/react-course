import React, { Component } from 'react'
export default class App extends Component {
  state = {
    data: [
      {
        elem: 'Facebook',
        Facebook: {
          attr: ['Followers', 'Likes', 'Reactions']
        }
      },

      {
        elem: 'Instagram',
        Instagram: {
          attr: ['Views', 'Likes', 'Followers']
        }
      },
    ],

    currVal: ''
  }




  render() {
    const { data, currVal } = this.state
    const attrs = this.state.data.filter(item => item[currVal]);
    console.log(this.state)
    return (
      <div>

        <select onChange={(ev) => this.setState({ currVal: ev.target.value })}>
          <option disabled value="Select">Select</option>
          {data.map(item => (
            <option key={item.elem}>{item.elem}</option>
          ))
          }
        </select>

        <select onChange={(ev) => this.setState({ secondVal: ev.target.value })}>

          {attrs.map(item => {
            return item[currVal].attr.map(item => (
              <option key={item} value={item}>{item}</option>
            ))
          })}

        </select>


        





      </div>
    )
  }
}
