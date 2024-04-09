import React, { Component } from 'react'

export default class Class_LeTuanTinh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Le Tuan Tinh",
            class:"K22CNTT1"
        }
    }
    user = {
        name: "Le Tuan Tinh",
        age: 20
    }
    // Ham xu ly
    handleChange = (event) => {
        this.setState({
            fullName:"New Name"
        })
    }
  render() {
    return (
      <div>
        <h2>
            Class Component demo
            {this.user.name} - {this.user.age}
        </h2>
        <hr/>
        <h3>
            info: {this.props.info}
            time: {this.props.time}
        </h3>

        <hr/>
        <h3>
            State:
            FullName: {this.state.fullName}
            Class: {this.state.class}
        </h3>
        <button onclick={this.handleChange()}>
            Change Name
        </button>
      </div>
    )
  }
}
