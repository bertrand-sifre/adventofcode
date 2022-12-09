const sample = [
  "R 4",
  "U 4",
  "L 3",
  "D 1",
  "R 4",
  "D 1",
  "L 5",
  "R 2",
]

const code = require('./index')

describe('2022 day 9', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(13)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(1)
  })
  it('valid sample level 3', () => {
    const rst = code.computeLevel2([
      'R 5',
      'U 8',
      'L 8',
      'D 3',
      'R 17',
      'D 10',
      'L 25',
      'U 20',
    ])
    expect(rst).toEqual(36)
  })
})