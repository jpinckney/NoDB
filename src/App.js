
import React, { Component } from "react"
import Picturebackground from "./Picturebackground"
import Logo from "./Logo"
import './App.css';
import DisplayItems from "./DisplayItems";
import DisplayInventory from "./DisplayInventory";
import axios from 'axios'

// import NavBar from "./NavBar"
// import SideBar from "./SideBar"



class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      myInventory: [],
      username: "",
      userInput: ""
    }
    this.onClickHandler = this.onClickHandler.bind(this)
    this.deleteItems = this.deleteItems.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.onClickHandler2 = this.onClickHandler2.bind(this)
  }

  componentDidMount() {
    axios.get('/api/itemList')
      .then((response) => {
        this.setState({
          items: response.data
        })
      })

    axios.get('/api/username')
      .then((response) => {
        this.setState({
          username: response.data
        })
      })

    axios.get('/api/inventory')
      .then((response) => {
        this.setState({
          myInventory: response.data
        })
      })
  }

  onClickHandler(item) {
    axios.post('/api/inventory', { "id": item.id })
      .then(response => {
        console.log(response)
        this.setState({
          myInventory: response.data
        })
      })
  }

  deleteItems(id) {
    axios.delete(`/api/inventory/${id}`)
      .then((response) => {
        this.setState({
          myInventory: response.data
        })
      })
  }

  updateInput(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  onClickHandler2(){
    axios.put('/api/updateusername',{newName: this.state.userInput})
  }


  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="list">
          <h1>This is my list of items</h1>
          <DisplayItems
            items={this.state.items}
            onClickHandler={this.onClickHandler} />
        </div>
        <div className="list">
          <h1>This is my Inventory</h1>
          <DisplayInventory
            myInventory={this.state.myInventory}
            deleteItems={this.deleteItems} />
        </div>
        <div>
          <Picturebackground />
        </div>
        <div>
          <Logo
            username={this.state.username}
            updateInput={this.updateInput}
            onClickHandler2={this.onClickHandler2} />
        </div>
      </div>
    );
  }
}


export default App;
