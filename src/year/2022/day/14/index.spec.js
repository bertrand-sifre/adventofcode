const sample = [
  "498,4 -> 498,6 -> 496,6",
  "503,4 -> 502,4 -> 502,9 -> 494,9"
]

const code = require('./index')

describe('2022 day 14', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(24)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(93)
  })
})