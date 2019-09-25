import React, { Component } from "react";
import io from "socket.io-client";
import { Link } from "@reach/router";

class Login extends Component {
  state = {
    username: "",
    imageUrl: ""
  };
  render() {
    return (
      <form>
        <label>
          Username:{" "}
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
        </label>
        <br />
        <br />
        <label>
          Image url:{" "}
          <input
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          ></input>
        </label>
        <br />
        <br />
        <Link to="/home">
          <button onSubmit={this.sendChat}>Login</button>
        </Link>
      </form>
    );
  }

  sendChat = () => {
    const socket = io.connect("http://localhost:9090");
    const { username, imageUrl } = this.state;
    socket.emit("login", { username, imageUrl });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default Login;
