/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const grid = values.map(a => a.split('').map(a => +a))
  return grid.map((line, i) => {
    return line.reduce((previousValue, currentValue, j) => {
      if (j - 1 < 0 || i - 1 < 0 || j + 1 > line.length - 1 || i + 1 > grid.length - 1) return 1 + previousValue
      // compare to left
      if (currentValue > Math.max(...line.slice(0, j))) return 1 + previousValue
      // compare to right
      if (currentValue > Math.max(...line.slice(j + 1))) return 1 + previousValue

      const column = grid.map((l) => l.filter((x, li) => li === j)).flat()
      // compare to top
      if (currentValue > Math.max(...column.slice(0, i))) return 1 + previousValue
      // compare to bottom
      if (currentValue > Math.max(...column.slice(i + 1))) return 1 + previousValue
      return previousValue
    }, 0)
  }).reduce((a, b) => a + b, 0)
}

const getDistance = (array, height) => {
  let finish = false
  return array.filter(v => {
    if (finish) {
      return false
    }
    if (v >= height) {
      finish = true
      return true
    }
    return true
  }).length
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const grid = values.map(a => a.split('').map(a => +a))
  return Math.max(...grid.map((line, i) => {
    return line.map((currentValue, j) => {
      let sum = [1, 1, 1, 1]
      if (j - 1 < 0 || i - 1 < 0 || j + 1 > line.length - 1 || i + 1 > grid.length - 1) return 0
      // compare to left
      const left = line.slice(0, j).reverse()
      sum[0] = getDistance(left, currentValue)
      // compare to right
      const right = line.slice(j + 1)
      sum[1] = getDistance(right, currentValue)

      const column = grid.map((l) => l.filter((x, li) => li === j)).flat()
      // compare to top
      const top = column.slice(0, i).reverse()
      sum[2] = getDistance(top, currentValue)
      //compare to bottom
      const bot = column.slice(i + 1)
      sum[3] = getDistance(bot, currentValue)

      return sum.reduce((a, b) => a * b)
    }, 0)
  }).flat())
}