/**
 * @param {string} line 
 * @returns 
 */
const findValid = (line) => {
  return line.match(/mul\(\d{1,3},\d{1,3}\)/gm)
}
/**
 * @param {string} line 
 * @returns 
 */
const findValid2 = (line) => {
  return line.match(/mul\(\d{1,3},\d{1,3}\)|don't\(\)|do\(\)/gm)
}
/**
 * @param {string} mul 
 */
const executeMul = mul => {
  const numbers =  /mul\((\d{1,3}),(\d{1,3})\)/gm.exec(mul)
  if(!numbers) throw new Error('not null')
  return +numbers[1] * +numbers[2]
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const multiplications = findValid(values.join(''))
  return multiplications?.map(executeMul).reduce((a,b) => a+b, 0)
}
/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const multiplications = findValid2(values.join(''))
  let compute = true
  return multiplications?.map((m) => {
    if(m==="don't()") {
      compute = false
      return 0
    }
    if(m==='do()') {
      compute = true
      return 0
    }
    if(!compute) return 0
    return executeMul(m)
  }).reduce((a,b) => a+b, 0)
}
