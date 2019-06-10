import axios from 'axios'

async function getPlayerStats(id) {
  let stats = {
    GP: 0,
    TPA: [],
    TPM: [],
    FTA: [],
    FTM: [],
    PTS: []
  }
  let season = "2018"
  let data = (await axios.get(`https://www.balldontlie.io/api/v1/stats?player_ids[]=${id}&seasons[]=${season}&per_page=100`)).data.data
  data.forEach(game => { // Compile all stats into object
    if(game.min == null) return // If no Data
    if(game.min === "0:00") return // If Game wasn't played
    stats.GP++
    stats.TPA.push(game.fg3a)
    stats.TPM.push(game.fg3m)
    stats.FTA.push(game.fta)
    stats.FTM.push(game.ftm)
    stats.PTS.push(game.pts)
  })
  console.log(stats)
  return stats
}

export default getPlayerStats