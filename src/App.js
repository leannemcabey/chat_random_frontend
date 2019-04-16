import React, { Component } from "react";
import io from "socket.io-client";
import Signin from './components/Signin'
import WaitingRoom from './components/WaitingRoom'
import Chat from './components/Chat'

class App extends Component {
  constructor() {
    super()
    this.state = {
      socket: null,
      nickname: null,
      match: false
    }
  }

  componentDidMount() {}

  updateUser = (nickname) => {
    this.setState({nickname})
    this.setState({socket: io('http://localhost:9000/')})
  }

  updateMatch = () => {
    this.setState({match: true})
  }

  unmatch = () => {
    this.setState({match: false})
  }

  render() {
    return (
      <div>
        {this.state.match ? <Chat unmatch={this.unmatch} socket={this.state.socket} match={this.state.match}/> : this.state.nickname ? <WaitingRoom updateMatch={this.updateMatch} socket={this.state.socket} /> : <Signin updateUser={this.updateUser}/>}
      </div>
    );
  }
}

export default App;
