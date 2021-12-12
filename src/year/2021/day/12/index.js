const pushLink = (caves, a, b) => {
  if (a !== 'end') {
    if (!caves[a]) {
      caves[a] = { links: [] }
    }
    if (b !== 'start') {
      caves[a].links.push(b)
    }
  }
}

const extract = (values) => {
  const links = values.map(d => d.split('-'))
  const caves = {}
  links.forEach(link => {
    pushLink(caves, link[0], link[1])
    pushLink(caves, link[1], link[0])
  })
  return caves
}

/**
 * @returns {string[]}
 */
const getAllPath = (caves, curr = []) => {
  const lastCave = curr[curr.length - 1]
  return caves[lastCave].links
    //.filter(l => !curr.filter(str => str.charAt(0) == str.charAt(0).toLowerCase()).includes(l))
    .map(l => {
      return [l]
    })
}

/**
 * @param {*} caves 
 * @param {string[]} curr 
 * @returns 
 */
const getAllPathToEnd = (caves, curr = [], min = 0) => {
  const allPath = getAllPath(caves, curr)
    .map(path => curr.concat(path))
    .filter(path => {
      const group = path.filter(p => p.charAt(0) == p.charAt(0).toLowerCase()).reduce((acc, cur) => {
        if (!acc[cur]) {
          acc[cur] = 1
        } else {
          acc[cur]++
        }
        return acc
      }, {})
      const values = Object.values(group)
      if (values.filter(value => value > 2).length > 0) {
        return false
      }
      return values.filter(value => value === 2).length <= min
    })
  const withEnd = allPath.filter(path => path.includes('end'))
  const withoutEnd = allPath
    .filter(path => !path.includes('end'))
    .map(path => {
      return getAllPathToEnd(caves, path, min)
    }).flat(1)
  return withEnd.concat(withoutEnd)
}

module.exports.computeLevel1 = (values) => {
  const caves = extract(values)
  const solve = getAllPathToEnd(caves, ['start'])
  return solve.length
}
module.exports.computeLevel2 = (values) => {
  const caves = extract(values)
  const solve = getAllPathToEnd(caves, ['start'], 1)
  return solve.length
}
