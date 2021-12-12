const sample = ["5483143223", "2745854711", "5264556173", "6141336146", "6357385478", "4167524645", "2176841721", "6882881134", "4846848554", "5283751526"]
// const sample = [
//   '11111',
//   '19991',
//   '19191',
//   '19991',
//   '11111',
// ]
const code = require('./index')

describe('2021 day 11', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(1656)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(195)
  })
})