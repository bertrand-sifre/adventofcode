const extract = (value) => {
  return value.map(this.extractLine)
}

/**
 * @param {{depth:number, val:number}[]} snailfish
 */
module.exports.magnitude = (snailfish) => {
  const depths = snailfish.map(e => e.depth)
  const maxDepth = Math.max(...depths)
  const snails = snailfish.filter(e => e.depth === maxDepth)
  const s1 = snails[0]
  const s2 = snails[1]
  const val = 3 * s1.val + 2 * s2.val
  s1.val = val
  s1.depth--
  snailfish.splice(snailfish.indexOf(s2), 1)
  if (snailfish.length === 1) {
    return snailfish[0].val
  }
  return this.magnitude(snailfish)
}

/**
 * @param {{depth:number, val:number}[]} snailfish
 * @returns {{depth:number, val:number}[]}
 */
module.exports.reduce = (snailfish, rec = false) => {
  const explode = snailfish.filter(number => number.depth >= 5)
  if (explode.length > 0) {
    // get first left pair
    const p1 = explode[0]
    const p2 = explode[1]
    const indexOfp1 = snailfish.indexOf(p1)
    if (indexOfp1 > 0) {
      snailfish[indexOfp1 - 1].val += p1.val
    }
    const indexOfp2 = snailfish.indexOf(p2)
    if (indexOfp2 < snailfish.length - 1) {
      snailfish[indexOfp2 + 1].val += p2.val
    }
    p1.val = 0
    p1.depth--
    snailfish.splice(indexOfp2, 1)
    if (rec) {
      return this.reduce(snailfish, true)
    }
    return snailfish
  }
  const splits = snailfish.filter(number => number.val >= 10)
  if (splits.length > 0) {
    // console.log('split')
    // get number to split
    const p1 = splits[0]
    const indexOfp1 = snailfish.indexOf(p1)
    const val1 = p1.val / 2 | 0
    const val2 = p1.val - val1
    p1.val = val1
    p1.depth++
    snailfish.splice(indexOfp1 + 1, 0, { val: val2, depth: p1.depth })
    if (rec) {
      return this.reduce(snailfish, true)
    }
    return snailfish
  }
  return snailfish
}

module.exports.add = (a, b) => {
  a.forEach(e => e.depth++)
  b.forEach(e => e.depth++)
  a.push(...b)
}

module.exports.computeLevel1 = (values) => {
  const snailfishs = extract(values)
  let currSum = snailfishs[0]
  for (let i = 1; i < snailfishs.length; i++) {
    this.add(currSum, snailfishs[i])
    this.reduce(currSum, true)

  }
  const rst = this.magnitude(currSum)
  return rst
}
module.exports.computeLevel2 = (values) => {
  let max = 0
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const snails = extract([values[i], values[j]])
      this.add(snails[0], snails[1])
      this.reduce(snails[0], true)
      const rst = this.magnitude(snails[0])
      if (rst > max) {
        max = rst
      }
    }
  }
  return max
}

/**
 * @returns {{depth:number, val:number}[]}
 * @param {string} line 
 */
module.exports.extractLine = (line) => {
  const rst = []
  let depth = 0
  for (let i = 0; i < line.length; i++) {
    const c = line.charAt(i)
    if (c === ',') {
      continue
    }
    if (c === '[') {
      depth++
    } else if (c === ']') {
      depth--
    } else {
      rst.push({
        val: +c,
        depth
      })
    }
  }
  return rst
}
