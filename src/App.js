import React, { Component } from "react";
import io from "socket.io-client";
import Signin from './components/signin'
import Chat from './components/chat'

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
        {this.state.nickname ? <Chat updateMatch={this.updateMatch} unmatch={this.unmatch} socket={this.state.socket} match={this.state.match}/> : <Signin updateUser={this.updateUser}/>}
      </div>
    );
  }
}

export default App;
