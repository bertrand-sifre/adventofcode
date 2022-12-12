const lodash = require('lodash')

/**
 * @param {string} str
 * @return {(str:number) => number}
 */
const getOperation = (str) => {
  return (a) => eval(str.replace(/old/g, a))
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const monkeys = lodash.chunk(values, 7)
    .map(chunk => {
      const startingItems = chunk[1].slice(18).split(',').map(a => +a)
      const operation = getOperation(chunk[2].slice(19))
      const test = +chunk[3].slice(20)
      const ifTrue = +chunk[4].slice(29)
      const ifFalse = +chunk[5].slice(30)
      return {
        startingItems,
        operation,
        test,
        ifTrue,
        ifFalse,
        nbInspect: 0,
      }
    })
  for (let i = 0; i < 20; i++) {
    monkeys.forEach(monkey => {
      monkey.startingItems
        .map(a => monkey.operation(a))
        .map(a => Math.floor(a / 3))
        .forEach(a => {
          monkey.nbInspect++
          if (a % monkey.test === 0) {
            monkeys[monkey.ifTrue].startingItems.push(a)
          } else {
            monkeys[monkey.ifFalse].startingItems.push(a)
          }
        })
      monkey.startingItems = []
    })
  }
  const nbInspect = monkeys.map(a => a.nbInspect).sort((a, b) => b - a)
  return nbInspect[0] * nbInspect[1]
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const monkeys = lodash.chunk(values, 7)
    .map(chunk => {
      /** @type {number[]} */
      const startingItems = chunk[1].slice(18).split(',').map(a => +a)
      const operation = getOperation(chunk[2].slice(19))
      const test = +chunk[3].slice(20)
      const ifTrue = +chunk[4].slice(29)
      const ifFalse = +chunk[5].slice(30)
      return {
        startingItems,
        operation,
        test,
        ifTrue,
        ifFalse,
        nbInspect: 0,
      }
    })
  const mod = monkeys.reduce((p, a) => a.test * p, 1)
  for (let i = 0; i < 10000; i++) {
    monkeys.forEach(monkey => {
      monkey.startingItems
        .map(v => monkey.operation(v) % mod)
        .forEach(a => {
          monkey.nbInspect++
          if (a % monkey.test === 0) {
            monkeys[monkey.ifTrue].startingItems.push(a)
          } else {
            monkeys[monkey.ifFalse].startingItems.push(a)
          }
        })
      monkey.startingItems = []
    })
  }
  const nbInspect = monkeys.map(a => a.nbInspect).sort((a, b) => b - a)
  return nbInspect[0] * nbInspect[1]
}
