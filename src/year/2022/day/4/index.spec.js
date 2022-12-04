const sample = ["2-4,6-8", "2-3,4-5", "5-7,7-9", "2-8,3-7", "6-6,4-6", "2-6,4-8"]

const code = require('./index')

describe('2022 day 4', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(2)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(4)

  })
})