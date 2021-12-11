const extract = values => {
  return values.map(v => v.split('').map(e => +e))
}

const inc = (input, x, y) => {
  input[x][y]++
  if (input[x][y] === 10) {
    incAdj(input, x, y)
  }
}

const incAdj = (input, x, y) => {
  if (x - 1 >= 0) {
    if (y - 1 >= 0) {
      inc(input, x - 1, y - 1)
    }
    inc(input, x - 1, y)
    if (y + 1 < input[x].length) {
      inc(input, x - 1, y + 1)
    }
  }
  if (y - 1 >= 0) {
    inc(input, x, y - 1)
  }
  if (y + 1 < input[x].length) {
    inc(input, x, y + 1)
  }
  if (x + 1 < input.length) {
    if (y - 1 >= 0) {
      inc(input, x + 1, y - 1)
    }
    inc(input, x + 1, y)
    if (y + 1 < input[x + 1].length) {
      inc(input, x + 1, y + 1)
    }
  }
}

const step = input => {
  for (let i = 0; i < input.length; i++) {
    const line = input[i]
    for (let j = 0; j < line.length; j++) {
      inc(input, i, j)
    }
  }
  // normalize
  for (let i = 0; i < input.length; i++) {
    const line = input[i]
    for (let j = 0; j < line.length; j++) {
      if (input[i][j] > 9) {
        input[i][j] = 0
      }
    }
  }
  // return nb 0
  return input.flat().filter(a => a === 0).length
}

module.exports.computeLevel1 = (values) => {
  const input = extract(values)
  let rst = 0
  for (let i = 0; i < 100; i++) {
    rst += step(input)
  }
  return rst
}
module.exports.computeLevel2 = (values) => {
  const input = extract(values)
  let rst = 0
  let day = 0
  while (rst !== input.flat().length) {
    rst = step(input)
    day++
  }
  return day
}
