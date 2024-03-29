const choosen = {
  "A": { name: "Rock", point: 1 },
  "B": { name: "Paper", point: 2 },
  "C": { name: "Scissors", point: 3 },
  "X": { name: "Rock", point: 1 },
  "Y": { name: "Paper", point: 2 },
  "Z": { name: "Scissors", point: 3 },
}


module.exports.computeLevel1 = (values) => {
  return values.map(line => {
    const game = line.split(' ').map(a => choosen[a])
    const p1 = game[0]
    const p2 = game[1]
    const points = { p1: p1.point, p2: p2.point }
    if (p1.name === 'Rock' && p2.name === 'Paper') {
      // P2 win
      points.p2 += 6
    } else if (p1.name === 'Rock' && p2.name === 'Scissors') {
      // P1 Win
      points.p1 += 6
    } else if (p1.name === 'Paper' && p2.name === 'Rock') {
      // P1 win
      points.p1 += 6
    } else if (p1.name === 'Paper' && p2.name === 'Scissors') {
      // P2 Win
      points.p2 += 6
    } else if (p1.name === 'Scissors' && p2.name === 'Paper') {
      // P1 Win
      points.p1 += 6
    } else if (p1.name === 'Scissors' && p2.name === 'Rock') {
      // P2 Win
      points.p2 += 6
    } else {
      // draw
      points.p2 += 3
      points.p1 += 3
    }
    return points
  }).reduce((total, curr) => {
    total.p1 += curr.p1
    total.p2 += curr.p2
    return total
  }, { p1: 0, p2: 0 }).p2

}

const choosen2 = {
  "A": { name: "Rock", X: 3 + 0, Y: 1 + 3, Z: 2 + 6 },
  "B": { name: "Paper", X: 1 + 0, Y: 2 + 3, Z: 3 + 6 },
  "C": { name: "Scissors", X: 2 + 0, Y: 3 + 3, Z: 1 + 6 },
}

module.exports.computeLevel2 = (values) => {
  return values.map(line => {
    const game = line.split(' ')
    const p1 = game[0]
    const p2 = game[1]
    return choosen2[p1][p2]
  }).reduce((total, curr) => total + curr, 0)
}
