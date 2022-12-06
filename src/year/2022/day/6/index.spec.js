const sample = ["mjqjpqmgbljsphdztnvjfqwrcgsmlb"]

const code = require('./index')

describe('2022 day 6', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(7)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(19)
  })
})