import React, { Component } from "react"

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      messageHistory: []
    }
  }

  componentDidMount() {
    this.props.socket.on('chat message', msg => this.setState({
        messageHistory: [...this.state.messageHistory, msg]
      })
    )

    this.props.socket.on('unmatch', () => this.props.unmatch())
  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.socket.emit('chat message', this.props.nickname + ': ' + this.state.message)
    this.setState({message: ''})
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messageHistory.map(msg => <li>{msg}</li>)}
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
