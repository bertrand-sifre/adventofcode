const sample = ["3,4,3,1,2"]

const code = require('./index')

describe('2021 day 6', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(5934)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(26984457539)
  })
})