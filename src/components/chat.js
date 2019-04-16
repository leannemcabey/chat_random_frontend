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
      <div id='chat-wrapper'>
        <div id='chat-box'>
          <div id='message-history'>
            {this.state.messageHistory.map(msg => {
              return (
                <>
                  <p className='nickname'>{msg.split(': ')[0].toUpperCase()}</p>
                  <p className='message-text'>{msg.split(': ')[1]}</p>
                </>
              )
            })}
          </div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text' value={this.state.message} placeholder='Start typing...'/>
            <button type='submit'>&#10148;</button>
          </form>
        </div>
    </div>
    )
  }
}

export default Chat;
