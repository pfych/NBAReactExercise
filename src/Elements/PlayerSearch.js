import React from 'react'
import Player from './Player'
import SearchPlayer from './Functions/SearchPlayer'

class PlayerSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {text: "", players: []}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="search" type="text" placeholder="Player Name" onChange={this.handleChange} value={this.state.text}/><br />
            <button className="btn btn-outline-dark search">Search</button>
          </div>
        </form>
        {this.state.players.map(item => <Player key={item.id} id={item.id} item={item} />)}
      </div>
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault(); // Dont refresh page
    if (!this.state.text.length) { this.setState({players: []}); return; }
    let data = await SearchPlayer(this.state.text)
    this.setState({players: data})
  }
}

export default PlayerSearch