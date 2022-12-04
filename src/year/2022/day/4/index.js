const lodash = require('lodash')
module.exports.computeLevel1 = (values) => {
  return values.map(line => {
    return line.split(',').map(a => a.split('-').map(b => +b))
  }).reduce((previous, curr) => {
    if (curr[0][0] >= curr[1][0] && curr[0][1] <= curr[1][1]) {
      return previous + 1
    }
    if (curr[1][0] >= curr[0][0] && curr[1][1] <= curr[0][1]) {
      return previous + 1
    }
    return previous
  }, 0)
}
module.exports.computeLevel2 = (values) => {
  return values.map(line => {
    return line.split(',')
      .map(a => a.split('-').map(b => +b))
      .map(arr => {
        const a = []
        for (let i = arr[0]; i <= arr[1]; i++) {
          a.push(i)
        }
        return a
      })
  }).reduce((p, c) => {
    if (lodash.intersection(c[0], c[1]).length > 0) {
      return p + 1
    }
    return p
  }, 0)


}
