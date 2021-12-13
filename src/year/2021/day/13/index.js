const extract = (values) => {
  const dotsCoor = values.filter(a => a.includes(',')).map(a => {
    const split = a.split(',').map(a => +a)
    return {
      y: split[0],
      x: split[1],
    }
  })
  const foldInstruction = values.filter(a => a.includes('fold')).map(a => {
    const split = a.split(/=| /g)
    return {
      axe: split[2],
      value: +split[3]
    }
  })
  return {
    dotsCoor,
    foldInstruction,
  }
}

module.exports.computeLevel1 = (values) => {
  const input = extract(values)
  const maxX = Math.max(...input.dotsCoor.map(dot => dot.x))
  const maxY = Math.max(...input.dotsCoor.map(dot => dot.y))
  // fill paper
  const paper = []
  for (let x = 0; x <= maxX; x++) {
    paper[x] = []
    paper[x].length = maxY + 1
    paper[x].fill('.')
  }
  input.dotsCoor.forEach(dot => {
    paper[dot.x][dot.y] = '#'
  })

  input.foldInstruction.forEach(instruction => {
    if (instruction.axe === 'x') {
      const axe = instruction.value
      for (let x = 0; x < paper.length; x++) {
        for (let y = axe + 1; y < paper[x].length; y++) {
          const value = paper[x][y]
          if (value === '#') {
            paper[x][-y + 2 * axe] = value
          }
        }
        paper[x].length = axe
      }
    }
    if (instruction.axe === 'y') {
      const axe = instruction.value
      for (let x = axe + 1; x < paper.length; x++) {
        for (let y = 0; y < paper[x].length; y++) {
          const value = paper[x][y]
          if (value === '#') {
            paper[-x + 2 * axe][y] = value
          }
        }
      }
      paper.length = axe
    }
  })
  console.log(paper.map(line => line.join('')).join('\n'))
  return paper.flat().filter(a => a === '#').length
}
module.exports.computeLevel2 = (values) => {
  const input = extract(values)
  const maxX = Math.max(...input.dotsCoor.map(dot => dot.x))
  const maxY = Math.max(...input.dotsCoor.map(dot => dot.y))
  // fill paper
  const paper = []
  for (let x = 0; x <= maxX; x++) {
    paper[x] = []
    paper[x].length = maxY + 1
    paper[x].fill('.')
  }
  input.dotsCoor.forEach(dot => {
    paper[dot.x][dot.y] = '#'
  })

  input.foldInstruction.forEach(instruction => {
    if (instruction.axe === 'x') {
      const axe = instruction.value
      for (let x = 0; x < paper.length; x++) {
        for (let y = axe + 1; y < paper[x].length; y++) {
          const value = paper[x][y]
          if (value === '#') {
            paper[x][-y + 2 * axe] = value
          }
        }
        paper[x].length = axe
      }
    }
    if (instruction.axe === 'y') {
      const axe = instruction.value
      for (let x = axe + 1; x < paper.length; x++) {
        for (let y = 0; y < paper[x].length; y++) {
          const value = paper[x][y]
          if (value === '#') {
            paper[-x + 2 * axe][y] = value
          }
        }
      }
      paper.length = axe
    }
  })
  console.log(paper.map(line => line.join('')).join('\n'))
  process.exit()
  return paper.flat().filter(a => a === '#').length
}
