const sample = ["1721","979","366","299","675","1456"]

const code = require('./index')

describe('2020 day 1', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(514579)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(241861950)
  })
})