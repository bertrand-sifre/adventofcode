const sample = ["A Y", "B X", "C Z"]

const code = require('./index')

describe('2022 day 2', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(15)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(12)
  })
})