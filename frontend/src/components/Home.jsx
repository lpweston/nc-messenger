import React, { Component } from "react";
import Users from "./Users";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <main>
          <ul>
            <li>Dave: hello</li>
            <li>Sarah: hi</li>
          </ul>
          <form>
            <label>
              new message: <input></input>
              <button>Submit</button>
            </label>
          </form>
        </main>
        <Users />
      </div>
    );
  }
}

export default Home;
