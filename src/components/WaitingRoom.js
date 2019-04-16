import React, { Component } from "react"

class WaitingRoom extends Component {

  componentDidMount() {
    this.props.socket.on('match', () => this.props.updateMatch())
  }

  render() {
    return (
      <div>
        <div id='waiting-room-message'>
          <h2>Uh oh, there's no one available to chat!</h2>
          <h1>Hang tight while we wait for someone to sign on...</h1>
        </div>
        <img id='waiting-doggo' src={require('../images/waiting-doggo.gif')} alt='waiting-doggo'/>
      </div>
    )
  }
}

export default WaitingRoom;
