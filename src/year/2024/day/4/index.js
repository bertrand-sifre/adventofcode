/**
 * 
 * @param {string[][]} array 
 * @param {number} x 
 * @param {number} y 
 */
const nbXmas = (array, x, y) => {
  if(array[x][y] !== 'X') return 0
  let nb = 0
  if((array[x][y+1] + array[x][y+2] + array[x][y+3])==='MAS' )  nb++
  if((array[x][y-1] + array[x][y-2] + array[x][y-3])==='MAS' )  nb++
  if(array[x+3] && (array[x+1][y] + array[x+2][y] + array[x+3][y])==='MAS' )  nb++
  if(array[x-3] && (array[x-1][y] + array[x-2][y] + array[x-3][y])==='MAS' )  nb++
  
  if(array[x+3] && (array[x+1][y+1] + array[x+2][y+2] + array[x+3][y+3])==='MAS' )  nb++
  if(array[x+3] && (array[x+1][y-1] + array[x+2][y-2] + array[x+3][y-3])==='MAS' )  nb++
  if(array[x-3] && (array[x-1][y-1] + array[x-2][y-2] + array[x-3][y-3])==='MAS' )  nb++
  if(array[x-3] && (array[x-1][y+1] + array[x-2][y+2] + array[x-3][y+3])==='MAS' )  nb++

  return nb
}

/**
 * 
 * @param {string[][]} array 
 * @param {number} x 
 * @param {number} y 
 */
const nbX_Mas = (array, x, y) => {
  if(array[x][y] !== 'A') return 0
  if(array[x-1] === undefined) return 0
  if(array[x+1] === undefined) return 0

  const diag1 = array[x-1][y-1] + array[x+1][y+1]
  const diag2 = array[x-1][y+1] + array[x+1][y-1]

  if((diag1 === 'MS' || diag1 === 'SM') &&(diag2 === 'MS' || diag2 === 'SM')) return 1
  
  return 0
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const xmas = values.map(a => a.split(''))
  let nb = 0
  for (let i=0; i < xmas.length; i++) {
    for (let j=0; j < xmas[0].length; j++) {
      nb += nbXmas(xmas,i,j)
    }
  }
  return nb
}
/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const xmas = values.map(a => a.split(''))
  let nb = 0
  // return xmas.map((line, i) => {
  //   return line.map((c,j) => {
  //     return nbX_Mas(xmas, i,j)
  //   }).join('')
  // }).join('\n')
  for (let i=0; i < xmas.length; i++) {
    for (let j=0; j < xmas[0].length; j++) {
      nb += nbX_Mas(xmas,i,j)
    }
  }
  return nb
}
