import React from 'react'
import Stats from './Stats'
import getPlayerStats from './Functions/getPlayerStats'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {stats:{}}
  }

  async componentDidMount() {
    this.setState({stats: await getPlayerStats(this.props.id)})

  }

  render () {
    if(this.state.stats.GP === 0) return (<div></div>) // Remove players who did not play in this season
    return (
      <div className="playerCard">
        <div className="details">
          <div className="playerName">
            {this.props.item.first_name} {this.props.item.last_name}
          </div>
          <div className="playerTeam">
            {this.props.item.team.full_name}
          </div>
        </div>
        <Stats stats={this.state.stats}/>
      </div>
    )
  }
}

export default Player