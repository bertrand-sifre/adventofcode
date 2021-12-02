module.exports.computeLevel1 = (values) => {
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

module.exports.computeLevel2 = (values) => {
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
      position.aim += element.step
    }
    if (element.direction === 'up') {
      position.aim -= element.step
    }
    if (element.direction === 'forward') {
      position.horizontal += element.step
      position.depth += position.aim * element.step
    }
  })

  return position.depth * position.horizontal

}
