module.exports.computeLevel1 = (values) => {
  const rst = []
  for (let i = 0; i < values[0].length; i++) {
    rst.push([0, 0])
  }
  values.forEach(e => {
    for (let i = 0; i < e.length; i++) {
      if (e.charAt(i) === '0') {
        rst[i][0]++
      } else {
        rst[i][1]++
      }
    }
  })
  let gamma = ''
  let epsilon = ''
  for (let i = 0; i < rst.length; i++) {
    if (rst[i][0] > rst[i][1]) {
      gamma += '0'
      epsilon += '1'
    } else {
      gamma += '1'
      epsilon += '0'
    }
  }
  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}


module.exports.computeLevel2 = (values) => {
  const compute = (values, i, one) => {
    if (values.length === 1 || i >= values[0].length + 1) {
      return values[0]
    }
    const rst = [0, 0]
    values.forEach(e => {
      if (e.charAt(i) === '0') {
        rst[0]++
      } else {
        rst[1]++
      }
    })
    if (rst[0] > rst[1]) {
      return compute(values.filter(e => e.charAt(i) === (one ? '0' : '1')), i + 1, one)
    }
    return compute(values.filter(e => e.charAt(i) === (one ? '1' : '0')), i + 1, one)
  }
  const oxygenGeneratorRating = compute(values, 0, true)
  const co2ScrubberRatting = compute(values, 0, false)
  return parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRatting, 2)
}
