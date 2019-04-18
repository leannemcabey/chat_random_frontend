import React, { Component } from "react"

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      messageHistory: [],
      messageHistoryDiv: null
    }
  }

  componentDidMount() {
    this.setState({
      messageHistoryDiv: document.getElementById('message-history')
    })

    this.props.socket.on('chat message', msg => this.setState({
        messageHistory: [...this.state.messageHistory, msg]
      })
    )

    this.props.socket.on('unmatch', () => this.props.unmatch())
  }

  componentDidUpdate() {
    this.state.messageHistoryDiv.scrollTop = this.state.messageHistoryDiv.scrollHeight
  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.message != '') {
      this.props.socket.emit('chat message', this.props.nickname + ': ' + this.state.message)
      this.setState({message: ''})
    }
  }

  render() {
    return (
      <div id='chat-wrapper'>
        <div id='chat-box'>
          <a href='http://localhost:3000/'><img src={require('../images/x-icon.svg')} /></a>
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
        <div id='bored'>
          <span>Bored? Type</span>
          <span id='hop'>'/hop'</span>
          <span>to find a new chat.</span>
        </div>
      </div>
    )
  }
}

export default Chat;
