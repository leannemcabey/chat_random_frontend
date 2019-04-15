import React, { Component } from "react"

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      messages: []
    }
  }

  // componentDidMount() {
  //   this.props.socket.on("chat message", data => this.setState({ response: data }))
  // }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({messages: [...this.state.messages, this.state.message]})
    this.props.socket.emit('chat message', this.state.message)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map(msg => <li>{msg}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' value={this.state.message} />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}

export default Chat;
