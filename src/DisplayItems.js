import React, { Component } from "react"
import axios from 'axios'

class DisplayItems extends Component {

  

 

  deleteItem(){
    axios.delete('/api/inventory',  )
  }

  render() {
    return this.props.items.map(i => {
      return <p onClick={() => this.props.onClickHandler(i)} className="pointer">{i.name}</p>
    })
  }

}

export default DisplayItems