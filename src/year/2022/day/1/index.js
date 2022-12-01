module.exports.computeLevel1 = (values) => {
  let max = 0
  let sum = 0
  for (let i = 0; i < values.length; i++) {
    if (values[i] === "") {
      max = Math.max(sum, max)
      sum = 0
    } else {
      sum += +values[i]
    }
  }
  return max
}
module.exports.computeLevel2 = (values) => {
  let max = [0, 0, 0]
  let sum = 0
  for (let i = 0; i < values.length; i++) {
    if (values[i] === "") {
      max.push(sum)
      max.sort((a, b) => a - b)
      max.shift()
      sum = 0
    } else {
      sum += Number.parseInt(values[i])
    }
  }
  return max.reduce((a, c) => a + c, 0)
}
