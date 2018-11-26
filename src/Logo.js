import React, { Component } from "react"

class Logo extends Component {

  render() {
    return (
      <div className="champIcon">
        <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Brand.png" alt="Brand is my fav champion" />
        {this.props.username}
        <input placeholder="change your username" 
        onChange={event => this.props.updateInput(event)}/>
        <button onClick={()=> this.props.onClickHandler2()}>Click to Change</button>
      </div>
    )
  }
}
export default Logo