
const adventofcode = require('../../services/adventofcode')

module.exports.execute = async () => {
  const input = await adventofcode.getInput2()
  const values = input.split('\n')
  return this.computeStep2(values)
}

module.exports.computeStep1 = (values) => {
  const position = {
    depth: 0,
    horizontal: 0,
  }

  const actions = values.map(a => {
    const x = a.split(' ')
    return {
      direction: x[0],
      step: +x[1]
    }
  })

  actions.forEach(element => {
    if (element.direction === 'down') {
      position.depth += element.step
    }
    if (element.direction === 'up') {
      position.depth -= element.step
    }
    if (element.direction === 'forward') {
      position.horizontal += element.step
    }
  })
  return position.depth * position.horizontal
}

module.exports.computeStep2 = (values) => {
  const position = {
    depth: 0,
    horizontal: 0,
    aim: 0,
  }

  const actions = values.map(a => {
    const x = a.split(' ')
    return {
      direction: x[0],
      step: +x[1]
    }
  })

  actions.forEach(element => {
    if (element.direction === 'down') {
      // position.depth += element.step
      position.aim += element.step
    }
    if (element.direction === 'up') {
      // position.depth -= element.step
      position.aim -= element.step
    }
    if (element.direction === 'forward') {
      position.horizontal += element.step
      position.depth += position.aim * element.step
    }
  })

  return position.depth * position.horizontal

}
