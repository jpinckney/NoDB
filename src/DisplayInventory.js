import React, { Component } from "react"
import axios from 'axios'

class DisplayInventory extends Component {

  constructor() {
    super()
    this.state = {
      myInventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory')
      .then((response) => {
        this.setState({
          myInventory: response.data
        })
      })
  }

  render() {
    return this.state.myInventory.map(i => {
      return <p>{i.name}</p>
    })
  }





}

export default DisplayInventory