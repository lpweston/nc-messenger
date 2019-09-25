import React, { Component } from "react";

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
        <div>
          Users:
          <ul>
            <li>Dave</li>
            <li>Sarah</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
