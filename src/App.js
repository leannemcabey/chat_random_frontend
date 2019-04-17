import React, { Component } from "react";
import io from "socket.io-client";
import Signin from './components/Signin'
import WaitingRoom from './components/WaitingRoom'
import Chat from './components/Chat'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      socket: null,
      nickname: null,
      match: false
    }
  }

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
      <div id='main-div'>
        <header>
          <a href='http://localhost:3000/'>Chat Random <span role='img' aria-label='chat-emoji'>💬</span></a>
        </header>
        {this.state.match ? <Chat unmatch={this.unmatch} socket={this.state.socket} match={this.state.match} nickname={this.state.nickname}/> : this.state.nickname ? <WaitingRoom updateMatch={this.updateMatch} socket={this.state.socket} /> : <Signin updateUser={this.updateUser}/>}
      </div>
    );
  }
}

export default App;
