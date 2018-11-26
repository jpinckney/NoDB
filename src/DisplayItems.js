import React, { Component } from "react"
import axios from 'axios'

class DisplayItems extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('/api/itemList')
      .then((response) => {
        this.setState({
          items: response.data
        })
      })
  }

  onClickHandler(item) {
    axios.post('/api/inventory', { "id": item.id })
      .then(response => {
        window.location.reload()
      })
  }

  render() {
    return this.state.items.map(i => {
      return <p onClick={() => this.onClickHandler(i)} className="pointer">{i.name}</p>
    })
  }

}

export default DisplayItems