const lodash = require('lodash')
/**
 * 
 * @param {string[]} values 
 */
module.exports.computeLevel1 = (values) => {
  const stream = values[0]
  for (let i = 0; i < stream.length; i++) {
    const marker = stream.slice(i, i + 4)
    if (lodash.uniq(marker.split('')).length === 4) {
      return i + 4
    }
  }
  return stream
}
module.exports.computeLevel2 = (values) => {
  const stream = values[0]
  for (let i = 0; i < stream.length; i++) {
    const marker = stream.slice(i, i + 14)
    if (lodash.uniq(marker.split('')).length === 14) {
      return i + 14
    }
  }
  return stream
}
