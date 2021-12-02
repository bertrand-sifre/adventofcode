const sample = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"]

const code = require('./index')

describe('2020 day 2', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(2)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(1)
  })
})