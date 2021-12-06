const extract = (values) => {
  return values[0].split(',').map(e => +e)
}
module.exports.computeLevel1 = (values) => {
  const lanternfishs = extract(values)
  for (let day = 0; day < 80; day++) {
    let newLanterfish = 0
    for (let i = 0; i < lanternfishs.length; i++) {
      lanternfishs[i]--
      if (lanternfishs[i] < 0) {
        lanternfishs[i] = 6
        newLanterfish++
      }
    }
    lanternfishs.push(...Array(newLanterfish).fill(8))
  }
  return lanternfishs.length
}

module.exports.computeLevel2 = (values) => {
  const lanternfishs = Array(9).fill(0)
  const l = extract(values)
  l.forEach(element => {
    lanternfishs[element]++
  })
  for (let i = 0; i < 256; i++) {
    const eight = lanternfishs.shift()
    lanternfishs.push(eight)
    lanternfishs[6] += eight
  }
  return lanternfishs.reduce((p, c) => c + p, 0)
}
