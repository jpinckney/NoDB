
import React, { Component } from "react"
import DatePicker from "react-datepicker"
import NavBar from "./NavBar"
// import SideBar from "./SideBar"
import Attack from "./Attack"
import Defense from "./Defense"
import Magic from "./Magic"
import Misc from "./Misc"
import moment from "moment"


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange} />
        <NavBar /> */}
        {/* <SideBar /> */}
        {/* <Attack />
        <Defense />
        <Magic />
        <Misc /> */}
      </div>
    );
  }
}

export default App;
