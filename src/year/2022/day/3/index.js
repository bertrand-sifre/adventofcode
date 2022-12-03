const lodash = require('lodash')

/**
 * 
 * @param {string[]} values 
 * @returns 
 */
module.exports.computeLevel1 = (values) => {
  return values.map(line => {
    const size = line.length / 2
    const compartment1 = line.slice(0, size).split('')
    const compartment2 = line.slice(size).split('')
    const priority = lodash.intersection(compartment1, compartment2)[0]
    return priority.charCodeAt(0) >= 97 ? priority.charCodeAt(0) - 96 : priority.charCodeAt(0) - 38 // a = 97 A=65
  }).reduce((prev, curr) => prev + curr, 0)
}
module.exports.computeLevel2 = (values) => {
  return lodash.chunk(values, 3).map(group => {
    const c1 = group[0].split('')
    const c2 = group[1].split('')
    const c3 = group[2].split('')
    const priority = lodash.intersection(c1, c2, c3)[0]
    return priority.charCodeAt(0) >= 97 ? priority.charCodeAt(0) - 96 : priority.charCodeAt(0) - 38 // a = 97 A=65
  }).reduce((prev, curr) => prev + curr, 0)
}
