const extract = (values) => {
  return values.map(e => {
    return e.split(' -> ').map(e => {
      const pos = e.split(',')
      return { x: +pos[0], y: +pos[1] }
    })
  })
}

const max = (a, prop) => {
  let m = 0
  a.forEach(e => {
    if (e[0][prop] > m) {
      m = e[0][prop]
    }
    if (e[1][prop] > m) {
      m = e[1][prop]
    }
  })
  return m
}

const initArray = (x, y) => {
  const v = []
  v.length = x
  for (let i = 0; i < x; i++) {
    const l = []
    l.length = y
    l.fill(0)
    v[i] = l
  }
  return v
}

const isHorizontal = (line) => {
  return line[0].x === line[1].x
}

const isVertical = (line) => {
  return line[0].y === line[1].y
}

module.exports.computeLevel1 = (values) => {
  const lines = extract(values)
  const maxX = max(lines, 'x') + 1
  const maxY = max(lines, 'y') + 1
  const rst = initArray(maxX, maxY)
  lines.forEach(line => {
    if (isHorizontal(line)) {
      const min = Math.min(line[0].y, line[1].y)
      const max = Math.max(line[0].y, line[1].y)
      for (let i = min; i <= max; i++) {
        rst[line[0].x][i]++
      }
    }
    if (isVertical(line)) {
      const min = Math.min(line[0].x, line[1].x)
      const max = Math.max(line[0].x, line[1].x)
      for (let i = min; i <= max; i++) {
        rst[i][line[0].y]++
      }
    }
  })

  let count = 0
  rst.forEach(line => {
    line.forEach(c => {
      if (c > 1) {
        count++
      }
    })
  })
  return count
}
module.exports.computeLevel2 = (values) => {
  const lines = extract(values)
  const maxX = max(lines, 'x') + 1
  const maxY = max(lines, 'y') + 1
  const rst = initArray(maxX, maxY)
  lines.forEach(line => {
    if (isHorizontal(line)) {
      const min = Math.min(line[0].y, line[1].y)
      const max = Math.max(line[0].y, line[1].y)
      for (let i = min; i <= max; i++) {
        rst[line[0].x][i]++
      }
    } else if (isVertical(line)) {
      const min = Math.min(line[0].x, line[1].x)
      const max = Math.max(line[0].x, line[1].x)
      for (let i = min; i <= max; i++) {
        rst[i][line[0].y]++
      }
    } else {
      let x = Math.min(line[0].x, line[1].x)
      let maX = Math.max(line[0].x, line[1].x)
      let y = Math.min(line[0].y, line[1].y)
      let maY = Math.max(line[0].y, line[1].y)
      const p = maX - x
      if (line[0].x + p === line[1].x && line[0].y + p === line[1].y ||
        line[0].x - p === line[1].x && line[0].y - p === line[1].y
      ) {
        for (; x <= maX;) {
          rst[x][y]++
          x++
          y++
        }
      }
      if (line[0].x + p === line[1].x && line[0].y - p === line[1].y ||
        line[0].x - p === line[1].x && line[0].y + p === line[1].y
      ) {
        for (; x <= maX;) {
          rst[x][maY]++
          x++
          maY--
        }
      }
    }
  })

  let count = 0
  rst.forEach(line => {
    line.forEach(c => {
      if (c > 1) {
        count++
      }
    })
  })
  return count
}
