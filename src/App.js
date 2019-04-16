import React, { Component } from "react";
import io from "socket.io-client";
import Signin from './components/signin'
import Chat from './components/chat'

class App extends Component {
  constructor() {
    super()
    this.state = {
      nickname: null,
      socket: null
    }
  }

  componentDidMount() {
    this.setState({socket: io('http://localhost:9000/')})
  }

  updateUser = (nickname) => {
    this.setState({nickname})
  }

  render() {
    return (
      <div>
        {this.state.nickname ? <Chat socket={this.state.socket}/> : <Signin updateUser={this.updateUser}/>}
      </div>
    );
  }
}

export default App;
