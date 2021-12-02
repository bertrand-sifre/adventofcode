const sample = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]

const code = require('./index')

describe('2021 day 2', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(150)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(900)
  })
})