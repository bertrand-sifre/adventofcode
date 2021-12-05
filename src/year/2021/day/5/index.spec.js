const sample = ["0,9 -> 5,9", "8,0 -> 0,8", "9,4 -> 3,4", "2,2 -> 2,1", "7,0 -> 7,4", "6,4 -> 2,0", "0,9 -> 2,9", "3,4 -> 1,4", "0,0 -> 8,8", "5,5 -> 8,2"]

const code = require('./index')

describe('2021 day 5', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(5)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(12)
  })
})