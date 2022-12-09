const printGrid = (x, y, head, tail) => {
  const grid = Array(x).fill(0).map(a => new Array(y).fill('.'))
  grid[0][0] = 's'
  grid[tail.row][tail.col] = 'T'
  grid[head.row][head.col] = 'H'
  console.log(grid.reverse().map(a => a.join('')).join('\n'))
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const motions = values
    .map(line => line.split(' '))
    .map(a => ({ dir: a[0], step: +a[1] }))
  const grid = { "0;0": true }
  const head = { row: 0, col: 0 }
  const tail = { row: 0, col: 0 }
  // printGrid(6, 6, head, tail)
  motions.forEach(motion => {
    for (let i = 0; i < motion.step; i++) {
      // move head
      if (motion.dir === 'R') {
        head.col++
      }
      if (motion.dir === 'U') {
        head.row++
      }
      if (motion.dir === 'L') {
        head.col--
      }
      if (motion.dir === 'D') {
        head.row--
      }
      // move tail
      if (Math.abs(head.row - tail.row) >= 2) {
        tail.col = head.col
        tail.row = head.row - tail.row > 0 ? tail.row + 1 : tail.row - 1
      }
      if (Math.abs(head.col - tail.col) >= 2) {
        tail.row = head.row
        tail.col = head.col - tail.col > 0 ? tail.col + 1 : tail.col - 1
      }
      grid[tail.row + ';' + tail.col] = true
      // printGrid(5, 6, head, tail)
    }
  })
  return Object.keys(grid).length
}


const printGrid2 = (x, y, rope) => {
  const grid = Array(x).fill(0).map(a => new Array(y).fill('.'))
  grid[0][0] = 's'
  for (let i = rope.length - 1; i >= 0; i--) {
    const el = rope[i]
    if (i === 0) {
      grid[el.row][el.col] = 'H'
    } else {
      grid[el.row][el.col] = i
    }
  }
  console.log(grid.reverse().map(a => a.join('')).join('\n'))
}
/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const motions = values
    .map(line => line.split(' '))
    .map(a => ({ dir: a[0], step: +a[1] }))
  const grid = { "0;0": true }
  const rope = Array(10).fill(0).map(a => ({ row: 0, col: 0 }))
  // printGrid2(6, 6, rope)
  motions.forEach(motion => {
    for (let i = 0; i < motion.step; i++) {
      // move head
      const head = rope[0]
      if (motion.dir === 'R') {
        head.col++
      }
      if (motion.dir === 'U') {
        head.row++
      }
      if (motion.dir === 'L') {
        head.col--
      }
      if (motion.dir === 'D') {
        head.row--
      }

      // move tail
      const t1 = rope[1]
      if (Math.abs(head.row - t1.row) >= 2) {
        t1.col = head.col
        t1.row = head.row - t1.row > 0 ? t1.row + 1 : t1.row - 1
      }
      if (Math.abs(head.col - t1.col) >= 2) {
        t1.row = head.row
        t1.col = head.col - t1.col > 0 ? t1.col + 1 : t1.col - 1
      }
      for (let j = 1; j < rope.length - 1; j++) {
        const top = rope[j]
        const tail = rope[j + 1]
        const rDist = Math.abs(top.row - tail.row)
        const cDist = Math.abs(top.col - tail.col)
        if (rDist >= 2 && cDist >= 2) {
          // diag
          tail.col = top.col - tail.col > 0 ? tail.col + 1 : tail.col - 1
          tail.row = top.row - tail.row > 0 ? tail.row + 1 : tail.row - 1
        } else {
          if (rDist >= 2) {
            // diag
            tail.col = top.col
            tail.row = top.row - tail.row > 0 ? tail.row + 1 : tail.row - 1
          }
          if (cDist >= 2) {
            tail.row = top.row
            tail.col = top.col - tail.col > 0 ? tail.col + 1 : tail.col - 1
          }
        }
      }
      grid[rope[9].row + ';' + rope[9].col] = true
      // printGrid2(5, 6, rope)
    }
  })
  return Object.keys(grid).length
}
