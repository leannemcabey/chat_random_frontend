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
        <h1 id='welcome'>Welcome to Chat Random!</h1>
        <h3>Enter your nickname below to get matched with a random user and chat.</h3>
      <form id='nickname-form' onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' value={this.state.nickname}/>
          <br />
          <button type='submit'>Let's Chat!</button>
        </form>
      </div>
    )
  }
}

export default Signin;
