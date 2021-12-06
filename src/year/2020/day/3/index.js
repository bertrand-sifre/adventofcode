const nbTree = (values, direction) => {
  let nbTree = 0
  let position = { right: 0, down: 0 }
  while (position.down < values.length - 1) {
    position.right += direction.right
    position.down += direction.down
    const line = values[position.down]
    if (line && line.charAt(position.right % line.length) === '#') {
      nbTree++
    }
  }
  return nbTree
}

module.exports.computeLevel1 = (values) => {
  const direction = { right: 3, down: 1 }
  return nbTree(values, direction)
}
module.exports.computeLevel2 = (values) => {
  const direction1 = { right: 1, down: 1 }
  const direction2 = { right: 3, down: 1 }
  const direction3 = { right: 5, down: 1 }
  const direction4 = { right: 7, down: 1 }
  const direction5 = { right: 1, down: 2 }
  return nbTree(values, direction1) * nbTree(values, direction2) * nbTree(values, direction3) * nbTree(values, direction4) * nbTree(values, direction5)
}
