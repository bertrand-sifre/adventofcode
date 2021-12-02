const adventofcode = require('../../services/adventofcode')

module.exports.execute = async () => {
  const input = await adventofcode.getInput1()
  const values = input.split('\n')
  return this.computeStep2(values)
}

module.exports.computeStep1 = (values) => {
  const integerValue = values.map(a => +a)
  let rst = 0
  for (let index = 1; index < integerValue.length; index++) {
    const element = integerValue[index]
    const previous = integerValue[index - 1]
    if (previous < element) {
      rst++
    }
  }
  return rst
}

module.exports.computeStep2 = (values) => {
  const integerValue = values.map(a => +a)
  let rst = []
  for (let index = 0; index < integerValue.length; index++) {
    rst.push(integerValue[index])
    if (index - 1 >= 0) {
      rst[index - 1] += integerValue[index]
    }
    if (index - 2 >= 0) {
      rst[index - 2] += integerValue[index]
    }
  }
  return this.computeStep1(rst.slice(0, rst.length - 2))
}