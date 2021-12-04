const extract = (values) => {
  const draws = values[0].split(',').map(a => +a)
  // console.log(draws)
  const grids = []
  for (let i = 2; i < values.length; i = i + 6) {
    grids.push([
      values[i].trim().replace(/  /g, ' ').split(' ').map(a => { return { v: +a, f: false } }),
      values[i + 1].trim().replace(/  /g, ' ').split(' ').map(a => { return { v: +a, f: false } }),
      values[i + 2].trim().replace(/  /g, ' ').split(' ').map(a => { return { v: +a, f: false } }),
      values[i + 3].trim().replace(/  /g, ' ').split(' ').map(a => { return { v: +a, f: false } }),
      values[i + 4].trim().replace(/  /g, ' ').split(' ').map(a => { return { v: +a, f: false } }),
    ])
  }
  // console.log(JSON.stringify(grids))
  return {
    draws,
    grids,
  }
}

const gridIsValid = (grid) => {
  // console.log(grid.map(a => a.map(a => a.f ? 1 : 0)))
  // grid 5x5
  for (let i = 0; i < 5; i++) {
    if (grid[0][i].f && grid[1][i].f && grid[2][i].f && grid[3][i].f && grid[4][i].f) {
      return true
    }
    if (grid[i][0].f && grid[i][1].f && grid[i][2].f && grid[i][3].f && grid[i][4].f) {
      return true
    }
  }
  return false
}

const sumUnMarked = (grid) => {
  let sum = 0
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (!grid[i][j].f) {
        sum += grid[i][j].v
      }
    }
  }
  return sum
}

module.exports.computeLevel1 = (values) => {
  const { draws, grids } = extract(values)
  for (let d = 0; d < draws.length; d++) {
    const draw = draws[d]
    // set grid
    for (let g = 0; g < grids.length; g++) {
      const grid = grids[g]
      grid.forEach(line => {
        line.forEach(c => {
          if (c.v === draw) {
            c.f = true
          }
        })
      })
    }
    // know check if a grid is valid
    for (let i = 0; i < grids.length; i++) {
      const grid = grids[i]
      const isValid = gridIsValid(grid)
      if (isValid) {
        return sumUnMarked(grid) * draw
      }
    }
  }
}
module.exports.computeLevel2 = (values) => {
}
