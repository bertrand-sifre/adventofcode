const extract = (values) => {
  return values[0].split(',').map(e => +e)
}
module.exports.computeLevel1 = (values) => {
  const crabs = extract(values)
  const max = Math.max(...crabs)
  let min
  for (let i = 0; i < max; i++) {
    const v = crabs
      .map(e => Math.abs(e - i))
      .reduce((a, e) => a + e, 0)
    if (!min || v < min) {
      min = v
    }
  }
  return min
}

const computeSum = (max) => {
  const rst = [0]
  for (let i = 1; i <= max; i++) {
    rst.push(rst[i - 1] + i)
  }
  return rst
}

module.exports.computeLevel2 = (values) => {
  const crabs = extract(values)
  const max = Math.max(...crabs)
  let min
  const sums = computeSum(max)
  for (let i = 0; i < max; i++) {
    const v = crabs
      .map(e => sums[Math.abs(e - i)])
      .reduce((a, e) => a + e, 0)
    if (!min || v < min) {
      min = v
    }
  }
  return min
}
