import React from 'react'
import sumArray from './Functions/sumArray'

class Stats extends React.Component {
  render () {
    let loading = this.props.stats.GP == null ? "stats loading" : "stats loaded" // Fade in animation
    return (
      <div className={loading}>
        <table className="table table-borderless">
          <tbody>
          <tr>
            <td className="fit">Games Played</td>
            <td className="fit">{this.props.stats.GP}</td>
          </tr>
          <tr>
            <td className="fit">3 Pointers</td>
            <td className="fit">{sumArray(this.props.stats.TPM)}/{sumArray(this.props.stats.TPA)}</td>
            <td
              className="lightText">{Math.floor(sumArray(this.props.stats.TPM) / sumArray(this.props.stats.TPA) * 100)}%
            </td>
          </tr>
          <tr>
            <td className="fit">Free Throws</td>
            <td className="fit">{sumArray(this.props.stats.FTM)}/{sumArray(this.props.stats.FTA)}</td>
            <td
              className="lightText">{Math.floor(sumArray(this.props.stats.FTM) / sumArray(this.props.stats.FTA) * 100)}%
            </td>
          </tr>
          <tr>
            <td className="fit">Points</td>
            <td className="fit">{sumArray(this.props.stats.PTS)}</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Stats