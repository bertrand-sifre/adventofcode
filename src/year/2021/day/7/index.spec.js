const sample = ["16,1,2,0,4,2,7,1,2,14"]

const code = require('./index')

describe('2021 day 7', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(37)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(168)
  })
})