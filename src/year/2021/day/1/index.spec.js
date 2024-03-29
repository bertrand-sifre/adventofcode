const sample = ["199", "200", "208", "210", "200", "207", "240", "269", "260", "263"]

const code = require('./index')

describe('2021 day 1', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(7)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(5)
  })
})