/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  // convert values to grid
  const grid = values.map(line => line.split('').map(letter => ({ value: letter, step: Number.MAX_SAFE_INTEGER })))
  /** @type {{x:number, y:number}[]} */
  const currentPositions = []
  // push start position
  grid.forEach((line, x) => {
    line.forEach((square, y) => {
      if (square.value === 'S') {
        currentPositions.push({ x, y })
        grid[x][y].step = 0
        grid[x][y].value = 'a'
      }
      if (square.value === 'E') {
        grid[x][y].isFinish = true
        grid[x][y].value = 'z'
      }
    })
  })

  // now resolve all posibility
  while (currentPositions.length > 0) {
    /** @type {{x:number, y:number}} */
    //@ts-ignore
    const position = currentPositions.shift()
    const current = grid[position.x][position.y]
    const nextStep = current.step + 1
    const fctPushPosition = function (x, y) {
      if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[0].length - 1) {
        return //out of bound
      }
      const height = grid[x][y].value
      if (height.charCodeAt(0) <= current.value.charCodeAt(0) || height.charCodeAt(0) - 1 === current.value.charCodeAt(0)) {
        if (grid[x][y].step > nextStep) {
          grid[x][y].step = nextStep
          currentPositions.push({ x, y })
        }
      }
    }
    fctPushPosition(position.x + 1, position.y)
    fctPushPosition(position.x, position.y + 1)
    fctPushPosition(position.x - 1, position.y)
    fctPushPosition(position.x, position.y - 1)
  }
  return grid
    .map(line => line.filter(a => a.isFinish)[0]).filter(a => a)[0].step
}
/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  // convert values to grid
  const grid = values.map(line => line.split('').map(letter => ({ value: letter, step: Number.MAX_SAFE_INTEGER })))
  /** @type {{x:number, y:number}[]} */
  const currentPositions = []
  /** @type {{x:number, y:number}[]} */
  const isFinish = []
  // push start position
  grid.forEach((line, x) => {
    line.forEach((square, y) => {
      if (square.value === 'S') {
        isFinish.push({ x, y })
        grid[x][y].value = 'a'
      }
      if (square.value === 'E') {
        currentPositions.push({ x, y })
        grid[x][y].step = 0
        grid[x][y].value = 'z'
      }
    })
  })

  while (isFinish.length > 0) {
    /** @type {{x:number, y:number}} */
    //@ts-ignore
    const position = isFinish.shift()
    const fctPushPosition = function (x, y) {
      if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[0].length - 1) {
        return //out of bound
      }
      const height = grid[x][y].value
      if (height === 'a' && !grid[x][y].isFinish) {
        grid[x][y].isFinish = true
        isFinish.push({ x, y })
      }
    }
    fctPushPosition(position.x + 1, position.y)
    fctPushPosition(position.x, position.y + 1)
    fctPushPosition(position.x - 1, position.y)
    fctPushPosition(position.x, position.y - 1)
  }

  // now resolve all posibility
  while (currentPositions.length > 0) {
    /** @type {{x:number, y:number}} */
    //@ts-ignore
    const position = currentPositions.shift()
    const current = grid[position.x][position.y]
    const nextStep = current.step + 1
    const fctPushPosition = function (x, y) {
      if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[0].length - 1) {
        return //out of bound
      }
      const height = grid[x][y].value
      if (height.charCodeAt(0) >= current.value.charCodeAt(0) || height.charCodeAt(0) === current.value.charCodeAt(0) - 1) {
        if (grid[x][y].step > nextStep) {
          grid[x][y].step = nextStep
          currentPositions.push({ x, y })
        }
      }
    }
    fctPushPosition(position.x + 1, position.y)
    fctPushPosition(position.x, position.y + 1)
    fctPushPosition(position.x - 1, position.y)
    fctPushPosition(position.x, position.y - 1)
  }
  return grid
    .map(line => line.filter(a => a.isFinish)).flat().sort((a, b) => a.step - b.step)[0].step
}
