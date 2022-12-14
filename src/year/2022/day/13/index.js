const lodash = require('lodash')

const recursiveCompare = (p1, p2) => {
  if (p1 === undefined) {
    return -1
  }
  if (p2 === undefined) {
    return 1
  }
  if (Number.isInteger(p1) && Number.isInteger(p2)) {
    return p1 === p2 ? 'continue' : p2 > p1 ? -1 : 1
  }
  if (Array.isArray(p1) && Array.isArray(p2)) {
    let previous = 'continue'
    for (let i = 0; i < Math.max(p1.length, p2.length) && previous === 'continue'; i++) {
      previous = recursiveCompare(p1[i], p2[i])
    }
    return previous
  }
  if (Array.isArray(p1)) {
    return recursiveCompare(p1, [p2])
  }
  if (Array.isArray(p2)) {
    return recursiveCompare([p1], p2)
  }
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  return lodash
    .chunk(values, 3) // group by 3 line
    .map(pairs => [eval(pairs[0]), eval(pairs[1])]) // eval the pair
    .map(v => recursiveCompare(v[0], v[1]))
    .reduce((prev, cur, i) => {
      if (cur < 0) {
        return prev + i + 1
      }
      return prev
    }, 0)
}
/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  return lodash
    .chunk(values, 3) // group by 3 line
    .map(pairs => [eval(pairs[0]), eval(pairs[1])]) // eval the pair
    .concat([[[[2]]], [[[6]]]])
    .flat()
    .sort(recursiveCompare)
    .map(a => JSON.stringify(a))
    .reduce((prev, cur, i) => {
      if (cur === '[[6]]' || cur === '[[2]]') {
        return prev * (i + 1)
      }
      return prev
    }, 1)
}
