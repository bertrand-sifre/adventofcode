/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const paths = values
    .map(line => line.split(' -> ').map(a => {
      const s = a.split(',')
      return { x: +s[0], y: +s[1] }
    }))
  const minX = Math.min(...paths.flat().map(a => a.x))
  const maxX = Math.max(...paths.flat().map(a => a.x))
  const maxY = Math.max(...paths.flat().map(a => a.y))
  // create cave
  /** @type {string[][]} */
  const cave = Array(maxY + 1).fill(0).map(a => Array(maxX - minX + 1).fill('.'))

  // add rocks
  paths.forEach(path => {
    for (let i = 0; i < path.length - 1; i++) {
      const segment = [path[i], path[i + 1]].sort((a, b) => b.x - a.x + b.y - a.y)
      const p1 = segment[0]
      const p2 = segment[1]
      if (p1.x === p2.x) {
        cave.forEach((line, y) => {
          if (y >= p2.y && y <= p1.y) {
            line[p1.x - minX] = '#'
          }
        })
      }
      if (p1.y === p2.y) {
        cave[p1.y].splice(p2.x - minX, p1.x - p2.x + 1, ...Array(p1.x - p2.x + 1).fill('#'))
      }
    }
  })

  // add sand
  const sandSpawner = { y: 0, x: 500 - minX }
  cave[sandSpawner.y][sandSpawner.x] = '+'

  let next = true
  let nbSand = 0
  while (next) {
    const sand = { x: sandSpawner.x, y: sandSpawner.y }
    let notBlocked = true
    // now apply gravity
    while (notBlocked) {
      if (cave[sand.y + 1] === undefined || cave[sand.y + 1][sand.x - 1] === undefined || cave[sand.y + 1][sand.x + 1] === undefined) {
        next = false
        notBlocked = false
      } else if (cave[sand.y + 1][sand.x] === '.') {
        sand.y++
      } else if (cave[sand.y + 1][sand.x - 1] === '.') {
        sand.y++
        sand.x--
      } else if (cave[sand.y + 1][sand.x + 1] === '.') {
        sand.y++
        sand.x++
      } else {
        cave[sand.y][sand.x] = 'o'
        notBlocked = false
        nbSand++
      }
    }
  }

  return nbSand
}
/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const paths = values
    .map(line => line.split(' -> ').map(a => {
      const s = a.split(',')
      return { x: +s[0], y: +s[1] }
    }))
  const floorX = 200
  const minX = Math.min(...paths.flat().map(a => a.x)) - floorX
  const maxX = Math.max(...paths.flat().map(a => a.x)) + floorX
  const maxY = Math.max(...paths.flat().map(a => a.y))
  const floorY = maxY + 1
  // create cave
  /** @type {string[][]} */
  const cave = Array(floorY + 1).fill(0).map(a => Array(maxX - minX + 1).fill('.'))
  cave.push(Array(maxX - minX + 1).fill('#'))
  // add rocks
  paths.forEach(path => {
    for (let i = 0; i < path.length - 1; i++) {
      const segment = [path[i], path[i + 1]].sort((a, b) => b.x - a.x + b.y - a.y)
      const p1 = segment[0]
      const p2 = segment[1]
      if (p1.x === p2.x) {
        cave.forEach((line, y) => {
          if (y >= p2.y && y <= p1.y) {
            line[p1.x - minX] = '#'
          }
        })
      }
      if (p1.y === p2.y) {
        cave[p1.y].splice(p2.x - minX, p1.x - p2.x + 1, ...Array(p1.x - p2.x + 1).fill('#'))
      }
    }
  })

  // add sand
  const sandSpawner = { y: 0, x: 500 - minX }
  cave[sandSpawner.y][sandSpawner.x] = '+'

  let next = true
  let nbSand = 0
  while (next) {
    const sand = { x: sandSpawner.x, y: sandSpawner.y }
    let notBlocked = true
    // now apply gravity
    while (notBlocked) {
      if (cave[sand.y + 1][sand.x - 1] === 'o' && cave[sand.y + 1][sand.x + 1] === 'o' && cave[sand.y][sand.x] === '+') {
        next = false
        notBlocked = false
        cave[sand.y][sand.x] = 'o'
        nbSand++
      } else if (cave[sand.y + 1][sand.x] === '.') {
        sand.y++
      } else if (cave[sand.y + 1][sand.x - 1] === '.') {
        sand.y++
        sand.x--
      } else if (cave[sand.y + 1][sand.x + 1] === '.') {
        sand.y++
        sand.x++
      } else {
        cave[sand.y][sand.x] = 'o'
        nbSand++
        notBlocked = false
      }
    }
  }

  return nbSand
  // return cave
  //   .map(l => l.join('')).join('\n')
}
