const lodash = require('lodash')
/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const data = [{ cycle: 1, x: 1 }]
  values.forEach(line => {
    const state = data[data.length - 1]
    data.push({ cycle: state.cycle + 1, x: state.x })
    if (line.startsWith('addx')) {
      const v = +line.split(' ')[1]
      data.push({ cycle: state.cycle + 2, x: state.x + v })
    }
  })
  return data
    .filter((a) => a.cycle === 20 || a.cycle === 60 || a.cycle === 100 || a.cycle === 140 || a.cycle === 180 || a.cycle === 220)
    .reduce((p, c) => p + c.cycle * c.x, 0)
}
/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const data = [{ cycle: 1, x: 1 }]
  values.forEach(line => {
    const state = data[data.length - 1]
    data.push({ cycle: state.cycle + 1, x: state.x })
    if (line.startsWith('addx')) {
      const v = +line.split(' ')[1]
      data.push({ cycle: state.cycle + 2, x: state.x + v })
    }
  })
  const lines = lodash.chunk(data, 40)
  return lines.map((line, lineNumber) => {
    let crt = ''
    line.forEach(ins => {
      const crtPosition = ins.cycle - 1 - lineNumber * 40
      if (ins.x + 1 >= crtPosition && ins.x + 1 <= crtPosition + 2) {
        crt += '#'
      } else {
        crt += '.'
      }
    })
    return crt
  }).filter((a, i) => i < 6)
    .join('\n')
}
