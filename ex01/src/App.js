import React, { Component } from "react";
class App extends React.Component {
  setMyStorage() {
    document.cookie = "Year = 2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Dugme</button>
      </div>
    );
  }
}

export default App;
