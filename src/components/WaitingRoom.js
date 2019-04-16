import React, { Component } from "react"

class WaitingRoom extends Component {

  componentDidMount() {
    this.props.socket.on('match', () => this.props.updateMatch())
  }

  render() {
    return (
      <div>
        You're waiting for a match.
      </div>
    )
  }
}

export default WaitingRoom;
