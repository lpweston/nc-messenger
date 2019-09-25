import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form>
        <label>
          Username: <input></input>
        </label>
        <br />
        <br />
        <label>
          Image url: <input></input>
        </label>
        <br />
        <br />
        <button>Login</button>
      </form>
    );
  }
}

export default Login;
