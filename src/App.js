import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Signin from './components/signin'
import Chat from './components/chat'

class App extends Component {
  constructor() {
    super();
    this.state = {
      nickname: null,
      // response: 'original value',
      endpoint: "http://localhost:9000/",
      socket: null
    };
  }

  componentDidMount() {
    this.setState({socket: socketIOClient(this.state.endpoint)})
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
