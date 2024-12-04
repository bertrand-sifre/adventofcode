const sample = ["xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"]

const code = require('./index')

describe('2024 day 3', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(161)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(["xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"])
    expect(rst).toEqual(48)
  })
})