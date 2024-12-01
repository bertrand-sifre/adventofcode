const readInput = (values) => {
  /** @type {number[]} */
  const list1 = []
  /** @type {number[]} */
  const list2 = []
  values
    .map(a => a.split('   '))
    .forEach(a => {
      list1.push(+a[0])
      list2.push(+a[1])
    })
  return {
    list1,
    list2,
  }
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const {list1, list2} = readInput(values)
  
  // sort list
  list1.sort()
  list2.sort()
  
  return list1.reduce((acc, curr, i) => {
    return acc + Math.abs(list2[i] - curr)
  }, 0)
}
/**
 * @param {string[]} values
*/
module.exports.computeLevel2 = (values) => {
  const {list1, list2} = readInput(values)
  const nbCount = list2.reduce((acc, curr) => {
    if(acc[curr]) acc[curr]++
    else acc[curr] = 1
    return acc
  }, {})
  return list1.reduce((acc, curr) => {
    return acc + (nbCount[curr] ?? 0) * curr
  }, 0)
}
