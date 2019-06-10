function sumArray(stat) {
  if (stat == null) return
  return stat.reduce((a, b) => a + b, 0)
}

export default sumArray