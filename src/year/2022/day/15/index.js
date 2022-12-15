const parse = (values) => {
  return values.map(line => {
    const reg = /(-*[0-9]+)/g
    const v = line.match(reg)
    return {
      sensor: { x: +v[0], y: +v[1] },
      beacon: { x: +v[2], y: +v[3] },
    }
  })
}

const getIntervalByRow = (p, row) => {
  return p
    .map(a => {
      if (a.beacon.y === row) {
        const x = a.sensor.x - a.beacon.x
        return [a.beacon.x, a.beacon.x + x * 2].sort((a, b) => a - b)
      }
      const maxLength = Math.abs(a.beacon.x - a.sensor.x) + Math.abs(a.beacon.y - a.sensor.y) - 1
      const xLength = Math.abs(a.sensor.y - row) - 1
      const trueLength = (maxLength - xLength)
      if (trueLength <= 0) return []
      return [a.sensor.x - trueLength, a.sensor.x + trueLength].sort((a, b) => a - b)
    })
    .filter(a => a.length > 0)
    .sort((a, b) => a[0] - b[0] !== 0 ? a[0] - b[0] : a[1] - b[1])
    .reduce((prev, cur) => {
      for (let i = 0; i < prev.length; i++) {
        const a = prev[i]
        if (cur[1] >= a[0] && cur[1] <= a[1]) {
          return prev
        }
        if (cur[0] >= a[0] && cur[0] <= a[1]) {
          a[1] = cur[1]
          return prev
        }
      }
      prev.push(cur)
      return prev
    }, [])
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values, row = 2000000) => {
  return getIntervalByRow(parse(values), row)
    .reduce((prev, cur) => {
      return prev + cur[1] - cur[0]
    }, 0)

}
/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const data = parse(values)

  const min = Math.min(...data.map(a => a.sensor.x))
  const max = Math.max(...data.map(a => a.sensor.x))
  for (let row = min; row < max; row++) {
    const interval = getIntervalByRow(data, row)
    if (interval.length === 2) {
      return BigInt(row) + BigInt(interval[0][1] + 1) * BigInt(4000000)
    }
  }
}
