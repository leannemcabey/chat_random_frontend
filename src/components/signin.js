import React, { Component } from "react"

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: ''
    }
  }

  handleChange = (event) => {
    this.setState({nickname: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateUser(this.state.nickname)
  }

  render() {
    return (
      <div>
        <h1>Enter your nickname below to chat!</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' value={this.state.nickname}/>
        <button type='submit'>Let's Chat!</button>
        </form>
      </div>
    )
  }
}

export default Signin;
