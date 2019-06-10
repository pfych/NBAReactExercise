import axios from 'axios'

async function SearchPlayer(player) {
  let data = (await axios.get(`https://www.balldontlie.io/api/v1/players?search=${player}`)).data
  return data.data
}

export default SearchPlayer