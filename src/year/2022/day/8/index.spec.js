const sample = ["30373", "25512", "65332", "33549", "35390"]

const code = require('./index')

describe('2022 day 8', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(21)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(8)

  })
})