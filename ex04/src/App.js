import React, { Component } from "react";
class App extends Component {
  setLocalStorage() {
    localStorage.setItem("Arena", "Selection Month");
  }

  getLocalStorage() {
    const myLocalStorage = localStorage.getItem("Arena");
    return myLocalStorage;
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Button</button>
        <button onClick={this.getLocalStorage}>Button 2</button>
      </div>
    );
  }
}

export default App;
