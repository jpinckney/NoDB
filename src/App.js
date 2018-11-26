
import React, { Component } from "react"
// import NavBar from "./NavBar"
// import SideBar from "./SideBar"



import './App.css';
import DisplayItems from "./DisplayItems";
import DisplayInventory from "./DisplayInventory";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="list">
          <h6>This is my list of items</h6>
          <DisplayItems />
        </div>
        <div className="list">
          <h1>This is my Inventory</h1>
          <DisplayInventory />
        </div>
      </div>
    );
  }
}

export default App;
