const extract = (value) => {
  const start = value[0]
  const paitInsertion = value.filter(v => v.includes('->')).map(a => {
    const split = a.split(' -> ')
    return {
      src: split[0],
      p1: split[0].charAt(0) + split[1],
      p2: split[1] + split[0].charAt(1),
    }
  }).reduce((acc, curr) => {
    acc[curr.src] = {
      p1: curr.p1,
      p2: curr.p2,
    }
    return acc
  }, {})
  return {
    start,
    paitInsertion
  }
}

/**
 * @param {string} str 
 * @returns 
 */
const initStartArray = (str, allPairs) => {
  const obj = {}
  allPairs.forEach(p => {
    obj[p] = 0
  })
  for (let i = 0; i < str.length - 1; i++) {
    obj[str.substr(i, 2)]++
  }
  return obj
}

const step = (obj, pairs) => {
  const nObj = {}
  Object.keys(pairs).forEach(p => {
    nObj[p] = 0
  })
  Object.keys(obj).filter(a => obj[a] > 0).forEach(pair => {
    const inc = pairs[pair]
    const value = obj[pair]
    nObj[inc.p1] += value
    nObj[inc.p2] += value
  })
  return nObj
}

module.exports.computeLevel1 = (values, nbStep = 10) => {
  const inputs = extract(values)
  let obj = initStartArray(inputs.start, Object.keys(inputs.paitInsertion))
  for (let i = 0; i < nbStep; i++) {
    obj = step(obj, inputs.paitInsertion)
  }
  // count all 1st char of pair
  const rst = Object.keys(obj).reduce((acc, curr) => {
    acc[curr.charAt(0)] = (acc[curr.charAt(0)] || 0) + obj[curr]
    return acc
  }, {})
  // add end because it's not count
  rst[inputs.start.charAt(inputs.start.length - 1)] += 1
  // research min and max
  const vals = Object.keys(rst).map(key => rst[key])
  const min = Math.min(...vals)
  const max = Math.max(...vals)
  return max - min
}

module.exports.computeLevel2 = (values) => {
  return this.computeLevel1(values, 40)
}
