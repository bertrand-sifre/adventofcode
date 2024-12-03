/**
 * @param {string[]} values 
 */
const readReport = (values) => {
  return values.map(line => line.split(' ').map(a => +a))
}

/**
 * 
 * @param {number[]} report 
 * @returns {boolean}
 */
const onlyIncOrDesc = report => {
  let diff = null
  for (let index = 0; index < report.length-1; index++) {
    const value = report[index]
    const nDiff = value - report[index+1]
    const abs = Math.abs(nDiff)
    if(abs > 3 || abs < 1) return false
    if(diff != null && (diff * nDiff) < 0) return false
    diff = nDiff  
  }
  return true
}

/**
* 
* @param {number[]} report 
* @returns {boolean}
*/
const recurs = report => {
  for (let i=0; i<report.length; i++) {
    const a = onlyIncOrDesc(report.filter((p,j) => j!=i))
    if(a) return true
  }
  return false
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const reports = readReport(values)
  return reports.filter(onlyIncOrDesc).length
}
/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const reports = readReport(values)
  const reportNotValid = reports.filter(a => !onlyIncOrDesc(a))
  const withoutTolerante = reportNotValid.filter(a => !recurs(a))
  return reports.length - withoutTolerante.length
}
