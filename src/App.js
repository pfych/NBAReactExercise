import React from 'react'
import './App.css'
import PlayerSearch from './Elements/PlayerSearch'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className="heading">NBA React Exercise</h1>
        <hr />
        <div className="row">
          <div className="col-lg-6 center">
            <PlayerSearch />
          </div>
        </div>
      </div>
    )
  }
}

export default App