/**
 * 
 * @param {string[]} values 
 */
module.exports.computeLevel1 = (values) => {
  const nbColumn = (values[0].length + 1) / 4
  /** @type {string[][]} */
  const initialize = Array(nbColumn).fill(0).map(a => new Array())
  values.forEach(line => {
    if (line.startsWith('move')) {
      console.log(line)
      const match = line.match(/move ([0-9]+) from ([0-9]+) to ([0-9]+)/)
      const nb = +match[1]
      const src = +match[2]
      const dest = +match[3]
      initialize[dest - 1].unshift(...initialize[src - 1].splice(0, nb).reverse())
      // console.log(initialize)
    } else if (line.includes('[')) {
      // initiaze array
      for (let i = 0; i < nbColumn; i++) {
        const c = line.charAt(i * 4 + 1)
        if (c !== ' ') {
          initialize[i].push(c)
        }
      }
    }
  })
  return initialize.map(a => a[0]).join('')
}
module.exports.computeLevel2 = (values) => {
  const nbColumn = (values[0].length + 1) / 4
  /** @type {string[][]} */
  const initialize = Array(nbColumn).fill(0).map(a => new Array())
  values.forEach(line => {
    if (line.startsWith('move')) {
      console.log(line)
      const match = line.match(/move ([0-9]+) from ([0-9]+) to ([0-9]+)/)
      const nb = +match[1]
      const src = +match[2]
      const dest = +match[3]
      initialize[dest - 1].unshift(...initialize[src - 1].splice(0, nb))
      // console.log(initialize)
    } else if (line.includes('[')) {
      // initiaze array
      for (let i = 0; i < nbColumn; i++) {
        const c = line.charAt(i * 4 + 1)
        if (c !== ' ') {
          initialize[i].push(c)
        }
      }
    }
  })
  return initialize.map(a => a[0]).join('')
}
