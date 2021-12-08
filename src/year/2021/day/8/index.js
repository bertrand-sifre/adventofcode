const numberToSegment = [
  'abcefg', // 0
  'cf',//1
  'acdeg',//2
  'acdfg',// 3
  'bcdf',// 4
  'abdfg',// 5
  'abdefg',// 6
  'acf',// 7
  'abcdefg',// 8
  'abcdfg',// 9
]

const extract = (values) => {
  return values.map(v => {
    const s = v.split(' | ')
    return {
      pattern: s[0].split(' '),
      out: s[1].split(' '),
    }
  })
}

/**
 * @param {string[]} str
 * @param {string[]} exclude
 * @param {number} nb
 */
const compareStr = function (str, nb = 1, exclude = []) {
  const charList = (str.join('')).split('').filter((item, pos, self) => self.indexOf(item) === pos).join('')
  let diff = ""
  for (let i = 0; i < charList.length; i++) {
    let j = 0
    str.forEach(s => {
      if (!exclude.includes(charList[i]) && s.includes(charList[i])) {
        j++
      }
    })
    if (j === nb) {
      diff += charList[i]
    }
  }
  return diff
}

const findA = (input) => {
  const _2 = input.pattern.filter(a => a.length === 2)[0]
  const _3 = input.pattern.filter(a => a.length === 3)[0]
  return compareStr([_2, _3])
}

const findE = (input) => {
  const _5 = input.pattern.filter(a => a.length === 5)
  const _4 = input.pattern.filter(a => a.length === 4)
  return compareStr(_5.concat(_4))
}

const findD = (input) => {
  const _5 = input.pattern.filter(a => a.length === 5)
  const _4 = input.pattern.filter(a => a.length === 4)
  return compareStr(_5.concat(_4), 4)
}

const findB = (input, d) => {
  const _4 = input.pattern.filter(a => a.length === 4)
  const _2 = input.pattern.filter(a => a.length === 2)
  return compareStr(_2.concat(_4), 1, [d])
}

const findC = (input, f) => {
  const _2 = input.pattern.filter(a => a.length === 2)
  return compareStr(_2, 1, [f])
}
const findF = (input, array) => {
  const _6 = input.pattern.filter(a => a.length === 6)
  return compareStr(_6, 3, array)
}
const findG = (input, a) => {
  const _6 = input.pattern.filter(a => a.length === 6)
  const _5 = input.pattern.filter(a => a.length === 5)
  return compareStr(_6.concat(_5), 6, [a])

}

const convertSegment = (str, exchange) => {
  return str.split('').map(c => exchange[c]).sort().join('')
}

module.exports.computeLevel1 = (values) => {
  const inputs = extract(values)
  let rst = 0
  inputs.forEach(input => {
    const a = findA(input)
    const e = findE(input)
    const d = findD(input)
    const b = findB(input, d)
    const g = findG(input, a)
    const f = findF(input, [a, b, g])
    const c = findC(input, f)
    const exchange = {}
    exchange[a] = 'a'
    exchange[b] = 'b'
    exchange[c] = 'c'
    exchange[d] = 'd'
    exchange[e] = 'e'
    exchange[f] = 'f'
    exchange[g] = 'g'
    const segments = input.out.map(o => convertSegment(o, exchange))
    segments.forEach(segment => {
      const value = numberToSegment.indexOf(segment)
      if (value === 1 || value === 4 || value === 7 || value == 8) {
        rst++
      }
    })
  })
  return rst
}
module.exports.computeLevel2 = (values) => {
  const inputs = extract(values)
  let rst = 0
  inputs.forEach(input => {
    const a = findA(input)
    const e = findE(input)
    const d = findD(input)
    const b = findB(input, d)
    const g = findG(input, a)
    const f = findF(input, [a, b, g])
    const c = findC(input, f)
    const exchange = {}
    exchange[a] = 'a'
    exchange[b] = 'b'
    exchange[c] = 'c'
    exchange[d] = 'd'
    exchange[e] = 'e'
    exchange[f] = 'f'
    exchange[g] = 'g'
    const segments = input.out.map(o => convertSegment(o, exchange))
    const nb = +segments.map(segment => numberToSegment.indexOf(segment)).join('')
    rst += nb
  })
  return rst
}
