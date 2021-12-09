/**
 * 
 * @param {string[]} values 
 * @returns {{value:number, low: boolean, up:boolean, x:number, y:number}[][]}
 */
const extract = (values) => {
  return values.map((e, x) => e.split('').map((e, y) => ({ value: +e, low: false, up: false, x, y })))
}

/**
 * @param {{value:number, low: boolean, up:boolean, x:number, y:number}[][]} heightmap 
 * @param {{value:number, low: boolean, up:boolean, x:number, y:number}} point
 * @returns {number}
 */
const flagUp = (heightmap, point) => {
  let count = point.value !== 9 ? 1 : 0
  if (point.x - 1 >= 0 &&
    !heightmap[point.x - 1][point.y].up &&
    heightmap[point.x - 1][point.y].value >= point.value
  ) {
    heightmap[point.x - 1][point.y].up = true
    count += flagUp(heightmap, heightmap[point.x - 1][point.y])
  }
  if (point.y - 1 >= 0 &&
    !heightmap[point.x][point.y - 1].up &&
    heightmap[point.x][point.y - 1].value >= point.value
  ) {
    heightmap[point.x][point.y - 1].up = true
    count += flagUp(heightmap, heightmap[point.x][point.y - 1])
  }
  if (point.x + 1 < heightmap.length &&
    !heightmap[point.x + 1][point.y].up &&
    heightmap[point.x + 1][point.y].value >= point.value
  ) {
    heightmap[point.x + 1][point.y].up = true
    count += flagUp(heightmap, heightmap[point.x + 1][point.y])
  }
  if (point.y + 1 < heightmap[point.x].length &&
    !heightmap[point.x][point.y + 1].up &&
    heightmap[point.x][point.y + 1].value >= point.value
  ) {
    heightmap[point.x][point.y + 1].up = true
    count += flagUp(heightmap, heightmap[point.x][point.y + 1])
  }
  return count
}

module.exports.computeLevel1 = (values) => {
  const heightmap = extract(values)
  const flatHeightmap = heightmap.flat()
  while (flatHeightmap.filter(a => !a.up && !a.low).length > 0) {
    const min = Math.min(...flatHeightmap.filter(a => !a.up && !a.low).map(e => e.value))
    const allMinPoints = flatHeightmap.filter(a => !a.up && !a.low).filter(p => p.value === min)
    allMinPoints.forEach(point => {
      point.low = true
      flagUp(heightmap, point)
    })
  }
  const allLow = flatHeightmap.filter(a => a.low).map(a => a.value)
  return allLow.reduce((acc, cur) => acc + cur, 0) + allLow.length

}
module.exports.computeLevel2 = (values) => {
  const heightmap = extract(values)
  const flatHeightmap = heightmap.flat()
  /** @type {number[]} */
  const bassinSize = []
  while (flatHeightmap.filter(a => !a.up && !a.low).length > 0) {
    const min = Math.min(...flatHeightmap.filter(a => !a.up && !a.low).map(e => e.value))
    const allMinPoints = flatHeightmap.filter(a => !a.up && !a.low).filter(p => p.value === min)
    allMinPoints.forEach(point => {
      point.low = true
      const f = flagUp(heightmap, point)
      bassinSize.push(f)
    })
  }
  bassinSize.sort((a, b) => a - b).reverse()
  return bassinSize[0] * bassinSize[1] * bassinSize[2]
}
