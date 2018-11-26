import React, { Component } from "react"
// import axios from "axios"

class DisplayInventory extends Component {

  constructor() {
    super()
    this.state = {
      myInventory: []
    }
  }

  render() {
    return this.props.myInventory.map(i => {
      return <p onClick={()=>this.props.deleteItems(i.id) }className="pointer2">{i.name}</p>
    })
  }





}

export default DisplayInventory