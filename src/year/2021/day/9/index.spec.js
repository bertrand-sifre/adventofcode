const sample = ["2199943210", "3987894921", "9856789892", "8767896789", "9899965678"]

const code = require('./index')

describe('2021 day 9', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(15)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(1134)
  })
})