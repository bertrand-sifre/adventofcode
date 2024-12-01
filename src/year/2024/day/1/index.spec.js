const sample = ["3   4","4   3","2   5","1   3","3   9","3   3"]

const code = require('./index')

describe('2024 day 1', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(11)
  })
  it('valid sample level 2', () => {
    const rst =  code.computeLevel2(sample)
    expect(rst).toEqual(31)
  })
})