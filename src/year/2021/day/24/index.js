// my input,
// I split input before all inp w
const sample = [
  [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 12',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 6',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 11',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 12',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 10',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 5',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 10',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 10',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -16',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 7',
    'mul y x',
    'add z y',]
  , [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 14',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 0',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 12',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 4',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -4',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 12',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 15',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 14',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -7',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 13',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -8',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 10',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -4',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 11',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -15',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 9',
    'mul y x',
    'add z y',
  ], [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -8',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 9',
    'mul y x',
    'add z y',
  ]
]

/**
 * @param {string} v 
 * @param {{w:number, x:number,y:number, z:number }} values 
 * @returns 
 */
const getValue = (v, values) => {
  if (v === 'x' || v === 'y' || v === 'z' || v === 'w') {
    return values[v]
  }
  return +v
}

/**
 * @param {string} instruction
 * @param {{w:number, x:number,y:number, z:number }} values
 * @param {number} digitModelNumber
 */
const executeInstrcution = (instruction, values, digitModelNumber) => {
  const split = instruction.split(' ')
  const cmd = split[0]
  const arg0 = split[1]
  const arg1 = split.length === 3 ? split[2] : undefined
  if (cmd === 'inp') {
    // inp a - Read an input value and write it to variable a.
    values[arg0] = digitModelNumber
  }
  if (cmd === 'add') {
    // add a b - Add the value of a to the value of b, then store the result in variable a.
    values[arg0] += getValue(arg1, values)
  }
  if (cmd === 'mul') {
    // mul a b - Multiply the value of a by the value of b, then store the result in variable a.
    values[arg0] *= getValue(arg1, values)
  }
  if (cmd === 'div') {
    // div a b - Divide the value of a by the value of b, truncate the result to an integer, then store the result in variable a. (Here, "truncate" means to round the value toward zero.)
    values[arg0] = values[arg0] / getValue(arg1, values) | 0
  }
  if (cmd === 'mod') {
    //mod a b - Divide the value of a by the value of b, then store the remainder in variable a. (This is also called the modulo operation.)
    values[arg0] = values[arg0] % getValue(arg1, values)
  }
  if (cmd === 'eql') {
    //eql a b - If the value of a and b are equal, then store the value 1 in variable a. Otherwise, store the value 0 in variable a.
    values[arg0] = values[arg0] === getValue(arg1, values) ? 1 : 0
  }
}

/**
 * @param {string[]} program
 * @param {{w:number, x:number,y:number, z:number }} startValue
 * @param {number} digitModelNumber
 */
const execute = (program, startValue, digitModelNumber) => {
  program.forEach(line => {
    executeInstrcution(line, startValue, digitModelNumber)
  })
  return startValue
}

const lines = [
  [1, 12, 6],
  [1, 11, 12],
  [1, 10, 5],
  [1, 10, 10],
  [26, -16, 7],
  [1, 14, 0],
  [1, 12, 4],
  [26, -4, 12],
  [1, 15, 14],
  [26, -7, 13],
  [26, -8, 10],
  [26, -4, 11],
  [26, -15, 9],
  [26, -8, 9]
]

/**
 * 
 * @param {number} d 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {number} arg3 
 * @param {number} z 
 * @returns {number}
 */
const prg = (d, arg1, arg2, arg3, z) => {
  if ((z % 26 + arg2) === d) {
    return (z / arg1 | 0)
  }
  return (26 * (z / arg1 | 0)) + (d + arg3)
}


const solve = () => {
  /**
   * @type {Map<number, string>}
   */
  let pRst = new Map()
  pRst.set(0, '')
  lines.forEach((line, index) => {
    console.log(index, pRst.size, line)
    /**
     * @type {Map<number, string>}
     */
    const newRst = new Map()
    for (let digitModelNumber = 1; digitModelNumber <= 9; digitModelNumber++) { // for step2
      // for (let digitModelNumber = 9; digitModelNumber >= 1; digitModelNumber--) { // for step1
      pRst.forEach((d, z) => {
        const newZ = prg(digitModelNumber, line[0], line[1], line[2], z)
        // console.log(digitModelNumber, line[0], line[1], line[2], z)
        if (!newRst.get(newZ)) {
          newRst.set(newZ, d + digitModelNumber)
        }
      })
    }
    pRst = newRst
    console.log(pRst.get(0))
    // console.log(pRst)
    // process.exit()
  })
  console.log(pRst.get(0))
}

console.log(solve())

/**
 * @param {string[][]} input 
 * @returns 
 */
module.exports.computeLevel1 = (input) => {
  const serialNumber = '99893999291967'
  let data = { w: 0, x: 0, y: 0, z: 0 }
  let z = 0
  serialNumber.split('').forEach((c, i) => {
    data = execute(input[i], data, +c)
    z = prg(+c, lines[i][0], lines[i][1], lines[i][2], z)
    console.log(i, c, data, z)
  })
}
// console.log(
//   this.computeLevel1(sample)
// )